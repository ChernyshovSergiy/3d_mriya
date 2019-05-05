export default {
    modules: [
        'nuxt-i18n',
        {
            locales: [
                {
                    flagCountry: 'gb',
                    code: 'en',
                    iso: 'en-GB',
                    file: 'en-GB.js',
                    name: 'English'
                },
                {
                    flagCountry: 'ru',
                    code: 'ru',
                    iso: 'ru-RU',
                    file: 'ru-RU.js',
                    name: 'Русский'
                }
            ],
            baseUrl: 'http://localhost:3000',
            defaultLocale: 'en',
            routesNameSeparator: '___',
            defaultLocaleRouteNameSuffix: 'default',
            // Routes generation strategy, can be set to one of the following:
            // - 'prefix_except_default': add locale prefix for every locale except default
            // - 'prefix': add locale prefix for every locale
            // - 'prefix_and_default': add locale prefix for every locale and default
            strategy: 'prefix_except_default',
            lazy: true,
            langDir: 'lang/',
            rootRedirect: '/',
            vueI18n: {
                fallbackLocale: 'en'
            },
            detectBrowserLanguage: {
                // If enabled, a cookie is set once a user has been redirected to his
                // preferred language to prevent subsequent redirections
                // Set to false to redirect every time
                useCookie: true,
                // Cookie name
                cookieKey: 'i18n_redirected',
                // Set to always redirect to value stored in the cookie, not just once
                alwaysRedirect: false,
                // If no locale for the browsers locale is a match, use this one as a fallback
                fallbackLocale: 'en'
            },
            differentDomains: false,
            forwardedHost: false,
            seo: false,
            vuex: {
                // Module namespace
                moduleName: 'i18n',

                // Mutations config
                mutations: {
                    // Mutation to commit to store current locale, set to false to disable
                    setLocale: 'I18N_SET_LOCALE',

                    // Mutation to commit to store current message, set to false to disable
                    setMessages: 'I18N_SET_MESSAGES'
                },

                // PreserveState from server
                preserveState: false
            },
            parsePages: true,
            encodePaths: true
        }
    ]
}
