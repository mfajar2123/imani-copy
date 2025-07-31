<template>
<div class="xl:container mx-auto grid grid-cols-4 gap-2 text-center place-items-center my-9 max-sm:grid-cols-2">
    <div v-for="item in partner" class="my-4">
    <NuxtImg class="h-auto w-44" :src="item.img" />
    </div>
</div>
</template>
<script setup lang="ts">
const partner = [
    {title: 'orbcomm', img: '/img/partner/Orcbcomm.webp'},
    {title: 'Capella Space', img:'/img/partner/Capella-space.webp'},
    {title: 'Cisco', img:'/img/partner/cisco.webp'},
    {title: 'AWS', img: '/img/partner/aws.webp'}
]
</script>