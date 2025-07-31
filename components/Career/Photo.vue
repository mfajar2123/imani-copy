<template>
    <div class="">
        <div class="p-4">
            <p class="text-green-imani font-bold text-2xl m-4">Our Togetherness</p>
            
            <swiper
    :effect="'cards'"
    :zoom="true"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper my-10"
  >
    <swiper-slide v-for="item in image">      <div class="swiper-zoom-container">
      <NuxtImg :src="item.img" /></div></swiper-slide>
  </swiper>
        </div>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css/zoom';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './assets/css/style-slider.css';

// import required modules
import { EffectCards, Zoom } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const image = [
                { img:'/img/career/DSC_0317.JPG'},
                { img:'/img/career/IMG_4576.JPG'},
                { img:'/img/career/IMG_2712.JPG'}
]
    return {
      modules: [EffectCards, Zoom],
      image
    };
  },
};
</script>