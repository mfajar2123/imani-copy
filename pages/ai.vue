<template>
    <div class="main-bg h-screen ai">
        <Theheader />
        <!-- Layer 1 -->
        <div
            class="bg-solutions bg-[url('/img/AI/background.png')] xl:bg-bottom bg-right-bottom bg-no-repeat bg-contain max-sm:bg-contain max-sm:bg-bottom">
            <AiThejumbotron />
        </div>
        <!-- Layer 2 -->
        <div class="bg-white py-11">
            <div class="container w-10/12 mx-auto p-20 max-sm:p-4">
                <div class="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
                    <div class="bg-solutions text-white rounded-md p-6">
                        <p class="font-bold my-2 text-2xl">iCognis Vision</p>
                        <p>Realtime Computer Vision Analytics</p>
                    </div>
                    <div class="bg-solutions text-white rounded-md p-6">
                        <p class="font-bold my-2 text-2xl">iCognis Proctor</p>
                        <p>Online Proctoring System</p>
                    </div>
                    <div class="bg-solutions text-white rounded-md p-6">
                        <p class="font-bold my-2 text-2xl">iCognis Alinea</p>
                        <p>Text & Document Analytic</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Layer 3 -->
        <div class="separator-diagonal-bottom-comp1b"></div>
        <div class="md:flex gray-imani py-9">
            <div class="container w-10/12 mx-auto px-20 max-sm:px-4">
                <div class="vision my-4 mx-4">
                    <h2 class="text-2xl text-green-imani font-bold text-left my-4">iCognis Vision</h2>
                    <p class="text-justify">AI with machine learning capabilities that we call iCognis Vision can
                        analyze video recordings via
                        cameras without having to involve humans. Imani Prima has developed a visual media analytics
                        system applied to surveillance cameras. Through images and videos, the camera system can
                        carry out analysis and provide real time reports even if done remotely.</p>
                    <UButton size="md" :ui="{ rounded: 'rounded-full' }" class="my-4 green-imani" @click="modalBrochureVision = true">
                        <span class="text-xl p-2 flex gap-2">iCognis Vision Brochure
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="size-5 mx-auto">
                                <path
                                    d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                                <path
                                    d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                            </svg>
                        </span>
                    </UButton>
                </div>
            </div>
        </div>
        <!-- Layer 4 -->
        <div class="separator-diagonal-bottom-comp1a"></div>
        <div class="md:flex bg-white py-9">
            <div class="container w-10/12 grid grid-cols-2 items-center mx-auto px-20 max-sm:px-4 max-sm:grid-cols-1">
                <div class="proctor my-4 mx-4">
                    <h2 class="text-2xl text-green-imani font-bold text-left my-4">iCognis Proctor</h2>
                    <p class="text-justify">Detecting the presence of jockeys and
                        indications of cheating by exam participants
                        in the Online Exam & Proctoring System.</p>
                    <UButton size="md" :ui="{ rounded: 'rounded-full' }" class="my-4 green-imani" @click="modalBrochureProctor = true">
                        <span class="text-xl p-2 flex gap-2">iCognis Proctor Brochure <svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="size-5 mx-auto">
                                <path
                                    d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                                <path
                                    d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                            </svg></span>
                    </UButton>
                </div>
                <div class="proctor my-4 mx-4">
                    <NuxtImg class="w-full" src="/img/AI/proctor.png" />
                </div>
            </div>
        </div>
        <!-- Layer 5 -->
        <div class="separator-diagonal-ai1a"></div>
        <div class="md:flex yellow-bg py-16">
            <div class="container w-10/12 mx-auto px-20 max-sm:px-4">
                <div class="proctor my-4 mx-4">
                    <div class="my-4">
                        <h2 class="text-2xl text-green-imani font-bold text-left">iCognis Alinea</h2>
                        <p class="text-green-imani">(Text & Document Analytic)</p>
                    </div>
                    <p class="text-justify">Text extraction and document content analytics using AI include text content
                        extraction from
                        PDF, keyword extraction, entity name extraction (person, location, organization, time),
                        automatic
                        document classification, document similarity checking, and PDF encryption with digital signature
                        and watermark.</p>
                    <UButton size="md" :ui="{ rounded: 'rounded-full' }" class="my-4 green-imani" @click="modalBrochureAlinea = true">
                        <span class="text-xl p-2 flex gap-2">iCognis Alinea Brochure <svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="size-5 mx-auto">
                                <path
                                    d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                                <path
                                    d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                            </svg></span>
                    </UButton>
                    <div class="md:grid grid-cols-4 gap-4">
                        <div class="text-left p-6 border-2 rounded-xl border-black max-sm:m-4">
                            <NuxtImg class="w-10 h-10 mb-10 max-sm:float-left max-sm:mr-4" src="/img/AI/Vector.webp" /> Text <br />Extraction
                        </div>
                        <div class="text-left p-6 border-2 rounded-xl border-black max-sm:m-4">
                            <NuxtImg class="w-10 h-10 mb-10 max-sm:float-left max-sm:mr-4" src="/img/AI/Vector(1).webp" /> Text <br />Clasification
                        </div>
                        <div class="text-left p-6 border-2 rounded-xl border-black max-sm:m-4">
                            <NuxtImg class="w-10 h-10 mb-10 max-sm:float-left max-sm:mr-4" src="/img/AI/Vector(3).webp" /> Keyword <br />Extraction
                        </div>
                        <div class="text-left p-6 border-2 rounded-xl border-black max-sm:m-4">
                            <NuxtImg class="w-10 h-10 mb-10 max-sm:float-left max-sm:mr-4" src="/img/AI/Vector(2).webp" /> Named Entry
                            <br />Extraction
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <AiThefooter />

        <BrochureDownloadModal file_type="brochure" v-model="modalBrochureVision" :url="'https://drive.google.com/file/d/1rSIfn7QFZsOsgTukNydP3ZBhlahrqjtW/view?usp=sharing'" selected_product="iCognis Vision" />
        <BrochureDownloadModal file_type="brochure" v-model="modalBrochureProctor" :url="'https://drive.google.com/file/d/1Qde3AZoS2SXKTW9H-4RhIWvUJUqmOQxS/view?usp=sharing'" selected_product="iCognis Proctor" />
        <BrochureDownloadModal file_type="brochure" v-model="modalBrochureAlinea" :url="'https://drive.google.com/file/d/1C0op5yVYLWgT8tVgeWT4ebA_RZpIwTr9/view?usp=sharing'" selected_product="iCognis Alinea" />
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    title: 'Artificial Intelligence - Imani Prima'
})
definePageMeta({
    colorMode: 'light',
})
const modalBrochureVision = ref(false);
const modalBrochureProctor = ref(false);
const modalBrochureAlinea = ref(false);
</script>
