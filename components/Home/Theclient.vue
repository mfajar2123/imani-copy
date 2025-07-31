<template>
    <div class="xl:container mx-auto gap-6 text-center place-items-center my-9">
        <swiper
    :slidesPerView="1"
    :navigation="false"
    :autoplay="true"
    :loop="true"
    :breakpoints="{
        '680': {
        slidesPerView: 5,
        spaceBetween: 15,
        navigation: true,
      },
    }"
    :modules="modules"
    class="mySwiper-nav"
  >
        <swiper-slide v-for="item in client" class="my-4">
        <NuxtImg class="p-4 grayscale bg-white rounded-lg   " :src="item.img"/>
        </swiper-slide>
    </swiper>
   </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
export default {
    components: {
        Swiper,
        SwiperSlide
    },

    setup(){
const client = [
    {title: 'Arsy Duta Sarana', img: '/img/client/Arsy-Duta-Sarana.png'},
    {title: 'AU', img: '/img/client/AU.png'},
    {title: 'Baruna', img: '/img/client/Baruna.png'},
    {title: 'BRIN', img: '/img/client/BRIN.png'},
    {title: 'Caterpilar', img: '/img/client/Caterpillar.png'},
    {title: 'CKB', img: '/img/client/CKB.png'},
    {title: 'Commuter', img: '/img/client/Commuter.png'},
    {title: 'CSUL', img: '/img/client/CSUL.png'},
    {title: 'Daun Biru', img: '/img/client/Daun-Biru.png'},
    {title: 'EDII', img: '/img/client/EDII.png'},
    {title: 'Hitachi', img: '/img/client/Hitachi.png'},
    {title: 'IHS', img: '/img/client/IHS.png'},
    {title: 'IPC', img: '/img/client/IPC.png'},
    {title: 'ITM', img: '/img/client/ITM.png'},
    {title: 'KAI', img: '/img/client/KAI.png'},
    {title: 'Kalog', img: '/img/client/Kalog.png'},
    {title: 'Kobelco', img: '/img/client/Kobelco.png'},
    {title: 'Komatsu', img: '/img/client/Komatsu.png'},
    {title: 'Lloyds-List', img: '/img/client/Lloyds-List.png'},
    {title: 'MCM', img: '/img/client/MCM.png'},
    {title: 'Patria Maritime Line', img: '/img/client/Patria-Maritime-Line.png'},
    {title: 'Paria', img: '/img/client/Patria.png'},
    {title: 'Pelindo 3', img: '/img/client/Pelindo-3.png'},
    {title: 'Pelindo I', img: '/img/client/Pelindo-I.png'},
    {title: 'Pernika', img: '/img/client/Pernika.png'},
    {title: 'Pertamina', img: '/img/client/Pertamina.png'},
    {title: 'Prima Mandiri', img: '/img/client/Prima-Mandiri.png'},
    {title: 'Promindo', img: '/img/client/Promindo.png'},
    {title: 'Pupuk Indonesia', img: '/img/client/Pupuk-Indonesia.png'},
    {title: 'Sumitomo', img: '/img/client/Sumitomo.png'},
    {title: 'Tata Niaga Internasional', img: '/img/client/Tata-Niaga-Internasional.png'},
    {title: 'Tri Persada Borneo', img: '/img/client/Tri-Persada-Borneo.png'},
    {title: 'Universitas Terbuka', img: '/img/client/Universitas-Terbuka.png'},
    {title: 'Tadano', img:'/img/client/Tadano.png'}
    ]
    return {
        modules: [Navigation, Autoplay],
        client
    };
},
};
</script>
