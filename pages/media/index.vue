<template>
    <div class="main-bg h-screen media">
        <Theheader />
        <div
            class="bg-media bg-[url('/img/media/media.png')] bg-right bg-no-repeat bg-cover max-sm:bg-contain max-sm:bg-bottom">
            <MediaThejumbotron />
        </div>
        <!-- Layer 2 -->
        <div class="yellow-bg py-11">
            <div class="container w-10/12 mx-auto px-20 max-sm:px-4">
                <p class="text-green-imani text-4xl font-bold my-11 text-center">Media</p>
                <div class="bg-white p-16 rounded-2xl max-sm:p-4">
                    <MediaThenews />
                </div>
            </div>
            </div>
            <div class="separator-media-1a"></div>
            <div class="md:flex gray-imani py-11">
            <div class="container w-full mx-auto px-20 max-sm:px-4 max-sm:h-[2000px]">
                <p class="text-green-imani text-4xl font-bold my-11 text-center">Brochures</p>
                <div class="gray-imani p-14 h-full rounded-2xl max-sm:p-4 overflow-scroll">
                    <MediaThebrochure />
                </div>
            </div>
        </div>
        <CareerThefooter />
    </div>
</template>
<script setup lang="ts">
const route = useRoute()

useSeoMeta(
    { title: 'Media - Imani Prima' }
)
definePageMeta({
    colorMode: 'light',
})

console.log(route.params.uri)
</script>