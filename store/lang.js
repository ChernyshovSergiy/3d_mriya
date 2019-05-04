export const state = () => ({
    locales: ['en', 'fr', 'ru', 'ua', 'es', 'de', 'it', 'cn', 'jp', 'sa'],
    locale: 'en'
})

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        } else {
            state.locale = 'en'
        }
    }
}

export const actions = {
    setLanguage({ commit }, locale) {
        commit('SET_LANG', locale)
    }
}

export const getters = {
    locale(state) {
        return state.locale
    },
    locales(state) {
        return state.locales
    }
}
