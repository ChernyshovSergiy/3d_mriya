<template>
    <v-container id="Printing">
        <v-layout align-center justify-space-between row wrap fill-height>
            <v-flex xs12 md6 block text-xs-right>
                <v-card flat color="transparent">
                    <v-card-title primary class="display-2 "
                        ><v-spacer /> 3D Printing</v-card-title
                    >
                    <v-card-text class="subheading">{{ lorem }}</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 md5 block mt-5>
                <v-responsive>
                    <v-img
                        :src="require('@/assets/images/3DPrinted.png')"
                        height="100%"
                    />
                </v-responsive>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Printing',
    data: () => ({
        lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    })
}
</script>

<style scoped></style>
