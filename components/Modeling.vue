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
                    <v-card-title primary class="display-2"
                        >Modeling</v-card-title
                    >
                    <v-card-text class="subheading"
                        >&emsp;&emsp;{{ lorem }}</v-card-text
                    >
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Modeling',
    data: () => ({
        lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    })
}
</script>

<style scoped></style>
