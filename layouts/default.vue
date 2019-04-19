<template>
    <v-app>
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
                        v-if="!isAuthenticated"
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
                <template v-if="isAuthenticated">
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
            <v-btn flat class="hidden-sm-and-down" to="/menu">Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <v-btn flat to="/sign-in">SIGN IN</v-btn>
                <v-btn color="blue-grey darken-4" to="/join">JOIN</v-btn>
            </div>
            <div v-else class="hidden-sm-and-down">
                <v-btn flat to="/about">PROFILE</v-btn>
                <v-btn outline color="white" @click="logout">Logout</v-btn>
            </div>
        </v-toolbar>
        <nuxt />
        <v-footer :fixed="fixed" app>
            <span>&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            appTitle3: '3D',
            appTitle: 'Mriya',
            drawer: false,
            items: [
                { title: 'Menu', icon: 'home', url: '/menu' },
                { title: 'Profile', icon: 'face', url: '/about' },
                { title: 'Sign In', icon: 'lock', url: '/sign-in' },
                { title: 'Join', icon: 'input', url: '/join' }
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
            // this.$store.dispatch('userSignOut')
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
