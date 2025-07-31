<template>
    <div class="main-bg h-screen career-page">
    <Theheader />
    <div class="green-ca-bg bg-right bg-no-repeat bg-cover max-sm:bg-contain max-sm:bg-bottom">
    <CareerThejumbotron />
    </div>
    <!-- Layer 2 -->
    <div class="yellow-ca-bg py-11">
    <div class="xl:container mx-auto px-20 max-sm:px-4">
    <p class="text-black text-4xl font-bold my-11">Careers</p>
    <p class="text-justify p-4">Our team consist of the best talents in the business, as well as in our technology domain. This enable us to focus on providing our clients with the best innovations and superior solutions, which in turn will promote our lasting partnership with them.</p>
    <CareerListcareer />
    </div>
    </div>

    <div class="separator-ca-1b"></div>
<!-- Layer 3 -->
    <div class="py-11 pl-8 pr-8">
    <div class="xl:container mx-auto px-20 max-sm:px-4">
    <CareerTestimoni />
    <UButton class="block mx-auto" size="md" :ui="{rounded: 'rounded-full'}"><NuxtLink class="font-bold px-8" to="/career-apply#main-apply">Apply</NuxtLink></UButton>
    </div>
    </div>
    <div class="separator-diagonal-bottom-comp1b"></div>
    <!-- Layer 4 -->
    <div class="gray-imani py-11">
        <div class="xl:container mx-auto px-20 max-sm:p-4">
            <CareerPhoto />
            </div>
    </div>
    <CareerThefooter />
    </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Careers - Imani Prima'
});
definePageMeta({
  colorMode: 'light',
})
</script>