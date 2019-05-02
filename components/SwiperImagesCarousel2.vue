<template>
    <div>
        <!--<gallery :images="images" :index="index" @close="index = null" />-->
        <v-card class="my-3 py-1 elevation-12">
            <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                    <!-- slides -->
                    <div
                        v-for="(image, imageIndex) in images"
                        :key="imageIndex"
                        class="swiper-slide"
                        :style="{
                            backgroundImage:
                                'url(' +
                                '_nuxt/assets/images/finishedModel/' +
                                `${image.image}` +
                                ')',
                            width: '300px',
                            height: 'auto'
                        }"
                        @click="index = imageIndex"
                    >
                        <v-avatar tile="tile" size="100%">
                            <img
                                :src="
                                    require('@/assets/images/finishedModel/' +
                                        `${image.image}`)
                                "
                            />
                        </v-avatar>
                    </div>
                </div>
                <!-- Optional controls -->
                <div slot="pagination" class="swiper-pagination"></div>
                <div slot="button-prev" class="swiper-button-prev">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 44">
                        <path
                            d="M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22L0,22L0,22z"
                        ></path>
                    </svg>
                </div>
                <div slot="button-next" class="swiper-button-next">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 44">
                        <path
                            d="M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z"
                        ></path>
                    </svg>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'SwiperImagesCarousel2',
    // components: {
    //     gallery: VueGallery
    // },
    data() {
        return {
            swiperOption: {
                initialSlide: 4,
                slidesPerView: 5,
                // centeredSlides: true,
                spaceBetween: 20,
                freeMode: true,
                // watchOverflow: true,
                breakpoints: {
                    1904: {
                        slidesPerView: 5,
                        spaceBetween: 10
                    },
                    1264: {
                        slidesPerView: 4,
                        spaceBetween: 10
                    },
                    960: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    },
                    600: {
                        slidesPerView: 1,
                        spaceBetween: 150
                    },
                    400: {
                        slidesPerView: 1,
                        spaceBetween: 150
                    }
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                themeColor: '#ffce0b'
            },
            path: '~assets/images/finishedModel/',
            images: [
                {
                    image: 'Grek.jpg'
                },
                {
                    image: 'Gusar.jpg'
                },
                {
                    image: 'Hohol.jpg'
                },
                {
                    image: 'hrestonosec.png'
                },
                {
                    image: 'Rimlanin.png'
                },
                {
                    image: 'Indian.png'
                },
                {
                    image: 'Soldatn.png'
                },
                {
                    image: 'Karl.jpg'
                },
                {
                    image: 'Rimlanin2.png'
                },
                {
                    image: 'Napoleon.jpg'
                },
                {
                    image: 'Viking.png'
                },
                {
                    image: 'Reshile.jpg'
                },
                {
                    image: 'Sergant.jpg'
                },
                {
                    image: 'Varvar.jpg'
                }
            ],
            index: null
        }
    },
    methods: {
        appendSlide() {
            this.swiperSlides.push(this.swiperSlides.length + 1)
        },
        prependSlide() {
            this.swiperSlides.unshift(this.swiperSlides[0] - 1)
        },
        popSlide() {
            this.swiperSlides.pop()
        },
        shiftSlide() {
            this.swiperSlides.shift()
        }
    }
}
</script>

<style scoped>
.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
}
.my-swiper {
    height: 300px;
    width: 100%;
}
.my-swiper .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
}
.my-swiper .swiper-pagination {
    background-color: red;
}
.my-swiper .swiper-pagination .swiper-pagination-bullet {
    background-color: red;
}
/*.swiper-pagination-bullet {*/
/*background: #e78127;*/
/*}*/

/*!*custom navigation buttons (ball) because why not?!*!*/
/*.swiper-button-prev {*/
/*background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" height="100px" width="100px"><g><path d="M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z" fill="#E78127"/><path d="M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z"/><path d="M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z"/><path d="M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6   c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z"/><path d="M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z"/><path d="M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7   c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z" fill="green"/><path d="M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7   C20.6,84.2,23.2,86.3,26.2,88.2z" fill="blue"/><path d="M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6   c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z" fill="red"/></g></svg>') !important;*/
/*transform: scale(1, -1);*/
/*}*/

/*.swiper-button-next {*/
/*background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" height="100px" width="100px"><g><path d="M28.1,36.6c4.6,1.9,12.2,1.6,20.9,1.1c8.9-0.4,19-0.9,28.9,0.9c6.3,1.2,11.9,3.1,16.8,6c-1.5-12.2-7.9-23.7-18.6-31.3 c-4.9-0.2-9.9,0.3-14.8,1.4C47.8,17.9,36.2,25.6,28.1,36.6z" fill="#E78127"/><path d="M70.3,9.8C57.5,3.4,42.8,3.6,30.5,9.5c-3,6-8.4,19.6-5.3,24.9c8.6-11.7,20.9-19.8,35.2-23.1C63.7,10.5,67,10,70.3,9.8z"/><path d="M16.5,51.3c0.6-1.7,1.2-3.4,2-5.1c-3.8-3.4-7.5-7-11-10.8c-2.1,6.1-2.8,12.5-2.3,18.7C9.6,51.1,13.4,50.2,16.5,51.3z"/><path d="M9,31.6c3.5,3.9,7.2,7.6,11.1,11.1c0.8-1.6,1.7-3.1,2.6-4.6c0.1-0.2,0.3-0.4,0.4-0.6c-2.9-3.3-3.1-9.2-0.6-17.6   c0.8-2.7,1.8-5.3,2.7-7.4c-5.2,3.4-9.8,8-13.3,13.7C10.8,27.9,9.8,29.7,9,31.6z"/><path d="M15.4,54.7c-2.6-1-6.1,0.7-9.7,3.4c1.2,6.6,3.9,13,8,18.5C13,69.3,13.5,61.8,15.4,54.7z"/><path d="M39.8,57.6C54.3,66.7,70,73,86.5,76.4c0.6-0.8,1.1-1.6,1.7-2.5c4.8-7.7,7-16.3,6.8-24.8c-13.8-9.3-31.3-8.4-45.8-7.7   c-9.5,0.5-17.8,0.9-23.2-1.7c-0.1,0.1-0.2,0.3-0.3,0.4c-1,1.7-2,3.4-2.9,5.1C28.2,49.7,33.8,53.9,39.8,57.6z" fill="green"/><path d="M26.2,88.2c3.3,2,6.7,3.6,10.2,4.7c-3.5-6.2-6.3-12.6-8.8-18.5c-3.1-7.2-5.8-13.5-9-17.2c-1.9,8-2,16.4-0.3,24.7   C20.6,84.2,23.2,86.3,26.2,88.2z" fill="blue"/><path d="M30.9,73c2.9,6.8,6.1,14.4,10.5,21.2c15.6,3,32-2.3,42.6-14.6C67.7,76,52.2,69.6,37.9,60.7C32,57,26.5,53,21.3,48.6   c-0.6,1.5-1.2,3-1.7,4.6C24.1,57.1,27.3,64.5,30.9,73z" fill="red"/></g></svg>') !important;*/
/*transform: scale(-1, 1);*/
/*}*/
.append-buttons {
    text-align: center;
    margin-top: 20px;
}
.append-buttons a {
    display: inline-block;
    margin: 0 10px;
}
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev,
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
    background-image: none;
}
.swiper-button-next,
.swiper-button-prev,
.swiper-container-rtl .swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
    fill: #ffce0b;
}
.swiper-pagination-bullet {
    opacity: 0.5;
    background-color: #ffffff;
}

.swiper-pagination-bullet-active {
    opacity: 1;
}
</style>
