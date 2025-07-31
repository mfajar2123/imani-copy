<template>
    <div class="md:grid grid-cols-3 gap-4 border-t-2 border-black border-solid pt-4">
        <div
            class="flex place-items-center bg-usecase col-start-1 col-span-1 text-white p-2 w-10/12 max-sm:mb-2 max-sm:w-full">
            <NuxtImg class="w-8 h-8 mx-3" src="/img/use-case/icon-a.png" />
            <p>Industry : <br /> Port Transportation</p>
        </div>
        <div
            class="flex place-items-center bg-usecase col-end-4 col-span-1 text-white p-2 w-10/12 ml-auto max-sm:ml-0 max-sm:w-full">
            <NuxtImg class="w-8 h-8 mx-3" src="/img/use-case/icon-b.png" />
            <p>Solution : <br /> Monstrack Train</p>
        </div>
    </div>
    <div class="md:grid grid-cols-2 my-16">
        <div class="w-11/12 max-sm:w-full">
            <ScriptYouTubePlayer class="w-80" video-id="FOz3sBijvP4">
                <template #awaitingLoad><div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[68px]">
            <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00" /><path d="M 45,24 27,14 27,34" fill="#fff" /></svg>
          </div>
        </template>
            </ScriptYouTubePlayer>
        </div>
        <div class="text-justify my-auto">
            <p>Monstrack Train system is accessible from the convenience of your desktop, as well as your mobile devices, such as laptops and smartphones. It is so reliable, that if the data network fails, then the persistently recorded tracking data, which includes the precise location, the engine status, the work hour, etc; will be sent via SMS. Thus, you as the Operator or as the Authority could use these collected data to learn and plan, in order to take your service to next level. The system has been used by state-owned enterprises in the railway sector.</p>
            <div></div>
            <UDropdown class="float-right rounded-xl my-4 green-imani" :items="itemsmonstrack"
                :popper="{ placement: 'bottom-start' }">
                <UButton color="teal" label="Case Study" trailing-icon="i-heroicons-chevron-down-20-solid" />
            </UDropdown>
        </div>
    </div>
    <div v-for="(im, index) in itemsmonstrack[0]">
        <BrochureDownloadModal file_type="case study" v-model="itemsmonstrack[0][index].active" :url="im.url" :selected_product="im.title" />
    </div>
</template>

<script setup lang="ts">
const itemsmonstrack = ref([
    [{
        label: 'Eng Language',
        url: 'https://drive.google.com/file/d/1cwV1qcMOkjjnN55O-avNn-S2ZkN3x7al/view?usp=drive_link',
        active: false,
        title: 'Monstrack (en)',
        click: () => {
            itemsmonstrack.value[0][0].active = true
        }
    },
    {
        label: 'Ind Language',
        url: 'https://drive.google.com/file/d/1FkMfYJxFVy2fXNBXkOTTiqyqB5Roo3SY/view?usp=drive_link',
        active: false,
        title: 'Monstrack (id)',
        click: () => {
            itemsmonstrack.value[0][1].active = true
        }
    }]
])
</script>