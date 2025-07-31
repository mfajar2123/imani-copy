<template>
    <div class="md:grid grid-cols-3 gap-4 border-t-2 border-black border-solid pt-4">
        <div
            class="flex place-items-center bg-usecase col-start-1 col-span-1 text-white p-2 w-10/12 max-sm:mb-2 max-sm:w-full">
            <NuxtImg class="w-8 h-8 mx-3" src="/img/use-case/icon-a.png" />
            <p>Industry : <br /> Travel & Financial Service</p>
        </div>
        <div
            class="flex place-items-center bg-usecase col-end-4 col-span-1 text-white p-2 w-10/12 ml-auto max-sm:ml-0 max-sm:w-full">
            <NuxtImg class="w-8 h-8 mx-3" src="/img/use-case/icon-b.png" />
            <p>Solution : <br /> SmartMedia</p>
        </div>
    </div>
    <div class="md:grid grid-cols-2 my-16">
        <div class="w-11/12 max-sm:w-full">
            <ScriptYouTubePlayer class="w-80" video-id="0pFcuHgpbp0">
                <template #awaitingLoad><div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[68px]">
            <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00" /><path d="M 45,24 27,14 27,34" fill="#fff" /></svg>
          </div>
        </template>
            </ScriptYouTubePlayer>
        </div>
        <div class="text-justify my-auto">
            <p>SmartMedia from Imani Prima is a system that can be used to integrate advertisements remotely. The system
                can bring together a lot of things, from play time, location, duration, to the device that plays ads in
                real-time. SmartMedia has been installed at several points, such as Transjakarta buses, airports and
                hospitals since 2016. One of the travel booking platforms uses SmartMedia for advertisements placed on
                airport escalators. Meanwhile, one of the leading banks in Indonesia once used Transjakarta buses as a
                point of placing advertisements through SmartMedia.</p><p>More info: <NuxtLink href="https://smartmedia.io">https://smartmedia.io</NuxtLink></p>
            <UDropdown class="float-right rounded-xl my-4 green-imani" :items="items"
                :popper="{ placement: 'bottom-start' }">
                <UButton color="teal" label="Case Study" trailing-icon="i-heroicons-chevron-down-20-solid" />
            </UDropdown>
            <div class="relative float-right my-4 mx-2 z-10">
            <UButton @click="smartBrochure.active = true" color="teal"
                                                variant="solid">
                                                Download SmartMedia Brochure
                                            </UButton>         
        <BrochureDownloadModal file_type="brochure" v-model="smartBrochure.active" :url="smartBrochure.url"
            :selected_product="smartBrochure.label" />
        </div>
        </div>
    </div>  
    <template v-for="(im, index) in items[0]">
        <BrochureDownloadModal file_type="case study" v-model="items[0][index].active" :url="im.url" :selected_product="im.title" />
    </template>
</template>

<script setup lang="ts">
const items = ref([
    [{
        label: 'Eng Language',
        url: 'https://drive.google.com/file/d/1ZGHwU9yyegMQhB_TPic4QEifnuTTJujX/view?usp=drive_link',
        active: false,
        title: 'SmartMedia (en)',
        click: () => {
            items.value[0][0].active = true
        }
    },
    {
        label: 'Ind Language',
        url: 'https://drive.google.com/file/d/1yXfYJPt6cnhuUjrwYF02take9UtW-8do/view?usp=drive_link',
        active: false,
        title: 'SmartMedia (id)',
        click: () => {
            items.value[0][1].active = true
        }
    }]
])

const smartBrochure = ref({
        label: 'Download Smartmedia Brochure', 
        url:'https://drive.google.com/file/d/1ybkRR5Dji2TrrG1vd_lQ8GAB0JXm5_xF/view?usp=drive_link', 
        active: false
    })
</script>