<template>
  <div class="flex flex-wrap gap-4 items-center">
    <button class="bg-red-800 p-2 text-white rounded-md" @click="resetFilter()">Reset Filter</button>
  <div v-for="itemb in category" :key="itemb.id">
    <label class="cursor-pointer flex">
      <input class="mr-2" :value="itemb.id" v-model="filterBrochure" type="checkbox"/>
       <span> {{ itemb.cat }}</span>
    </label>
  </div>
  </div>
  
  <div class="block gap-4 max-sm:grid-cols-1">
    <div v-if="filterBrochure.length > 0" v-for="(item, index) in product" :key="item.cat" arrows class="relative">
    <div v-if="filterBrochure.includes(item.cat) && product.length > 0" class="w-auto p-1 mx-auto overflow-hidden float-left">
      <div  class="rounded-md box-border w-80 h-96 my-4 bg-green-light p-4 max-sm:w-full max-sm:p-4">
      <div class="my-2">
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
          <UButton class="text-green-imani text-left font-bold bg-green-light hover:bg-green-light text-md pl-0" @click="product[index].active = true">{{ item.title }} </Ubutton>
        </div>
        <div class="w-auto h-16 overflow-hidden text-wrap text-sm" v-html="item.excerpt.substr(0, 100) + '...'"></div>
      </div>
      <BrochureDownloadModal file_type="brochure" v-model="item.active" :url="item.url" :selected_product="item.product" />
    </div>
    </div>
    <div v-else class="hidden"></div>
  </div>
  <div v-else v-for="(item, index) in product" arrows class="w-auto p-1 mx-auto overflow-hidden float-left">
  <div class="rounded-md box-border w-80 h-96 my-4 bg-green-light p-4 max-sm:w-full max-sm:p-4">
    <div class="my-2">
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
          <UButton class="text-green-imani text-left font-bold bg-green-light hover:bg-green-light text-md pl-0" @click="product[index].active = true">{{ item.title }} </Ubutton>
        </div>
        <div class="w-auto h-16 overflow-hidden text-wrap text-sm" v-html="item.excerpt.substr(0, 100) + '...'"></div>
      </div>
      <BrochureDownloadModal file_type="brochure" v-model="item.active" :url="item.url" :selected_product="item.product" />
  </div>
</div>
</div>  
</template>
<script setup>


