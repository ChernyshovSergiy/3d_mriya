<template>
    <v-card
        dark
        flat
        title
        color="#031016"
        class=" yellow--text text-xs-center flex"
    >
        <v-layout row wrap>
            <v-flex xs12>
                <v-img
                    wrap
                    flex
                    :src="require('@/assets/images/footerBG.jpg')"
                    height="auto"
                >
                    <v-container>
                        <v-layout my-1 column wrap>
                            <v-flex xs12>
                                <span class="display-2 footerTitle"
                                    >Over 100 000 royalty-free models</span
                                >
                            </v-flex>
                            <v-layout
                                align-start
                                justify-center
                                row
                                wrap
                                class="mt-5"
                            >
                                <v-flex
                                    xs12
                                    sm4
                                    md3
                                    class="font-weight-light title text-md-left"
                                    size="24px"
                                >
                                    <v-card class="transparent mx-1" flat>
                                        <v-list subheader class="transparent">
                                            <v-subheader
                                                class="font-weight-regular yellow--text title"
                                                v-text="
                                                    first_menu_sections.title
                                                "
                                            ></v-subheader>
                                            <v-list-tile
                                                v-for="(item,
                                                index) in first_menu_sections.points"
                                                :key="index"
                                                :to="item.to"
                                                active-class="yellow--text font-weight-medium"
                                                @click="index"
                                            >
                                                <v-list-tile-title
                                                    >{{ item.point }}
                                                </v-list-tile-title>
                                            </v-list-tile>
                                        </v-list>
                                    </v-card>
                                    <v-container grid-list-xs fluid mt-5>
                                        <v-layout row wrap>
                                            <v-flex
                                                v-for="(FinCard, i) in FinCards"
                                                :key="i"
                                                xs4
                                            >
                                                <v-card flat>
                                                    <v-img
                                                        :src="
                                                            require('@/assets/images/cards/' +
                                                                `${
                                                                    FinCard.image
                                                                }`)
                                                        "
                                                        height="35px"
                                                    ></v-img>
                                                </v-card>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-flex>
                                <v-flex
                                    xs12
                                    sm4
                                    md3
                                    class="font-weight-light title text-md-left"
                                    size="24px"
                                >
                                    <v-card dark class="transparent mx-1" flat>
                                        <v-list subheader class="transparent">
                                            <v-subheader
                                                class="font-weight-regular yellow--text title"
                                                v-text="
                                                    second_menu_sections.title
                                                "
                                            ></v-subheader>
                                            <v-list-tile
                                                v-for="(item,
                                                index) in second_menu_sections.points"
                                                :key="`${index}-2`"
                                                :to="item.to"
                                                active-class="yellow--text font-weight-medium"
                                                @click="index"
                                            >
                                                <v-list-tile-title
                                                    >{{ item.point }}
                                                </v-list-tile-title>
                                            </v-list-tile>
                                            <v-subheader
                                                class="font-weight-regular yellow--text title"
                                                v-text="
                                                    tree_menu_sections.title
                                                "
                                            ></v-subheader>
                                            <v-list-tile
                                                v-for="(item,
                                                index) in tree_menu_sections.points"
                                                :key="`${index}-3`"
                                                active-class="yellow--text font-weight-medium"
                                                :to="item.to"
                                                @click="index"
                                            >
                                                <v-list-tile-title
                                                    >{{ item.point }}
                                                </v-list-tile-title>
                                            </v-list-tile>
                                            <v-subheader
                                                class="font-weight-regular yellow--text title"
                                                v-text="
                                                    fourth_menu_sections.title
                                                "
                                            ></v-subheader>
                                            <v-list-tile
                                                v-for="(item,
                                                index) in fourth_menu_sections.points"
                                                :key="`${index}-4`"
                                                active-class="yellow--text font-weight-medium"
                                                :to="item.to"
                                                @click="index"
                                            >
                                                <v-list-tile-title
                                                    >{{ item.point }}
                                                </v-list-tile-title>
                                            </v-list-tile>
                                        </v-list>
                                    </v-card>
                                </v-flex>
                                <v-flex
                                    xs12
                                    sm4
                                    md3
                                    class="font-weight-light title text-md-left"
                                    size="24px"
                                >
                                    <v-card dark class="transparent mx-1" flat>
                                        <v-list subheader class="transparent">
                                            <v-subheader
                                                class="font-weight-regular yellow--text title"
                                                v-text="
                                                    fifth_menu_sections.title
                                                "
                                            ></v-subheader>
                                            <v-list-tile
                                                v-for="(item,
                                                index) in fifth_menu_sections.points"
                                                :key="index"
                                                active-class="yellow--text font-weight-black"
                                                :to="item.to"
                                                @click="index"
                                            >
                                                <v-list-tile-title
                                                    >{{ item.point }}
                                                </v-list-tile-title>
                                            </v-list-tile>
                                        </v-list>
                                    </v-card>
                                </v-flex>
                                <v-flex
                                    xs12
                                    sm8
                                    md3
                                    class="font-weight-light title text-md-left"
                                    size="24px"
                                >
                                    <v-card class="transparent mx-0" flat dark>
                                        <v-list
                                            subheader
                                            dark
                                            class="transparent text-xs-right"
                                        >
                                            <v-subheader
                                                class="font-weight-regular yellow--text title"
                                                v-text="six_menu_sections.title"
                                            ></v-subheader>
                                            <v-form
                                                ref="form"
                                                v-model="valid"
                                                lazy-validation
                                                dark
                                            >
                                                <v-text-field
                                                    v-model="name"
                                                    prepend-icon="person"
                                                    :counter="10"
                                                    :rules="nameRules"
                                                    label="Name"
                                                    color="yellow"
                                                    required
                                                    flat
                                                ></v-text-field>

                                                <v-text-field
                                                    v-model="email"
                                                    prepend-icon="email"
                                                    :rules="emailRules"
                                                    label="E-mail"
                                                    color="yellow"
                                                    required
                                                    flat
                                                ></v-text-field>

                                                <v-select
                                                    v-model="subject"
                                                    prepend-icon="subject"
                                                    :items="subjects"
                                                    :rules="subjectRules"
                                                    label="Subject"
                                                    color="yellow"
                                                    hide-selected
                                                    dark
                                                    chips
                                                    required
                                                    flat
                                                ></v-select>
                                                <v-textarea
                                                    v-model="message"
                                                    prepend-icon="message"
                                                    :rules="messageRules"
                                                    color="yellow"
                                                    label="Message"
                                                    required
                                                    outline
                                                    flat
                                                >
                                                </v-textarea>
                                                <v-btn
                                                    :disabled="!valid"
                                                    color="yellow"
                                                    outline
                                                    rith
                                                    flat
                                                    @click="submit"
                                                >
                                                    Send
                                                    <v-icon right dark
                                                        >send</v-icon
                                                    >
                                                </v-btn>
                                            </v-form>
                                        </v-list>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-layout>
                    </v-container>
                    <v-divider></v-divider>
                    <v-spacer />
                    <v-layout
                        align-center
                        justify-space-between
                        row
                        wrap
                        class="pa-0"
                    >
                        <v-flex
                            xs12
                            md4
                            class="font-weight-light title white--text"
                            size="24px"
                            >&copy;2008 - 2019
                            <strong>3D Mriya, Inc</strong>
                        </v-flex>
                        <v-spacer />
                        <v-flex xs12 md8
                            ><v-btn
                                v-for="icon in icons"
                                :key="icon"
                                class="mx-1 socialFooter"
                                dark
                                icon
                            >
                                <!--<v-icon size="24px">{{ icon }}</v-icon>-->
                                <fa
                                    :icon="['fab', `${icon}`]"
                                    style="font-size: 24px"
                                />
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-img>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
import { VTextField, VSelect } from 'vuetify/lib'
export default {
    name: 'FooterComp',
    components: {
        VTextField,
        VSelect
    },
    data() {
        return {
            icons: [
                'facebook-f',
                'twitter',
                'github',
                'google-plus-g',
                'pinterest',
                'instagram',
                'linkedin-in',
                'dribbble',
                'reddit-alien',
                'vimeo-v',
                'vk',
                'odnoklassniki',
                'youtube'
            ],
            first_menu_sections: {
                title: 'Our company',
                points: [
                    { point: 'About Us', to: '/about' },
                    { point: 'Careers', to: '/careers' },
                    { point: 'Press/Media', to: '/media' },
                    { point: 'Investor relations', to: '/investors' }
                ]
            },
            second_menu_sections: {
                title: 'Help',
                points: [
                    { point: 'Sell content', to: '/sell_content' },
                    { point: 'FAQ', to: '/faq' }
                ]
            },
            tree_menu_sections: {
                title: 'Partner',
                points: [
                    { point: 'Developer', to: '/developer' },
                    { point: 'Affiliate/Reseller', to: '/affiliate' },
                    { point: 'International reseller', to: '/international' }
                ]
            },
            fourth_menu_sections: {
                title: 'Partner',
                points: [
                    { point: 'Developer', to: '/developer' },
                    { point: 'Affiliate/Reseller', to: '/affiliate' },
                    { point: 'International reseller', to: '/international' }
                ]
            },
            fifth_menu_sections: {
                title: '3D Mriya',
                points: [
                    { point: 'Home', to: '/' },
                    { point: 'Stock model', to: '/models' },
                    { point: 'Coupons', to: '/coupons' },
                    { point: 'Trending topics', to: '/topics' },
                    { point: 'Personal account', to: '/join' },
                    { point: 'Log in/Sign up', to: '/sign-in' }
                ]
            },
            six_menu_sections: {
                title: 'Contact',
                points: [
                    { point: 'Home', to: '/' },
                    { point: 'Stock model', to: '/models' },
                    { point: 'Coupons', to: '/coupons' },
                    { point: 'Trending topics', to: '/topics' },
                    { point: 'Personal account', to: '/join' },
                    { point: 'Log in/Sign up', to: '/sign-in' }
                ]
            },
            valid: false,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length >= 3 || 'Name must be greater than 3 characters'
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            subject: null,
            subjectRules: [v => !!v || 'Subject is required'],
            subjects: [
                'Financial',
                'Technical',
                'Delivery',
                'Investments',
                'mass media',
                'Legal',
                'Other'
            ],
            message: '',
            messageRules: [
                v => !!v || 'Message is required',
                v =>
                    v.length >= 5 || 'Message must be greater than 5 characters'
            ],
            error: true,
            FinCards: [
                {
                    name: 'AmericanExpress',
                    image: 'American_express.png'
                },
                {
                    name: 'Bitcoin',
                    image: 'bitcoin.png'
                },
                {
                    name: 'PayPal',
                    image: 'paypal.png'
                },
                {
                    name: 'Western Union',
                    image: 'western.png'
                },
                {
                    name: 'Maestro',
                    image: 'master.png'
                },
                {
                    name: 'Visa',
                    image: 'visa.png'
                }
            ]
        }
    },
    methods: {
        submit() {
            // if (this.$refs.form.validate()) {
            //     this.$store.dispatch('userJoin', {
            //         email: this.email,
            //         password: this.password
            //     })
            // }
        }
    }
}
</script>

<style scoped>
.footerTitle {
    color: rgba(115, 137, 148, 0.5);
}
.socialFooter {
    color: #e0f7fa;
}
.socialFooter:hover {
    color: yellow;
}
</style>
