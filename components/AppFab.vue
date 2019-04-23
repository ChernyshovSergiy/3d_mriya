<template>
    <v-fab-transition>
        <template>
            <v-btn
                v-show="fab"
                fab="fab"
                small
                transition
                dark="dark"
                fixed="fixed"
                bottom="bottom"
                right="right"
                color="red"
                @click="toTop"
            >
                <v-icon large>keyboard_arrow_up</v-icon>
            </v-btn>
        </template>
    </v-fab-transition>
</template>

<script>
export default {
    name: 'AppFab',

    data: () => ({
        fab: false,
        offsetTop: 0
    }),

    methods: {
        onScroll(e) {
            console.log(e.target.scrollTop)
            if (typeof window === 'undefined') return

            const top =
                window.pageYOffset || document.documentElement.offsetTop || 10

            this.fab = top > 30
        },
        toTop() {
            this.$router.push({ hash: '' })
            this.$vuetify.goTo(0)
        }
    }
}
</script>

<style scoped></style>
