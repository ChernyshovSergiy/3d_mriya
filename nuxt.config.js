import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
            }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#ffea04' },

    router: {
        middleware: ['clearValidationErrors']
    },

    /*
     ** Global CSS
     */
    css: [
        '~/assets/style/app.styl',
        '~/assets/style/main.css',
        'swiper/dist/css/swiper.css'
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/vuetify',
        './plugins/mixins/validation',
        './plugins/mixins/user',
        './plugins/axios',
        './plugins/vue-flag-icon',
        // './plugins/auth',
        { src: '~/plugins/swiper.js', ssr: false },
        { src: '~/plugins/vue-gallery.js', ssr: false }
    ],

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: 'auth/login',
                        method: 'post',
                        propertyName: 'token'
                    },
                    logout: { url: 'auth/logout', method: 'get' },
                    user: {
                        url: 'user',
                        method: 'get',
                        propertyName: 'data'
                    }
                }
                // tokenRequired: true,
                // tokenType: 'bearer'
            }
        },
        redirect: {
            login: '/sign-in',
            logout: '/',
            home: '/'
        }
    },
    /*
     ** Nuxt.js modules
     */
    modules: [
        [
            'nuxt-fontawesome',
            {
                component: 'fa',
                imports: [
                    {
                        set: '@fortawesome/free-brands-svg-icons',
                        icons: ['fab']
                    },
                    {
                        set: '@fortawesome/free-solid-svg-icons',
                        icons: ['fas']
                    }
                ]
            }
        ],
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        'vue-scrollto/nuxt'
        // [
        //     'nuxt-validate',
        //     {
        //         lang: 'ru'
        //     }
        // ]
    ],
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
        baseURL: 'http://127.0.0.1:9090/api/v1'
    },

    /*
     ** Build configuration
     */
    build: {
        // vendor: ['vue-awesome-swiper'],
        transpile: ['vuetify/lib', 'vue-flag-icon'],
        plugins: [new VuetifyLoaderPlugin()],
        loaders: {
            stylus: {
                import: ['~assets/style/variables.styl']
            }
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
        // extractCSS: true
    }
}
