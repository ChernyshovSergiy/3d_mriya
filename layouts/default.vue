<template>
    <v-app>
        <app-navigation />
        <nuxt />
        <footer-comp />
        <app-fab />
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation.vue'
import FooterComp from '@/components/FooterComp.vue'
import AppFab from '@/components/AppFab.vue'

export default {
    head() {
        return this.$nuxtI18nSeo()
    },
    components: {
        AppNavigation,
        FooterComp,
        AppFab
    }
}
</script>
<style></style>
