<template>
    <v-responsive>
        <v-parallax
            :src="require('@/assets/images/TownFoneDark.jpg')"
            height="380"
            class="hidden-xs-only"
        >
            <v-layout align-center justify-space-around row wrap fill-height>
                <template v-for="(image, index) in images">
                    <v-flex :key="index" xs12 sm4 md3 block class="pa-3">
                        <v-responsive>
                            <v-img
                                :src="require('@/assets/images/' + `${image}`)"
                                width="100%"
                            />
                        </v-responsive>
                    </v-flex>
                </template>
            </v-layout>
        </v-parallax>
        <v-parallax
            :src="require('@/assets/images/TownFoneVerticalDark.jpg')"
            height="auto"
            class="hidden-sm-and-up"
        >
            <v-layout align-center justify-center row wrap fill-heigh>
                <template v-for="(image, index) in images">
                    <v-flex :key="index" xs10 sm4 block class="pa-3">
                        <v-responsive>
                            <v-img
                                :src="require('@/assets/images/' + `${image}`)"
                                width="100%"
                            />
                        </v-responsive>
                    </v-flex>
                </template>
            </v-layout>
        </v-parallax>
    </v-responsive>
</template>

<script>
export default {
    name: 'ModelingFons',
    data() {
        return {
            images: [
                'Years_of_Innovations.svg',
                'Models_Developed.svg',
                'Printed_Products.svg'
            ]
        }
    }
}
</script>

<style scoped></style>
