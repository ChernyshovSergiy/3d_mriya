<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex
                xs12
                class="text-xs-center display-1 font-weight-lite my-5"
                >{{ title }}</v-flex
            >
        </v-layout>
        <v-layout row wrap>
            <v-flex v-for="step in steps" :key="step.name" xs12 sm12 md4>
                <v-hover>
                    <v-card
                        slot-scope="{ hover }"
                        :class="`elevation-${hover ? 12 : 2}`"
                        class="mx-auto"
                    >
                        <v-responsive>
                            <v-img
                                :src="
                                    require('@/assets/images/' +
                                        `${step.image}`)
                                "
                                height="100%"
                            >
                                <v-layout
                                    align-end
                                    justify-center
                                    fill-height
                                    pa-3
                                    white--text
                                >
                                    <div
                                        class="title font-weight-light text-capitalize"
                                    >
                                        {{ step.name }}
                                    </div>
                                </v-layout>
                            </v-img>
                        </v-responsive>

                        <v-card-text>
                            <div>
                                <h3 class="headline mb-0 text-capitalize">
                                    {{ step.title }}
                                </h3>
                                <div>
                                    {{ step.text }}
                                </div>
                            </div>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-spacer></v-spacer>
                        <div>
                            <v-card-actions
                                v-if="['menu'].includes($route.name)"
                            >
                                <v-btn
                                    outline
                                    block
                                    color="green"
                                    @click="showRecipes(step.name)"
                                    >Select This Plan</v-btn
                                >
                            </v-card-actions>

                            <v-card-actions v-else>
                                <v-btn
                                    v-scroll-to="'#' + step.title"
                                    outline
                                    color="orange"
                                    depressed
                                >
                                    {{ step.button }}
                                </v-btn>
                            </v-card-actions>
                        </div>
                    </v-card>
                </v-hover>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeProduceSteps',
    data() {
        return {
            title: 'Home Page Produce Steps',
            steps: [
                {
                    name: 'Step 1',
                    title: 'Modeling',
                    image: 'MasaratyGride.jpg',
                    text:
                        'The Keto diet is a high-fat, adequate-protein, low-carbohydrate diet. The diet forces the body to burn fats rather than carbohydrates by putting the body into ketosis.',
                    button: 'select model'
                },
                {
                    name: 'Step 2',
                    title: 'Printing',
                    image: 'MasaratyPrint.jpg',
                    text:
                        'The Paleo diet requires the sole or predominant consumption of foods presumed to have been the only foods available to or consumed by humans during the Paleolithic era.',
                    button: 'print model'
                },
                {
                    name: 'Step 3',
                    title: 'Painting',
                    image: 'MasaratyPaint.jpg',
                    text:
                        'The vegan diet abstains from the use of animal products. The vegan diet does not consume meat, diary products, eggs or any all other animal-derived ingredients.',
                    button: 'paint model'
                }
            ]
        }
    },
    methods: {
        showRecipes(plan) {
            // this.$store.dispatch('getRecipes', plan)
            return []
        }
    }
}
</script>

<style scoped></style>
