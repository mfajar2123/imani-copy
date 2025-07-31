<template>
<div class="main-bg h-screen use-case">
    <Theheader />
    <div class="yellow-dark-bg bg-right bg-no-repeat bg-cover max-sm:bg-contain max-sm:bg-bottom">
    <UsecaseThejumbotron />
    </div>

    <!-- Layer 2 -->
    <div class="main-bg py-11">
        <div class="container w-10/12 mx-auto px-20 max-sm:px-4">
            <p class="text-white text-4xl font-bold my-11">Case Study In Maritime (Energy)</p>
            <UsecaseCasemaritime />
        </div>
    </div>
    <div class="separator-uc-1b"></div>
    
    <!-- Layer 3 -->
    <div class="py-11">
        <div class="container w-10/12 mx-auto px-20 max-sm:px-4">
            <p class="text-green-imani text-4xl font-bold my-11">Case Study In Land Based Asset</p>
            <UsecaseCasemonstrack />
        </div>
    </div>
    <div class="separator-diagonal-bottom-comp1b"></div>

    <!-- Layer 4 -->
    <div class="gray-imani py-11">
        <div class="container w-10/12 mx-auto px-20 max-sm:px-4">
            <p class="text-green-imani text-4xl font-bold my-11">Case Study In AI</p>
            <UsecaseCaseai />
        </div>
    </div>
    <div class="separator-diagonal-bottom-comp1a"></div>

    <!-- Layer 5 -->
    <div class="py-11">
        <div class="container w-10/12 mx-auto px-20 max-sm:px-4">
            <p class="text-green-imani text-4xl font-bold my-11">Case Study In Energy</p>
            <UsecaseCaseenergy />
        </div>
    </div>
    <div class="-mt-1 separator-diagonal-ai1a"></div>

    <!-- Layer 6 -->
    <div class="yellow-bg py-11">
        <div class="container w-10/12 mx-auto px-20 max-sm:px-4">
            <p class="text-green-imani text-4xl font-bold my-11">Case Study In Media</p>
            <UsecaseCasemedia />
        </div>
    </div>
    <UsecaseThefooter />
</div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'AIoT by Use Case - Imani Prima'
});
definePageMeta({
  colorMode: 'light',
})
</script>