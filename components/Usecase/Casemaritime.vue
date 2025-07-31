<script setup lang="ts">
const items = ref([
    [{
        label: 'Eng Language',
        url: 'https://drive.google.com/file/d/13i4RGjqwgeJ-bxRD7e6YpxpYKLai3xxI/view?usp=drive_link',
        active: false,
        title: 'PM Prime (en)',
        click: () => {
            items.value[0][0].active = true
        }
    },
    {
        label: 'Ind Language',
        url: 'https://drive.google.com/file/d/1d6B7xxCjt1PbAOPjPWnWhg7YRIKvuBJc/view?usp=drive_link',
        active: false,
        title: 'PM Prime (id)',
        click: () => {
            items.value[0][1].active = true
        }
    }]
])
const itemsport = ref([
    [{
        label: 'Eng Language',
        url: 'https://drive.google.com/file/d/10VpW_X7Hw8ilkWgvWl2kYjoEP__crEhp/view?usp=drive_link',
        active: false,
        title: 'Port Prime (en)',
        click: () => {
            itemsport.value[0][0].active = true
        }
    },
    {
        label: 'Ind Language',
        url: 'https://drive.google.com/file/d/1Hdn-EBYpnVvICdBPCW-XSpVM0NJh1oMj/view?usp=drive_link',
        active: false,
        title: 'Port Prime (id)',
        click: () => {
            itemsport.value[0][1].active = true
        }
    }]
])

const portBrochure = ref({
        label: 'Download PortPrime Brochure', 
        url:'https://drive.google.com/file/d/1MpfEkymglZCRDY8aXA1Nxbl9pvPL4DWf/view?usp=drive_link', 
        active: false
    })
</script>

<template>
    <div class="md:grid grid-cols-3 gap-4 border-t-2 border-white border-solid pt-4">
        <div
            class="flex place-items-center bg-usecase col-start-1 col-span-1 text-white p-2 w-10/12 max-sm:mb-2 max-sm:w-full">
            <NuxtImg class="w-8 h-8 mx-3" src="/img/use-case/icon-a.png" />
            <p>Industry : <br /> Port Services</p>
        </div>
        <div
            class="flex place-items-center bg-usecase col-end-4 col-span-1 text-white p-2 w-10/12 ml-auto max-sm:ml-0 max-sm:w-full">
            <NuxtImg class="w-8 h-8 mx-3" src="/img/use-case/icon-b.png" />
            <p>Solution : <br /> AISSAT PMPrime</p>
        </div>
    </div>
    <div class="md:grid grid-cols-2 my-16 text-white">
        <div class="w-11/12 max-sm:w-full">
            <ScriptYouTubePlayer class="w-80" video-id="KQqSuspDezM">
                <template #awaitingLoad><div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[68px]">
            <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00" /><path d="M 45,24 27,14 27,34" fill="#fff" /></svg>
          </div>
        </template>
            </ScriptYouTubePlayer>
        </div>
        <div class="text-justify my-auto">
            <p>Our client is one of the companies within the State-Owned Enterprise (BUMN) which is engaged in port
                services. Established on December 1, 1992, that has duties, authorities and responsibilities in managing
                public ports in several Indonesian provinces. Our client is headquartered in Surabaya, manages 43 ports
                spread across East Java, Central Java, South Kalimantan, Central Kalimantan, Bali, West Nusa Tenggara
                and East Nusa Tenggara</p>
            <UDropdown class="float-right rounded-xl my-4 green-imani" :items="items"
                :popper="{ placement: 'bottom-start' }">
                <UButton color="teal" label="Case Study" trailing-icon="i-heroicons-chevron-down-20-solid" />
            </UDropdown>
        </div>
    </div>

    <!-- AISSAT Port Prime -->
    <div class="md:grid grid-cols-3 gap-4 border-t-2 border-white border-solid pt-4">
        <div
            class="flex place-items-center bg-usecase col-start-1 col-span-1 text-white p-2 w-10/12 max-sm:mb-2 max-sm:w-full">
            <NuxtImg class="w-8 h-8 mx-3" src="/img/use-case/icon-a.png" />
            <p>Industry : <br /> Energy</p>
        </div>
        <div
            class="flex place-items-center bg-usecase col-end-4 col-span-1 text-white p-2 w-10/12 ml-auto max-sm:ml-0 max-sm:w-full">
            <NuxtImg class="w-8 h-8 mx-3" src="/img/use-case/icon-b.png" />
            <p>Solution : <br /> AISSAT PortPrime<br /> Subsea Asset Protection</p>
        </div>
    </div>
    <div class="md:grid grid-cols-2 my-16 text-white">
        <div class="w-11/12 max-sm:w-full">
            <ScriptYouTubePlayer class="w-80" video-id="oVW_K4fv0kU">
                <template #awaitingLoad><div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[68px]">
            <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00" /><path d="M 45,24 27,14 27,34" fill="#fff" /></svg>
          </div>
        </template>
            </ScriptYouTubePlayer>
        </div>
        <div class="text-justify my-auto">
            <p>AISSAT Port-Prime Subsea Asset Protection is a web-based system created with the aim of monitoring vessel
                movements around subsea pipelines to prevent damage using AIS (Automatic Identification System)
                technology. The system is capable of monitoring not only pipelines but also cables and all subsea
                assets. It has been used by Indonesia's largest national private energy company since early 2024 to
                monitor the company's subsea assets in the Natuna Sea region, which has a 650-kilometer natural gas
                pipeline network.</p><p>More info: <NuxtLink href="https://sap.imaniprima.co.id">https://sap.imaniprima.co.id</NuxtLink></p>
            <UDropdown class="float-right rounded-xl my-4 green-imani" :items="itemsport"
                :popper="{ placement: 'bottom-start' }">
                <UButton color="teal" label="Case Study" trailing-icon="i-heroicons-chevron-down-20-solid" />
            </UDropdown>
            <div class="relative float-right my-4 mx-2 z-10">
            <UButton @click="portBrochure.active = true" color="teal"
                                                variant="solid">
                                                Download PortPrime SAP Brochure
                                            </UButton>         
        <BrochureDownloadModal file_type="brochure" v-model="portBrochure.active" :url="portBrochure.url"
            :selected_product="portBrochure.label" />
        </div>
        </div>
    </div>
    <template v-for="(item, index) in items[0]" :keys="index">
        <BrochureDownloadModal file_type="case study" v-model="items[0][index].active" :url="item.url" :selected_product="item.title" />
    </template>
    <template v-for="(item, index) in itemsport[0]" :keys="index">
        <BrochureDownloadModal file_type="case study" v-model="itemsport[0][index].active" :url="item.url" :selected_product="item.title" />
    </template>
</template>
