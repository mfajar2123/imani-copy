<template>
<div class="main-bg h-screen company">
<Theheader />
<div class="bg-company bg-[url('/img/company.png')] bg-right bg-no-repeat bg-contain max-sm:bg-contain max-sm:bg-bottom">
    <CompanyThejumbotron />
</div>
<!-- Layer 2 -->
<div class="gray-imani py-11">
    <div class="container w-10/12 mx-auto px-20 max-sm:px-4">
    <p class="text-green-imani text-4xl font-bold my-11">Our Licenses</p>
    <ul v-for="year in License" :key="year.year">
        <li class="my-6 md:flex max-sm:place-content-center">
            <div class="logo mx-4 w-14 h-14 max-sm:float-left"><NuxtImg :src="year.url" /></div>
            <div class=""><p class="font-bold">{{ year.year }}</p>
            <div class="max-sm:my-6"><p>{{ year.desc }}</p></div>
        </div>
        </li>
        </ul>
    </div> 
</div>
<!-- Layer 3 -->
<div class="separator-diagonal-bottom-comp1a"></div>
<div class="md:flex bg-white py-11">
    <div class="container w-10/12 mx-auto px-20 max-sm:px-4">
    <p class="text-green-imani text-4xl font-bold my-11 text-center">Our Services</p>
    <CompanyTheservice />
    </div>
</div> 
<!-- Layer 4 -->
<div class="separator-diagonal-bottom-comp1b"></div>
<div class="md:flex gray-imani py-4">
<div class="container w-10/12 mx-auto px-11 mb-20 max-sm:mb-0">
    <CompanyThenews />
</div>
</div>
<CareerThefooter />
</div>
</template>
<script setup lang="ts">
const License = [
    { year : "Since 2006", desc : "Imani Prima in IT & Telecomunication", url: "/img/logo-license/circle-imani.png" },
    { year : "Since 2007", desc : "In cooperation with ORBCOMM (US satellite service company)", url: "/img/logo-license/circle-orbcom.png" },
    { year : "2009", desc : "Acquired Telecommunication License (Sistem Komunikasi Data) from Kominfo (Ministry of Communication & Information)", url: "/img/logo-license/circle-kominfo.png" },
    { year : "2017", desc : "Acquired Vessel Tracking Provider from KKP (Ministry of Maritime Affairs & Fisheries)", url: "/img/logo-license/circle-KKP.png" },
    { year : "2018", desc : "Registered as Provider in Indonesia defense industry from Kemhan (Ministry of Defence)", url: "/img/logo-license/circle-menhan.png" },
];

useSeoMeta({
  title: 'Company - Imani Prima'
})
definePageMeta({
  colorMode: 'light',
})

</script>