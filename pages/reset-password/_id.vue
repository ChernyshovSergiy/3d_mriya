<template>
    <v-container fill-height class="mt-5">
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="blue-grey darken-4">
                        <v-toolbar-title>New Password</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                                v-model="formPoint.email"
                                prepend-icon="person"
                                name="email"
                                label="Email"
                                type="email"
                                :rules="emailRules"
                                required
                            >
                            </v-text-field>
                            <v-text-field
                                id="password"
                                v-model="formPoint.password"
                                prepend-icon="lock"
                                name="password"
                                label="Password"
                                type="password"
                                required
                                :rules="passwordRules"
                                autocomplete="password"
                            >
                            </v-text-field>
                            <v-text-field
                                v-model="formPoint.password_confirmation"
                                prepend-icon="check_circle_outline"
                                name="password_confirmation"
                                label="Confirm Password"
                                type="password"
                                required
                                :rules="confirmationPasswordRules"
                                data-cy="joinPasswordField"
                                autocomplete="password_confirmation"
                            >
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            dark
                            color="blue-grey darken-4"
                            :disabled="!valid"
                            @click="resetPassword"
                            >Update</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { VTextField } from 'vuetify/lib'
export default {
    middleware: 'guest',
    components: {
        VTextField
    },
    data() {
        return {
            valid: false,
            formPoint: {
                token: '',
                email: '',
                password: '',
                password_confirmation: '',
                has_error: false
            },
            emailRules: [
                v => !!v || 'E-mail is required',
                v =>
                    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
                        v
                    ) || 'E-mail must be valid'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v =>
                    v.length >= 8 ||
                    'Password must be greater than 8 characters'
            ],
            confirmationPasswordRules: [
                v => !!v || 'Password confirmation is required',
                v => v === this.formPoint.password || 'Password must be confirm'
            ]
        }
    },
    methods: {
        async resetPassword() {
            if (this.$refs.form.validate()) {
                try {
                    await this.$axios
                        .post('/auth/reset/password', {
                            token: this.$route.params.id,
                            email: this.formPoint.email,
                            password: this.formPoint.password,
                            password_confirmation: this.formPoint
                                .password_confirmation
                        })
                        .then(
                            response => {
                                console.log('result: ', response.data)
                                this.$router.push('/sign-in')
                            },
                            error => {
                                console.error(error)
                            }
                        )
                        .catch(error => {
                            console.log(error.response)
                        })
                } catch (e) {}
            }
        }
    },
    strict: process.env.NODE_ENV !== 'production'
}
</script>

<style scoped></style>
