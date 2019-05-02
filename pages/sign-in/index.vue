<template>
    <v-container fill-height class="mt-5">
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="blue-grey darken-4">
                        <v-toolbar-title>Login Form</v-toolbar-title>
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
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            dark
                            color="blue-grey darken-4"
                            :disabled="!valid"
                            @click="submit"
                            >Login</v-btn
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
    name: 'SignIn',
    middleware: 'guest',
    components: {
        VTextField
    },
    data() {
        return {
            valid: false,
            formPoint: {
                email: '',
                password: ''
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
            ]
        }
    },
    methods: {
        async submit() {
            if (this.$refs.form.validate()) {
                try {
                    await this.$auth.loginWith('local', {
                        data: {
                            email: this.formPoint.email,
                            password: this.formPoint.password
                        }
                    })
                } catch (e) {
                    return
                }
                this.$router.push(
                    this.$route.query.redirect
                        ? this.$route.query.redirect
                        : '/'
                )
            }
        }
    },
    strict: process.env.NODE_ENV !== 'production'
}
</script>

<style scoped></style>
