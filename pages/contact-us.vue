<template>
    <div class="main-bg h-screen contact">
        <Theheader />
        <div class="py-20 bg-contact bg-[url('/img/contact/contact.jpg')] bg-right-bottom bg-no-repeat bg-contain max-sm:bg-bottom max-sm:py-4 max-sm:bg-contact">
        <ContactTheJumbotron />        
        </div>
        <div class="bg-white py-11">
            <div class="xl:container mx-auto px-20 max-sm:px-8">
                <div class="text-center py-28">
                    <h2 class="font-bold text-3xl">Contact Our Sales Team</h2>
                    <p>Our experts can help you find the right solution, <br />explain pricing options, or answer any of your question</p>
                </div>
                <!-- Form -->
                 <ContactTheform />
            </div>
        </div>
        <Thefooter />
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact Us - Imani Prima'
})
definePageMeta({
  colorMode: 'light',
})
</script>