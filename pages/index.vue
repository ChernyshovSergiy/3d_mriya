<template>
    <div class="home mt-5">
        <home-start-screen />
        <home-introduction />
        <home-produce-steps />
        <modeling />
        <modeling-fons />
        <printing />
        <printing-fons />
        <painting />
        <no-ssr>
            <swiper-images-carousel2 />
        </no-ssr>
        <v-layout row>
            <v-flex
                xs12
                class="text-xs-center display-1 font-weight-lite my-5"
                >{{ title }}</v-flex
            >
        </v-layout>
    </div>
</template>

<script>
import HomeStartScreen from '~/components/HomeStartScreen.vue'
import HomeIntroduction from '~/components/HomeIntroduction.vue'
import HomeProduceSteps from '~/components/HomeProduceSteps.vue'
import Modeling from '~/components/Modeling.vue'
import ModelingFons from '~/components/ModelingFons.vue'
import Printing from '~/components/Printing.vue'
import PrintingFons from '~/components/PrintingFons.vue'
import Painting from '~/components/Painting.vue'
import SwiperImagesCarousel2 from '~/components/SwiperImagesCarousel2.vue'

export default {
    name: 'Home',
    components: {
        HomeStartScreen,
        HomeIntroduction,
        HomeProduceSteps,
        Modeling,
        ModelingFons,
        Printing,
        PrintingFons,
        Painting,
        SwiperImagesCarousel2
    },
    data() {
        return {
            title: 'We will deliver your order on time to anywhere in the world'
        }
    },
    computed: {
        genKey() {
            return Math.floor(Math.random() * 1000000000)
        }
    }
}
</script>
