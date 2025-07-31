<template>
    <div class="md:grid grid-cols-3 gap-4 border-t-2 border-black border-solid pt-4">
        <div class="flex place-items-center bg-usecase col-start-1 col-span-1 text-white p-2 w-10/12 max-sm:mb-2 max-sm:w-full">
            <NuxtImg class="w-8 h-8 mx-3" src="/img/use-case/icon-a.png" />
            <p>Industry : <br /> Shopping Center</p>
        </div>
        <div class="flex place-items-center bg-usecase col-end-4 col-span-1 text-white p-2 w-10/12 ml-auto max-sm:ml-0 max-sm:w-full">
            <NuxtImg class="w-8 h-8 mx-3" src="/img/use-case/icon-b.png" />
            <p>Solution : <br /> PrimaSaver</p>
        </div>
    </div>
    <div class="md:grid grid-cols-2 my-16">
        <div class="w-11/12 max-sm:w-full">
            <ScriptYouTubePlayer class="w-80" video-id="sCdXKb7bMjw">
                <template #awaitingLoad><div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[68px]">
            <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00" /><path d="M 45,24 27,14 27,34" fill="#fff" /></svg>
          </div>
        </template>
            </ScriptYouTubePlayer>
        </div>
        <div class="text-justify my-auto">
            <p>PrimaSaver is a tool that compensates for losses (active + reactive) that occur due to loading on the
                electricity network for efficient use of electrical energy. One of PrimaSaver users is one of the
                shopping centers in Karawaci. The shopping center can save 18-20% kWh used. PrimaServer monitoring can
                be done in real-time via application login, both laptop and smartphone. Thus, it will be very easy to
                monitor electricity usage anywhere and anytime.</p><p>More info: <NuxtLink href="https://primasaver.com">https://primasaver.com</NuxtLink></p>
            <UDropdown class="float-right rounded-xl my-4 green-imani" :items="items"
                :popper="{ placement: 'bottom-start' }">
                <UButton color="teal" label="Case Study" trailing-icon="i-heroicons-chevron-down-20-solid" />
            </UDropdown>
            <div class="relative float-right my-4 mx-2 z-10">
            <UButton @click="primaBrochure.active = true" color="teal"
                                                variant="solid">
                                                Download Primasaver Brochure
                                            </UButton>         
        <BrochureDownloadModal file_type="brochure" v-model="primaBrochure.active" :url="primaBrochure.url"
            :selected_product="primaBrochure.label" />
        </div>
        </div>
    </div>    
    <div v-for="(im, index) in items[0]">
        <BrochureDownloadModal file_type="case study" v-model="items[0][index].active" :url="im.url" :selected_product="im.title" />
    </div>
</template>

<script setup lang="ts">
const items = ref([
    [{
        label: 'Eng Language',
        url: 'https://drive.google.com/file/d/1H3gywblxTMPpomivPKZ3vT9RPaHmVEEv/view?usp=drive_link',
        active: false,
        title: 'PrimaSaver (en)',
        click: ()=>{
            items.value[0][0].active = true
        }
    },
    {
        label: 'Ind Language',
        url: 'https://drive.google.com/file/d/1HJYCSZb58nYNwzvy3MmqM_RjcDoD7ij0/view?usp=drive_link',
        active: false,
        title: 'PrimaSaver (id)',
        click: ()=>{
            items.value[0][1].active = true
        }
    }]
])

const primaBrochure = ref({
        label: 'primasaver brochure', 
        url:'https://drive.google.com/file/d/1EBNUHRjJs4rTJ0t-CIXZzKWmXnyoT9j3/view?usp=drive_link', 
        active: false
    })
</script>