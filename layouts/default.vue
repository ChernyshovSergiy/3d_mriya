<template>
    <v-app>
        <app-navigation />
        <nuxt />
        <!--<v-footer :fixed="fixed">-->
        <!--<span>&copy; 2019</span>-->
        <!--</v-footer>-->
        <footer-comp />
        <app-fab />
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation.vue'
import FooterComp from '@/components/FooterComp.vue'
import AppFab from '@/components/AppFab.vue'

export default {
    components: {
        AppNavigation,
        FooterComp,
        AppFab
    }
}
</script>
<style></style>
