<template>
    <div class="xl:container mx-auto grid grid-cols-1 gap-4 px-9 pt-40 pb-16 max-sm:container max-sm:py-28">
        <div class="my-6 text-white py-18">
            <h1 class="text-5xl my-2 font-bold">Contact Our Team</h1>
            <p class="md:grid grid-cols-2 text-md max-sm:grid max-sm:grid-cols-1 mb-8">Let us know how we can help</p>
        <div class="sosmed" v-for="list in sosmed">
            <div><NuxtImg class="rounded-md w-8 h-auto float-left mr-2 mt-1" :src=list.img /><p class="text-sm font-bold">{{  list.name }}<br >
            <NuxtLink :href=list.link>{{ list.item }}</NuxtLink></p></div>
        </div>
        </div>
        
        <!-- <div class=""><NuxtImg class="absolute w-1/2 bottom-8 right-0" src="/img/contact/contact-pic.png" /></div> -->
        </div>
    </template>
    <script setup>
    let sosmed = [
        {name: 'Helpdesk [24/7]', img: '/img/contact/Group 81.png', item: '+628119359454', link: ''},
        {name: 'Facebook', img: '/img/contact/Group 82.png', item: 'PT Imani Prima', link: 'https://www.facebook.com/PTImaniPrima'},
        {name: 'LinkedIn', img: '/img/contact/linked.jpg', item: 'Imani Prima', link: 'https://www.linkedin.com/company/pt-imani-prima'},
        {name: 'Instagram', img: '/img/contact/Group 85.png', item: '@imaniprima', link: 'https://www.instagram.com/imaniprima'}
    ]
    </script>