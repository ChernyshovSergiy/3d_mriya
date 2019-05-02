<template>
    <div class="home mt-5">
        <v-container class="mt-3">
            <v-layout column>
                <v-flex class="display-2 text-xs-center my-5"
                    >This is Page About Our Company</v-flex
                >
                <v-flex>
                    <div class="headline mt-3">About Us</div>
                    <p class="subheading mt-3">
                        &emsp;&emsp;Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Cras pulvinar risus quis mauris
                        interdum, in euismod nibh pretium. Etiam pulvinar
                        tincidunt dapibus. Quisque sollicitudin, mauris a
                        consequat consectetur, turpis nisl sollicitudin enim, id
                        consectetur neque neque nec metus. Pellentesque dolor
                        nisi, vulputate quis lobortis ac, tincidunt et quam.
                        Mauris pulvinar blandit nisi nec mattis. Aliquam
                        accumsan ut sem eget efficitur. Vivamus in tortor
                        gravida eros laoreet condimentum nec vel dui. Nullam
                        quam massa, ultrices eget tincidunt a, pulvinar ac
                        libero.
                    </p>
                    <p class="subheading mt-3">
                        &emsp;&emsp;Nullam nec massa eu est fringilla lobortis.
                        Praesent in enim in justo blandit varius. Cras placerat
                        arcu in sapien rhoncus aliquet. Sed interdum tortor et
                        tincidunt condimentum. Etiam consequat mi leo, in
                        suscipit odio scelerisque molestie. Nam et purus
                        consequat, iaculis augue vel, sagittis ligula.
                        Vestibulum aliquet vulputate erat. Phasellus id mauris
                        mauris. Nunc a maximus dolor. Curabitur ut vestibulum
                        arcu. Curabitur non lacus justo. Cras varius a magna in
                        semper. Nulla eros ante, consectetur faucibus sapien eu,
                        rhoncus imperdiet dui. Sed viverra iaculis nunc, id
                        pulvinar massa egestas vitae.
                    </p>
                </v-flex>
            </v-layout>
        </v-container>
        <!--<footer-comp />-->
    </div>
</template>

<script>
// import FooterComp from '@/components/FooterComp.vue'

export default {
    middleware: 'auth',
    name: 'Index',
    components: {
        // FooterComp
    }
}
</script>

<style scoped></style>
