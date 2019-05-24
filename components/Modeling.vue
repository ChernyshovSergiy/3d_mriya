<template>
    <v-container id="Modeling">
        <v-layout align-center justify-space-between row wrap fill-height>
            <v-flex xs12 md5 block mt-5>
                <v-responsive>
                    <v-img
                        :src="require('@/assets/images/Modeling.png')"
                        height="100%"
                    />
                </v-responsive>
            </v-flex>
            <v-flex xs12 md6 block>
                <v-card flat color="transparent">
                    <v-card-title primary class="display-2 text-capitalize">
                        {{ $t('modeling') }}
                    </v-card-title>
                    <v-card-text
                        v-for="(item, i) in text"
                        :key="i"
                        class="subheading"
                        >&emsp;&emsp;{{ item }}</v-card-text
                    >
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Modeling',
    props: {
        text: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {}
    }
}
</script>

<style scoped></style>
