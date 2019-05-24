<template>
    <v-container id="Introduction">
        <v-layout column>
            <v-flex class="display-2 text-xs-center my-5">
                {{ headline }}
            </v-flex>
            <v-flex>
                <div class="headline text-xs-center mt-0">
                    {{ subHeadline }}
                </div>
                <p v-for="(item, i) in text" :key="i" class="subheading mt-3">
                    &emsp;&emsp; {{ item }}
                </p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeIntroduction',
    props: {
        headline: {
            type: String,
            default: ''
        },
        subHeadline: {
            type: String,
            default: ''
        },
        text: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style scoped></style>
