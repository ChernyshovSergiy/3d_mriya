<template>
    <div>
        <v-container fill-height class="mt-5">
            <v-layout align-center justify-center class="my-5">
                <v-flex xs12 sm8 md6>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="blue-grey darken-4">
                            <v-toolbar-title>Join Form</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text
                            >{{ errors }}
                            <v-form ref="form" v-model="valid" lazy-validation>
                                <v-text-field
                                    v-model="form.name"
                                    prepend-icon="person"
                                    name="name"
                                    label="Name"
                                    type="name"
                                    :rules="nameRules"
                                    data-cy="joinNameField"
                                    required
                                >
                                </v-text-field>
                                <v-text-field
                                    v-model="form.email"
                                    prepend-icon="email"
                                    name="email"
                                    label="Email"
                                    type="email"
                                    :rules="emailRules"
                                    data-cy="joinEmailField"
                                    required
                                    autocomplete="email"
                                >
                                </v-text-field>
                                <v-text-field
                                    v-model="form.password"
                                    prepend-icon="lock"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    required
                                    :rules="passwordRules"
                                    data-cy="joinPasswordField"
                                    autocomplete="password"
                                >
                                </v-text-field>
                                <v-text-field
                                    v-model="form.password_confirmation"
                                    prepend-icon="check_circle_outline"
                                    name="password_confirmation"
                                    label="Password Confirmation"
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
                                data-cy="joinSubmitBtn"
                                @click="submit"
                                >Join</v-btn
                            >
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="600">
                <v-card>
                    <v-card-title
                        class="headline grey lighten-2 subheading"
                        primary-title
                        >Dear&emsp;<strong class="primary--text">{{
                            form.name
                        }}</strong
                        >&emsp;Thank you for try join to us! But
                        the&emsp;<strong class="error--text">{{
                            form.email
                        }}</strong
                        >&emsp;email has already been taken!!!</v-card-title
                    >
                    <v-card-text>
                        &emsp;If this email address is yours, please click
                        <strong>"Sign In"</strong> and log in to your account.
                        If you forgot the password, click
                        <strong>"Restore"</strong> and check your email. If you
                        made a mistake when writing an email, click
                        <strong>"Change"</strong>, enter the correct email and
                        complete the registration
                    </v-card-text>
                    <!--<v-divider></v-divider>-->
                    <v-progress-linear
                        :indeterminate="indeterminate"
                    ></v-progress-linear>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="success" flat outline @click="toAccount"
                            >Sign In</v-btn
                        >
                        <v-btn
                            color="primary"
                            flat
                            outline
                            :loading="loading"
                            @click="requestResetPassword"
                            >Restore</v-btn
                        >
                        <v-btn
                            color="green darken-1"
                            flat
                            outline
                            @click="dialog = false"
                            >Change</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-layout>
        <v-layout row justify-center>
            <v-dialog
                v-model="dialog2"
                persistent
                max-width="600"
                class="text-md-center"
            >
                <v-card>
                    <v-card-title
                        class="headline grey lighten-2 subheading text-md-center"
                        primary-title
                        >Dear&emsp;<strong class="primary--text">{{
                            form.name
                        }}</strong
                        >&emsp;Please check your e-mail<strong
                            class="error--text"
                            >&emsp;{{ form.email }}</strong
                        >&emsp;to change password</v-card-title
                    >
                    <v-card-text class="text-md-center">
                        &emsp;link is valid for 60 minutes
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="primary"
                            flat
                            outline
                            to="/"
                            @click="dialog2 = false"
                            >Ok</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-layout>
    </div>
</template>

<script>
import { VTextField } from 'vuetify/lib'
export default {
    middleware: 'guest',
    name: 'Home',
    components: {
        VTextField
    },
    data() {
        return {
            valid: false,
            dialog: false,
            dialog2: false,
            massage: '',
            indeterminate: false,
            loading: false,
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length >= 2 || 'Name must be greater than 2 characters'
            ],
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
                v => v === this.form.password || 'Password must be confirm'
            ]
        }
    },
    methods: {
        toAccount() {
            this.dialog = false
            this.$router.push('/sign-in')
        },
        async requestResetPassword() {
            this.indeterminate = true
            this.loading = true
            try {
                await this.$axios
                    .post('/auth/reset-password', { email: this.form.email })
                    .then(
                        result => {
                            this.response = result.data
                            console.log('my result: ', result.data)
                            this.loading = false
                            this.indeterminate = false
                            this.dialog = false
                            this.dialog2 = true
                        },
                        error => {
                            console.error(error)
                        }
                    )
            } catch (e) {}
        },
        async submit() {
            if (this.$refs.form.validate()) {
                try {
                    await this.$axios
                        .post('/auth/register', this.form)
                        .then(response => {
                            console.log('1', response.data.errors.email[0])
                            if (response.data.errors.email[0] !== '') {
                                console.log('2', this.dialog)
                                this.dialog = true
                                console.log('3', this.dialog)
                            } else {
                                this.$router.push('/sign-in')
                            }
                        })
                        .catch(err => {
                            console.log('err11 ', err)
                        })
                } catch (e) {}
            }
        }
    },
    strict: process.env.NODE_ENV !== 'production'
}
</script>

<style scoped></style>
