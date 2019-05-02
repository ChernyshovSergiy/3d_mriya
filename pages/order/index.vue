<template>
    <div class="home mt-5">
        <v-layout row>
            <v-flex
                xs12
                class="text-xs-center display-1 font-weight-lite my-5"
                >{{ title }}</v-flex
            >
        </v-layout>
        <order-form />
    </div>
</template>

<script>
import OrderForm from '@/components/OrderForm.vue'
export default {
    components: {
        OrderForm
    },
    data() {
        return {
            title: 'This is Order form page'
        }
    }
}
</script>

<style scoped></style>
