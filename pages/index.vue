    <template>
        <div id="animate" class="main-bg h-screen home">
            <Theheader />
            <div 
                class="green-banner bg-[url('/img/home/bg-home.png')] bg-bottom bg-no-repeat bg-cover md:bg-cover md:bg-bottom max-sm:bg-contain max-sm:bg-bottom">
                <HomeThejumbotron />
            </div>
            <!-- Layer 2 -->
            <div class="md:flex bg-white py-9 relative">
                <div class="container w-10/12 mx-auto">
                    <div class="m-10 max-sm:m-0">
                        <p class="text-4xl text-green-imani font-bold my-5">We are tomorrow in the Internet of Things (IoT) and <br />Artificial Intelligence (AI) fields.</p>
                    </div>
                    <div class="m-10 max-sm:bg-green-light max-sm:rounded-xl max-sm:p-6 max-sm:m-0">
                        <p class="text-justify">The role of Internet of Things (IoT) and Artificial Intelligence (AI) is
                            already becoming
                            increasingly important in the maritime, mining, and logistics industries. However, their
                            significance is expected to grow even more in the coming years, creating vast opportunities for
                            growth and expansion. </p>
                        <p></p>    
                        <p class="text-justify">We have long anticipated this change through years of research and
                            innovation with Internet
                            of Things (IoT) and Artificial Intelligence (AI) technologies to optimize operations, improve
                            safety
                            measures, enhance efficiency, and reduce costs. Our mission is to deliver world-class-quality
                            products and services. We achieve this by offering flexible solutions designed to meet clients
                            unique needs from start to success.</p>
                    </div>
                    <!-- Box Start -->
                    <div class="md:flex gap-2 place-content-center">
                        <div
                            class="box-border h-32 w-96 border-2 p-4 rounded-2xl bg-green-light drop-shadow-md max-sm:mx-auto my-4 max-sm:w-full">
                            <p class="text-green-imani text-xl font-bold">Internet of Things (IoT)</p>
                            <p>AISSAT and Monstrack: Data Insights for Businesses</p>
                        </div>
                        <div
                            class="box-border h-32 w-96 border-2 p-4 rounded-2xl bg-green-light drop-shadow-md max-sm:mx-auto my-4 max-sm:w-full">
                            <p class="text-green-imani text-xl font-bold">Artificial Intelligence (AI)</p>
                            <p>iCognis: Uncover Patterns, Enhance Strategy</p>
                        </div>
                    </div>
                    <!-- box end -->
                </div>
            </div>
            <!-- End Layer 2 -->
            <!-- Layer 3 -->
            <div class="separator-diagonal-1a"></div>
            <div class="md:flex bg-green-light">
                <div class="container w-10/12 mx-auto px-11">
                    <p class="text-2xl text-green-imani font-bold text-center mb-8 max-sm:mt-0">What Our Customers Say</p>
                    <div class="md:grid place-items-center">
                        <div
                            class="box-border h-52 w-2/4 border-2 p-4 bg-white rounded-xl drop-shadow max-sm:w-4/5 mx-auto max-sm:h-auto">
                            <div class="ltr">
                                <NuxtImg class="w-5 h-auto" src="/img/home/left-quote-svgrepo-com.svg" />
                            </div>
                            <p class="my-4 text-xs">Yang kami suka dari Imani Prima, mereka mensupport kami 24 jam x 7 di
                                setiap harinya. Ketika kami mengalami kendala, Imani Prima selalu ada buat kami.</p>
                            <div dir="rtl" class="rtl">
                                <NuxtImg class="w-5 h-auto rotate-180" dir="ltr"
                                    src="/img/home/left-quote-svgrepo-com.svg" />
                            </div>
                            <p class="font-bold text-sm my-2 text-center"><b>Khoirul Anam</b></p>
                            <p class="text-xs text-center">Manager Service Desk, End User Support, and Performance Reporting
                                PT KAI </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Layer 3 -->
            <!-- Layer 5 -->
            <div class="separator-diagonal-1b"></div>
            <div class="md:flex bg-white py-9">
                <div class="container w-10/12 mx-auto px-11 max-sm:px-0">
                    <div>
                        <HomeThenews />
                    </div>
                    <div>
                        <HomeThebrochure />
                    </div>
                    <!-- End Layer 5-->
                    <!-- Layer 6-->
                </div>
            </div>
            <div class="separator-diagonal-bottom-comp1b"></div>
            <div class="md:flex gray-imani py-9">
                <div class="container w-10/12 mx-auto px-11">
                    <div class="partners my-4 mx-4">
                        <p class="text-2xl text-green-imani font-bold text-center">Partners</p>
                        <HomeThepartner />
                    </div>
                    <div class="clients my-4 mx-4">
                        <p class="text-2xl text-green-imani font-bold text-center">Clients</p>
                        <HomeTheclient />
                    </div>
                </div>
            </div>
            <!-- End Layer 5 -->
            <CareerThefooter />
        </div>
    </template>
    <script setup lang="ts">

    useSeoMeta({
        title: 'IoT, AI & Everything in Between! - Imani Prima'
    })
    definePageMeta({
        colorMode: 'light',
    })
    </script>