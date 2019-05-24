export default function({ app, store }) {
    // beforeLanguageSwitch called right before setting a new locale
    app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
        console.log(oldLocale, newLocale)
        console.log(store.getters['menu/menu'])
        if (oldLocale !== newLocale || !store.getters['menu/menu']) {
            store.dispatch('menu/getMenu', newLocale)
        }
    }
    // onLanguageSwitched called right after a new locale has been set
    app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
        // console.log(oldLocale, newLocale)
        // console.log(store.getters['menu/massage'])
    }
}
