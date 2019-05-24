<template>
    <v-app>
        <app-navigation />
        <nuxt />
        <!--        <footer-comp />-->
        <footer-comp
            :title1="title1"
            :points1="points1"
            :title2="title2"
            :points2="points2"
            :title3="title3"
            :points3="points3"
            :title4="title4"
            :points4="points4"
        />
        <app-fab />
    </v-app>
</template>

<script>
import axios from 'axios'
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
    },
    data() {
        return {
            clang: this.$i18n.locale,
            points1: [],
            points2: [],
            points3: [],
            points4: []
        }
    },
    computed: {
        title1() {
            return this.$store.getters['menu/title1']
        },
        title2() {
            return this.$store.getters['menu/title2']
        },
        title3() {
            return this.$store.getters['menu/title3']
        },
        title4() {
            return this.$store.getters['menu/title4']
        }
    },
    watch: {
        title1(newValue, oldValue) {
            this.changePointLang()
        }
    },
    created: async function() {
        try {
            const apiUrl = 'http://127.0.0.1:9090/api/v1/page/menus'
            const cLang = this.$i18n.locale

            const { data } = await axios.post(apiUrl, {
                language: cLang
            })

            this.$store.commit('menu/setMenu', data.data)
            this.$store.commit('menu/setTitle1', data.data.section1.title)
            this.$store.commit('menu/setPoints1', data.data.section1.points)
            this.$store.commit('menu/setTitle2', data.data.section2.title)
            this.$store.commit('menu/setPoints2', data.data.section2.points)
            this.$store.commit('menu/setTitle3', data.data.section3.title)
            this.$store.commit('menu/setPoints3', data.data.section3.points)
            this.$store.commit('menu/setTitle4', data.data.section4.title)
            this.$store.commit('menu/setPoints4', data.data.section4.points)
            this.points1 = data.data.section1.points
            this.points2 = data.data.section2.points
            this.points3 = data.data.section3.points
            this.points4 = data.data.section4.points
        } catch (e) {
            console.log(e)
        }
    },
    methods: {
        async changePointLang() {
            try {
                const apiUrl = 'http://127.0.0.1:9090/api/v1/page/menus'
                const cLang = this.$i18n.locale

                const { data } = await axios.post(apiUrl, {
                    language: cLang
                })

                this.points1 = data.data.section1.points
                this.points2 = data.data.section2.points
                this.points3 = data.data.section3.points
                this.points4 = data.data.section4.points
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>
<style></style>