const category = ([
{id:1, cat: 'Internet of Things'},
{id:2, cat: 'Artificial Inteligence'},
{id:3, cat: 'Others'}
])
const product = ref([
  { url: 'https://drive.google.com/file/d/1MpfEkymglZCRDY8aXA1Nxbl9pvPL4DWf/view?usp=drive_link', product: 'Port Prime', title: 'Area Monitoring', src: '/img/media/port-prime.png', excerpt: 'Tracks vessels around the port with a range of approximately 30 miles from the AIS receiver', cat: 1, active: false },
  { url: 'https://drive.google.com/file/d/18T19KH5klmGhRmkdTrXW2w1qoJ0HZ8PE/view?usp=drive_link', product: 'M2 Prime VMS', title: 'Monitoring & Tracking Vessels Position', src: '/img/media/m2-prime-VMS.png', excerpt: 'Vessel monitoring system with gross tonnage > 30', cat: 1, active: false },
  { url: 'https://drive.google.com/file/d/14hGwCIUGuNGVrROzuWZHPtvKyAJDZe2u/view?usp=drive_link', product: 'M2 Prime FMS', title: 'Engine & Fuel Monitoring Vessels', src: '/img/media/m2-prime-FMS.png', excerpt: 'Vessel monitoring with fuel & engine parameters', cat: 1, active: false },
  { url: 'https://drive.google.com/file/d/1vSFad7UoOQgd67mY9UPJ6-eTj65MHPxK/view?usp=drive_link', product: 'PM Prime', title: 'Port Management', src: '/img/media/pm-prime.png', excerpt: 'Supports port operations and administrations of port authorities', cat: 1, active: false },
  { url: 'https://drive.google.com/file/d/17RgN3fBj6UQOwI6m7KGjZ0HIEk-C1CLA/view?usp=drive_link', product: 'Sat Prime', title: 'Tracking Vessels Via Satellites', src: '/img/media/sat-prime.png', excerpt: 'worldwide range vessel monitoring system supported by AIS data collection of ORBCOMM satellites which is proven reliability in congested waterways, ports and open ocean waters', cat: 1, active: false },
  { url: 'https://drive.google.com/file/d/1GV4wq2MuP2KacYf6G9xXLsi-eVZ3KzJ-/view?usp=drive_link', product: 'Icognis Vision', title: 'iCognis Vision', src: '/img/media/ivision.png', excerpt: 'AI with machine learning capabilities that we call iCognis Vision', cat: 2, active: false },
  { url: 'https://drive.google.com/file/d/14Y0DRCEgVPQ_3k3K-SqKhzuLMALv0Ymd/view?usp=drive_link', product: 'Icognis Proctor', title: 'iCognis Proctor', src: '/img/media/iproctor.png', excerpt: 'Detecting the presence of jockeys and indications of cheating by exam participants', cat: 2, active: false },
  { url: 'https://drive.google.com/file/d/1NQ1uWW3ew8_xxle9ljpTy22rkZO-4HhV/view?usp=drive_link', product: 'Icognis Alinea', title: 'iCognis Alinea', src: '/img/media/ialinea.png', excerpt: 'Text extraction and document content analytics using AI include text content extraction', cat: 2, active: false },
  { url: 'https://drive.google.com/file/d/1LUNecF6u7umSFe6ASnk36ldf8TL4a5og/view?usp=drive_link', product: 'SAP Port Prime', title: 'SAP Port Prime', src: '/img/media/sapportprime.png', excerpt: 'application system web-based monitoring is designed to monitor ships in around underwater assets', cat: 3, active: false },
  { url: 'https://drive.google.com/file/d/1EBNUHRjJs4rTJ0t-CIXZzKWmXnyoT9j3/view?usp=drive_link', product: 'Primasaver', title: 'Primasaver', src: '/img/media/primasaver.png', excerpt: 'Platform to identify the characteristics of the clients electricity network', cat: 3, active: false },
  { url: 'https://drive.google.com/file/d/1QHPHtrfzWqs2MfCe2WCYWcKMVUOzQ2IR/view?usp=drive_link', product: 'SmartMedia', title: 'SmartMedia', src: '/img/media/smartmedia.png', excerpt: 'SmartMedia from Imani Prima is a system that can be used to integrate advertisements remotely', cat: 3, active: false },
  { url: 'https://drive.google.com/file/d/1HwpkUkQka5Vs47RjQozTB_8YGVN6clr-/view?usp=drive_link', product: 'Monstrack Train', title: 'Monstrack Train', src: '/img/media/m-train.png', excerpt: 'Monstrack Train IoT provides complete visibility and control in real time of industrial assets operating in unfixed areas', cat: 1, active: false },
  { url: 'https://drive.google.com/file/d/1HwpkUkQka5Vs47RjQozTB_8YGVN6clr-/view?usp=drive_link', product: 'Monstrack Heavy Equipment', title: 'Monstrack Heavy Equipment', src: '/img/media/m-heavy.png', excerpt: 'Monstrack is a monitoring and tracking system using satellite and/or GSM networks for heavy equipment, trucks, and more', cat: 1, active: false },
  { url: 'https://drive.google.com/file/d/1rHktN2uGhudGZqhUwcKxOQ-Gk0YLCWsB/view?usp=drive_link', product: 'Monstrack Container/Chasis', title: 'Monstrack Container/Chasis', src: '/img/media/m-chasis.png', excerpt: 'Monstrack IP-1001 is a specialized monitoring and tracking system for containers and chassis', cat: 1, active: false },])


const filterBrochure=ref([])

function resetFilter() {
  filterBrochure.value=[]
}
</script>