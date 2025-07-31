<template>
    <div class="main-bg h-screen career-apply">
        <Theheader />
        <div
            class="py-20 bg-contact bg-[url('/img/contact/contact.jpg')] bg-right bg-no-repeat bg-cover max-sm:bg-contain max-sm:bg-bottom">
            <ContactTheJumbotron />
        </div>
        <div class="bg-white py-11" id="main-apply">
            <div class="xl:container mx-auto px-20 max-sm:px-4">
                <div class="text-center py-20">
                    <h2 class="font-bold text-3xl">Career Division</h2>
                    <!-- <p>Our experts can help you find the right solution, <br />explain pricing options, or answer any of
                        your question</p> -->
                </div>
                <CareerApplyForm />
            </div>
        </div>
        <Thefooter />
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'Career Apply - Imani Prima'
})
definePageMeta({
    colorMode: 'light',
})
</script>