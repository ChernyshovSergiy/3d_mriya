<template>
    <span>
        <v-navigation-drawer
            v-model="drawer"
            app
            class="blue-grey darken-4"
            dark
            disable-resize-watcher
        >
            <v-toolbar flat>
                <v-list>
                    <v-list-tile @click="drawer = !drawer">
                        <v-list-tile-title class="title"
                            ><v-icon left>menu</v-icon>
                            MENU
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile
                        v-if="!authenticated"
                        :key="index"
                        active-class="yellow--text"
                        router
                        :to="item.url"
                    >
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title
                                v-text="item.title"
                            ></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
                <template v-if="authenticated">
                    <v-list-tile active-class="yellow--text" to="/about">
                        <v-list-tile-action>
                            <v-icon>face</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title
                                v-text="'Profile'"
                            ></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <v-list-tile active-class="yellow--text" @click="logout">
                        <v-list-tile-action>
                            <v-icon>exit_to_app</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title
                                v-text="'Logout'"
                            ></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="#000509" dark>
            <v-toolbar-side-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <nuxt-link to="/">
                <v-toolbar-title class="yellow--text">
                    <span class="font-weight-light">{{ appTitle3 }}</span>
                    <span>{{ appTitle }}</span>
                </v-toolbar-title>
            </nuxt-link>
            <v-btn flat class="hidden-sm-and-down" to="/about">Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div v-if="!authenticated" class="hidden-sm-and-down">
                <v-btn flat to="/sign-in">SIGN IN</v-btn>
                <v-btn color="blue-grey darken-4" to="/join">JOIN</v-btn>
            </div>
            <div v-else class="hidden-sm-and-down">
                <div class="text-xs-center">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on }">
                            <v-btn flat v-on="on"
                                >{{ user.name }}
                                <v-icon dark>expand_more</v-icon>
                            </v-btn>
                        </template>
                        <v-list
                            dark
                            class="blue-grey darken-4 white--text pa-0"
                        >
                            <v-list-tile
                                active-class="yellow--text"
                                to="/about"
                            >
                                <v-list-tile-action>
                                    <v-icon>face</v-icon>
                                </v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-title
                                        v-text="'Profile'"
                                    ></v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile
                                active-class="yellow--text"
                                @click="logout"
                            >
                                <v-list-tile-action>
                                    <v-icon>exit_to_app</v-icon>
                                </v-list-tile-action>

                                <v-list-tile-content>
                                    <v-list-tile-title
                                        v-text="'Logout'"
                                    ></v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-menu>
                </div>
            </div>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle3: '3D',
            appTitle: 'Mriya',
            drawer: false,
            items: [
                { title: 'Menu', icon: 'home', url: '/about' },
                { title: 'Profile', icon: 'face', url: '/about' },
                { title: 'Sign In', icon: 'lock', url: '/sign-in' },
                { title: 'Join', icon: 'input', url: '/join' }
            ],
            private: [
                { title: 'Profile', icon: 'face', url: '/about' },
                { title: 'Logout', icon: 'lock', url: '/sign-in' }
            ]
        }
    },
    computed: {
        isAuthenticated() {
            // return this.$store.getters.isAuthenticated
            return false
        }
    },
    methods: {
        logout() {
            this.$auth.logout()
        }
    }
}
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
