<template>
    <v-responsive :aspect-ratio="16 / 9">
        <v-container
            fluid
            fill-height
            class="home-hero"
            style="max-height: 100vh;"
        >
            <v-layout justify-center align-space-between column>
                <v-spacer />
                <div class="mb-3">
                    <v-layout row wrap justify-space-around align-center>
                        <v-flex xs8 sm6 md3 class="px-3">
                            <v-btn
                                outline
                                block
                                large
                                class="caption yellow--text"
                                ><v-icon left dark large>layers</v-icon>
                                <span class="headline">Printing</span></v-btn
                            >
                        </v-flex>

                        <v-flex xs12 sm8 md6 class="blue-grey darken-4">
                            <v-autocomplete
                                v-model="model"
                                :items="items"
                                :loading="isLoading"
                                :search-input.sync="search"
                                chips
                                clearable
                                hide-details
                                hide-selected
                                item-text="name"
                                item-value="symbol"
                                label="Search for a coin..."
                                outline
                                block
                                dark
                                solo
                                color="yellow"
                                background-color="yellow"
                                class="yellow--text"
                            >
                                <template #no-data>
                                    <v-list-tile>
                                        <v-list-tile-title>
                                            Search for your favorite
                                            <strong>Cryptocurrency</strong>
                                        </v-list-tile-title>
                                    </v-list-tile>
                                </template>
                                <template #selection="{ item, selected }">
                                    <v-chip
                                        :selected="selected"
                                        color="blue-grey"
                                        class="white--text"
                                    >
                                        <v-icon left>mdi-coin</v-icon>
                                        <span v-text="item.name"></span>
                                    </v-chip>
                                </template>
                                <template #item="{ item }">
                                    <v-list-tile-avatar
                                        color="indigo"
                                        class="headline font-weight-light white--text"
                                    >
                                        {{ item.name.charAt(0) }}
                                    </v-list-tile-avatar>
                                    <v-list-tile-content>
                                        <v-list-tile-title
                                            v-text="item.name"
                                        ></v-list-tile-title>
                                        <v-list-tile-sub-title
                                            v-text="item.symbol"
                                        ></v-list-tile-sub-title>
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <v-icon>mdi-coin</v-icon>
                                    </v-list-tile-action>
                                </template>
                            </v-autocomplete>
                        </v-flex>

                        <v-flex xs10 sm6 md3 class="px-3">
                            <div class="text-xs-center">
                                <!--<v-menu open-on-hover>-->
                                <v-menu>
                                    <template #activator="{ on: menu }">
                                        <v-tooltip bottom>
                                            <template
                                                #activator="{ on: tooltip }"
                                            >
                                                <v-btn
                                                    outline
                                                    block
                                                    large
                                                    class="caption yellow--text"
                                                    v-on="{
                                                        ...tooltip,
                                                        ...menu
                                                    }"
                                                    ><v-icon left dark large
                                                        >storage</v-icon
                                                    ><span class="headline"
                                                        >Categories</span
                                                    >

                                                    <v-icon right dark
                                                        >expand_more</v-icon
                                                    ></v-btn
                                                >
                                            </template>
                                            <span class="yellow--text"
                                                >Please select a category</span
                                            >
                                        </v-tooltip>
                                    </template>
                                    <v-list
                                        v-for="(category, index) in categories"
                                        :key="index"
                                        dark
                                        class="blue-grey darken-4 yellow--text pa-0"
                                    >
                                        <v-list-tile @click="index">
                                            <v-list-tile-title>{{
                                                category.title
                                            }}</v-list-tile-title>
                                        </v-list-tile>
                                        <v-divider />
                                    </v-list>
                                </v-menu>
                            </div>
                        </v-flex>
                    </v-layout>
                </div>
                <div
                    class="display-1 font-weight-light white--text text-xs-center mb-0 "
                >
                    <p>Stock assets to power your 3D dreams</p>
                </div>
                <div class="mt-0">
                    <v-layout column align-center class="my-2">
                        <v-flex xs12 md6>
                            <v-btn
                                v-scroll-to="'#Introduction'"
                                fab
                                class="mb-1 transparent"
                            >
                                <v-icon large color="yellow"
                                    >expand_more</v-icon
                                >
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </div>
            </v-layout>
        </v-container>
    </v-responsive>
</template>

<script>
export default {
    name: 'HomeStartScreen',
    data: () => ({
        isLoading: false,
        items: [],
        categories: [
            { title: 'Miniatures' },
            { title: 'Jewelry Model' },
            { title: 'Building Layouts' },
            { title: 'Prototypes' }
        ],
        model: null,
        search: null,
        loader: null,
        loading: false,
        loading1: false
    }),

    watch: {
        loader() {
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => (this[l] = false), 3000)

            this.loader = null
        },
        search() {
            // Items have already been loaded
            if (this.items.length > 0) return

            this.isLoading = true

            // Lazily load input items
            fetch('https://api.coinmarketcap.com/v2/listings/')
                .then(res => res.json())
                .then(res => {
                    this.items = res.data
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => (this.isLoading = false))
        }
    }
}
</script>

<style scoped>
.home-hero {
    background: url('../assets/images/Masaraty.jpg');
    background-size: cover;
    /*width: 100%;*/
    height: 100%;
    /*height: 100vh;*/
}
</style>
