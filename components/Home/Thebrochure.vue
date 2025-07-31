<template>
        <div class="md:grid grid-cols-3 place-items-center">
                <div v-for="(item, index) in product.slice(0, 3)"
                        class="rounded-md box-border w-80 h-80 my-4 bg-green-light p-4 max-sm:w-full">
                        <div class="">
                                <NuxtImg class="w-full h-32 object-cover object-center rounded-md" :src=item.src />
                        </div>
                        <div class="flex justify-between items-center font-sm">
                                <UButton variant="ghost" icon="ic:baseline-download" trailing size="sm"
                                        class="text-teal-950 hover:bg-gray-100" @click="product[index].active = true">
                                        Download</UButton>
                                <p class="text-teal-950 text-sm font-bold pr-2">Brochure</p>
                        </div>
                        <div class="text-green-imani font-bold my-2">
                                <UButton class="text-green-imani font-bold bg-green-light hover:bg-green-light text-md pl-0" @click="product[index].active = true">{{ item.title }} </Ubutton>
                                </div>
                        <div class="w-auto h-16 overflow-hidden text-wrap text-sm" v-html="item.excerpt.substr(0, 200)">
                        </div>
                        <BrochureDownloadModal file_type="brochure" v-model="item.active" :url="item.url" :selected_product="item.product" />
                </div>
        </div>
</template>
<script setup lang="ts">
const product = ref([
        { url: 'https://drive.google.com/file/d/1MpfEkymglZCRDY8aXA1Nxbl9pvPL4DWf/view?usp=drive_link', product: 'Port Prime', title: 'Area Monitoring', src: '/img/media/port-prime.png', excerpt: 'Tracks vessels around the port with a range of approximately 30 miles from the AIS receiver', category: 'IOT', active: false },
        { url: 'https://drive.google.com/file/d/18T19KH5klmGhRmkdTrXW2w1qoJ0HZ8PE/view?usp=drive_link', product: 'M2 Prime VMS', title: 'Monitoring & Tracking Vessels Position', src: '/img/media/m2-prime-VMS.png', excerpt: 'Vessel monitoring system with gross tonnage > 30', category: 'IOT', active: false },
        { url: 'https://drive.google.com/file/d/14hGwCIUGuNGVrROzuWZHPtvKyAJDZe2u/view?usp=drive_link', product: 'M2 Prime FMS', title: 'Engine & Fuel Monitoring Vessels', src: '/img/media/m2-prime-FMS.png', excerpt: 'Vessel monitoring with fuel & engine parameters', category: 'IOT', active: false },
        { url: 'https://drive.google.com/file/d/1vSFad7UoOQgd67mY9UPJ6-eTj65MHPxK/view?usp=drive_link', product: 'PM Prime', title: 'Port Management', src: '/img/media/pm-prime.png', excerpt: 'Supports port operations and administrations of port authorities', category: 'IOT', active: false },
        { url: 'https://drive.google.com/file/d/17RgN3fBj6UQOwI6m7KGjZ0HIEk-C1CLA/view?usp=drive_link', product: 'Sat Prime', title: 'Tracking Vessels Via Satellites', src: '/img/media/sat-prime.png', excerpt: 'Worldwide range vessel monitoring system', category: 'IOT', active: false }
])
</script>