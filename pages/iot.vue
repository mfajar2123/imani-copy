<style>
@media screen and (max-width: 600px) {
    table {
        border: 0;
    }

    table caption {
        font-size: 1.3em;
    }

    table thead {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }

    table tr {
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: .625em;
    }

    table td {
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: .8em;
        text-align: right;
    }

    table td::before {
        /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
    }

    table td:last-child {
        border-bottom: 0;
    }
}
</style>
<template>
    <div class="main-bg h-screen iot">
        <Theheader />
        <div class="bg-iot bg-right bg-no-repeat bg-contain max-sm:bg-contain max-sm:bg-bottom">
            <IotThejumbotron />
        </div>
        <!-- Layer 1 -->
        <div class="bg-iot-b py-11">
            <div
                class="container w-10/12 grid grid-cols-2 gap-6 place-items-center mx-auto p-20 my-16 max-sm:grid-cols-1 max-sm:w-11/12 max-sm:p-4">
                <div class="bg-solutions text-white p-11 rounded-xl w-10/12 text-justify max-sm:w-full">
                    <h2 class="text-2xl font-bold text-center">AISSAT</h2>
                    <p class="my-6">AISSAT is a collection of systems capable of increasing maritime
                        efficiency and security.</p>
                    <ul>
                        <li class="my-2">
                            <NuxtImg class="w-5 mr-3 float-left" src="/img/iot/icons8-water-transportation-60.png" />
                            <span>Vessel Tracking</span>
                        </li>
                        <li class="my-2">
                            <NuxtImg class="w-5 mr-3 float-left" src="/img/iot/icons8-port-60.png" /><span>Port
                                Management</span>
                        </li>
                        <li class="my-2">
                            <NuxtImg class="w-5 mr-3 float-left" src="/img/iot/icons8-monitor-60.png" /><span>Area /
                                Asset Monitoring</span>
                        </li>
                    </ul>
                </div>
                <div class="bg-solutions text-white p-11 rounded-xl w-10/12 text-justify max-sm:w-full">
                    <h2 class="text-2xl font-bold text-center">MONSTRACK</h2>
                    <p class="my-6">Monstrack is a land based asset tracking and monitoring system.
                    </p>
                    <ul>
                        <li class="my-2">
                            <NuxtImg class="w-5 mr-3 float-left"
                                src="/img/iot/icons8-water-transportation-60 (1).png" />
                            <span>Heavy Equipment</span>
                        </li>
                        <li class="my-2">
                            <NuxtImg class="w-5 mr-3 float-left" src="/img/iot/icons8-port-60 (2).png" /><span>Container
                                / Chassis</span>
                        </li>
                        <li class="my-2">
                            <NuxtImg class="w-5 mr-3 float-left" src="/img/iot/icons8-port-60 (1).png" />
                            <span>Train</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- Layer 2 -->
        <div class="separator-iot-1b"></div>
        <div class="py-11">
            <div class="container w-10/12 mx-auto px-20 max-sm:p-4">
                <div class="group-87">
  <NuxtImg class="line-32" src="/img/iot/line-320.svg" />
  <div class="group-86">
    <div class="rectangle-685"></div>
    <NuxtImg class="aissat-logo-grey-red max-sm:w-[65%]" src="/img/iot/aissat-logo-grey-red0.png" />
  </div>
</div>
<!-- 
                <NuxtImg class="w-10/12 mx-auto mb-16 max-sm:w-full" src="/img/iot/Group 87.png" /> -->
                <div class="my-16">
                    <h2 class="font-bold text-2xl my-2 text-green-imani">AISSAT Products</h2>
                    <div class="bg-iot-b rounded-xl py-1 px-6 drop-shadow-lg max-sm:w-full">
                        <table class="table-auto my-9">
                            <thead class="text-left p-2 my-4 border-slate-300 border-b-2">
                                <tr>
                                    <th scope="col" class="px-2">No.</th>
                                    <th scope="col" class="px-2">Function</th>
                                    <th scope="col" class="px-2">Description</th>
                                    <th scope="col" class="px-2">Product</th>
                                    <th scope="col" class="px-2">Hardware</th>
                                    <th scope="col" class="px-2">Brochure</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-left border-slate-300 border-b-2" v-for="(product, index) in products"
                                    :key="product.no">
                                    <td scope="row" data-label="No" class="p-2">{{
                                        product.no }}</td>
                                    <td data-label="Function" class="p-2">{{
                                        product.function }}</td>
                                    <td data-label="Description" class="p-2">{{
                                        product.desc }}</td>
                                    <td data-label="Product" class="p-2">{{
                                        product.product }}</td>
                                    <td data-label="Hardware" class="p-2">{{
                                        product.Hardware }}</td>
                                    <td data-label="Brochure" class="p-2 text-center text-sm">
                                        <UButton @click="products_all[index].active = true" variant="soft"
                                            class="bg-transparent text-black"><svg xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor" class="size-5 mx-auto">
                                                <path
                                                    d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                                                <path
                                                    d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                                            </svg>
                                        </UButton>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                       <div class="flex flex-wrap px-11 py-4 gap-6 justify-center bg-white rounded-md items-center my-4"><div v-for="img in logo"><NuxtImg class="w-32" :src="img.url"/></div></div>
                    </div>
                </div>
                <div class="my-16">
                    <h2 class="font-bold text-2xl my-2 text-green-imani">Hardware in AISSAT Products
                    </h2>
                    <p>Currently, Imani Prima has developed several hardware products to support
                        maritime industry businesses ranging from ship tracking, monitoring
                        underwater assets (pipes/cables), engine & fuel monitoring vessels also
                        port management.</p>
                    <div class="bg-iot-b rounded-xl py-1 px-6 my-6 drop-shadow-lg">
                        <table class="w-full">
                            <tbody>
                                <tr class="border-slate-300 border-b-2">
                                    <td scope="row" class="md:w-6/12 py-16">
                                        <NuxtImg class="w-36 mx-auto" src="/img/iot/AIS alternatif 1 (1) 1.png" />
                                    </td>
                                    <td class="md:w-6/12">
                                        <p class="font-bold">AISSAT PortPrime
                                            Station :</p>
                                        <ul class="list-decimal px-4">
                                            <li>Box AIS (Automatic
                                                Identification System)
                                            </li>
                                            <li>AIS Receiver</li>
                                            <li>Solar Panel</li>
                                        </ul>
                                        <div>
                                            <!-- <UButton @click="portprimeDatasheet.active = true" color="teal"
                                                variant="solid">
                                                Download Datasheet
                                            </UButton> -->
                                            <UDropdown :items="Portdata" :ui="{container: 'DropButton', wrapper: 'h-11'}" :popper="{ placement: 'bottom-start' }">
                                                    <UButton color="teal" label="Download Datasheet" class="button" trailing-icon="i-heroicons-chevron-down-20-solid"/>
                                            </UDropdown> 
                                            <template v-for="(item, index) in Portdata[0]" :keys="index">
                                                <BrochureDownloadModal file_type="brochure" v-model="Portdata[0][index].active" :url="item.url" :selected_product="item.label" />
                                            </template>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-slate-300 border-b-2">
                                    <td scope="row" class="md:w-6/12 py-16">
                                        <NuxtImg class="w-36 mx-auto" src="/img/iot/Depan 2.png" />
                                    </td>
                                    <td class="md:w-6/12">
                                        <p class="font-bold">M2Prime Module VMS
                                            :</p>
                                        <ul class="list-decimal px-4">
                                            <li>VMS 2.0</li>
                                            <li>Fuse</li>
                                            <li>Bracket</li>
                                            <li>Bracket Junction</li>
                                            <li>U-Bolt</li>
                                            <li>Modem ST6100</li>
                                        </ul>
                                        <div>
                                            <!-- <UButton @click="m2primeDatasheet.active = true" color="teal"
                                                variant="solid">
                                                Download Datasheet
                                            </UButton> -->
                                            <UDropdown :items="VMSdata" :ui="{container: 'DropButton', wrapper: 'h-11'}" :popper="{ placement: 'bottom-start' }">
                                                    <UButton color="teal" label="Download Datasheet" class="button" trailing-icon="i-heroicons-chevron-down-20-solid"/>
                                            </UDropdown> 
                                            <template v-for="(item, index) in VMSdata[0]" :keys="index">
                                                <BrochureDownloadModal file_type="brochure" v-model="VMSdata[0][index].active" :url="item.url" :selected_product="item.label" />
                                            </template>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="border-slate-300 border-b-2">
                                    <td scope="row" class="md:w-6/12 py-16">
                                        <NuxtImg class="w-36 mx-auto" src="/img/iot/FMS.png" />
                                    </td>
                                    <td class="md:w-6/12">
                                        <p class="font-bold">M2Prime Module FMS
                                            :</p>
                                        <ul class="list-decimal px-4">
                                            <li>FMS System</li>
                                            <li>Flow Meter</li>
                                            <li>1-3 Months Data Collection</li>
                                        </ul>
                                        <div>
                                            <!-- <UButton @click="FMSDatasheet.active = true" color="teal"
                                                variant="solid">
                                                Download Datasheet
                                            </UButton>    -->  
                                            <UDropdown :items="FMSdata" :ui="{container: 'DropButton', wrapper: 'h-11'}" :popper="{ placement: 'bottom-start' }">
                                                    <UButton color="teal" label="Download Datasheet" class="button" trailing-icon="i-heroicons-chevron-down-20-solid"/>
                                            </UDropdown>    
                                            <template v-for="(item, index) in FMSdata[0]" :keys="index">
                                                <BrochureDownloadModal file_type="brochure" v-model="FMSdata[0][index].active" :url="item.url" :selected_product="item.label" />
                                            </template>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- Layer 3 -->
        <div class="separator-iot-1c"></div>
        <div class="bg-iot-b py-11">
            <div class="container w-10/12 mx-auto px-20 max-sm:p-4">
                <div class="pb-4 mb-20 max-sm:py-4">
                    <UDivider size="sm" :ui="{
                        border: { base: 'border-black border-0' }
                    }">
                        <div class="w-80">
                            <NuxtImg class="mx-auto w-full max-sm:w-10/12" src="/img/iot/Group 88.png" />
                        </div>
                    </UDivider>
                </div>
                <h2 class="text-4xl font-bold text-left text-green-imani">Monstrack Heavy Equipment</h2>
                <div class="md:flex gap-4 my-20 place-items-center">
                    <div class="px-8 w-full">
                        <NuxtImg src="/img/iot/Group 153.png" />
                    </div>
                    <div class="px-8">
                        <p>Monstrack is a monitoring and tracking system using satellite and/or GSM networks for heavy
                            equipment, trucks, and more. Monstrack can provide tracking data, engine status, engine
                            health, and unit productivity reports to improve safety, efficiency, and productivity.</p>
                        <UButton size="md" :ui="{ rounded: 'rounded-full' }" class="my-4 green-imani"
                            @click="products_all[6].active = true">
                            <span class="px-2 text-xl flex gap-2 max-sm:text-sm">Monstrack Heavy Equipment
                                Brochure <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="size-5 mx-auto">
                                    <path
                                        d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                                    <path
                                        d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                                </svg></span>
                        </UButton>
                    </div>
                </div>
                <h2 class="text-2xl font-bold text-left text-green-imani">Key Features</h2>
                <p>We provide Monstrack with all the features that will greatly assist you in monitoring your assets.
                </p>
                <div class="md:grid grid-cols-4 gap-6 my-8 max-sm:grid-cols-1 font-sserif font-bold">
                    <div class="p-9 border-slate-600 border-2 rounded-xl max-sm:mb-2">
                        <NuxtImg class="mb-10 w-9 max-sm:float-left max-sm:mr-4" src="/img/iot/layers_24dp_FILL0_wght400_GRAD0_opsz24 1.png" />Vehicle and
                        asset tracking
                    </div>
                    <div class="p-9 border-slate-600 border-2 rounded-xl max-sm:mb-2">
                        <NuxtImg class="mb-10 w-9 max-sm:float-left max-sm:mr-4" src="/img/iot/attach_money_24dp_FILL0_wght400_GRAD0_opsz24 1.png" />Low
                        cost and low data rate
                    </div>
                    <div class="p-9 border-slate-600 border-2 rounded-xl max-sm:mb-2">
                        <NuxtImg class="mb-10 w-9 max-sm:float-left max-sm:mr-4" src="/img/iot/map_24dp_FILL0_wght400_GRAD0_opsz24 1.png" />Full coverage
                        Indonesia
                    </div>
                    <div class="p-9 border-slate-600 border-2 rounded-xl max-sm:mb-2">
                        <NuxtImg class="mb-10 w-9 max-sm:float-left max-sm:mr-4" src="/img/iot/code_blocks_24dp_FILL0_wght400_GRAD0_opsz24 1.png" />Engine
                        status monitoring
                    </div>
                </div>
            </div>
        </div>
        <!-- Layer 4 -->
        <div class="separator-iot-1b"></div>
        <div class="bg-white py-11">
            <div class="container w-10/12 mx-auto p-20 max-sm:p-4">
                <h2 class="text-4xl font-bold text-left text-green-imani">Monstrack Container/Chassis</h2>
                <div class="md:flex gap-4 my-20 place-items-center">
                    <div class="px-8 w-full">
                        <NuxtImg src="/img/iot/Group 54.png" />
                    </div>
                    <div class="px-8">
                        <p> Monstrack IP-1001 is a specialized monitoring and tracking system for containers and
                            chassis. The tracking device can be installed on the chassis and on the container, and it
                            can be monitored in the app in real-time.</p>
                        <UButton size="md" :ui="{ rounded: 'rounded-full' }" class="my-4 green-imani"
                            @click="products_all[7].active = true">
                            <span class="px-2 text-xl flex gap-2 max-sm:text-sm">Monstrack
                                Container/Chassis Brochure <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                    fill="currentColor" class="size-5 mx-auto">
                                    <path
                                        d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                                    <path
                                        d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                                </svg></span>
                        </UButton>
                    </div>
                </div>
                <h2 class="text-2xl font-bold text-left text-green-imani">Key Features</h2>
                <p>We provide Monstrack with all the features that will greatly assist you in monitoring your assets.
                </p>
                <div class="md:grid grid-cols-4 gap-6 my-8 max-sm:grid-cols-1 font-sserif font-bold">
                    <div class="p-9 border-slate-600 border-2 rounded-xl max-sm:mb-2">
                        <NuxtImg class="mb-10 w-9 max-sm:float-left max-sm:mr-4" src="/img/iot/radar_24dp_FILL0_wght400_GRAD0_opsz24 1.png" />Latest
                        Position Realtime Tracking
                    </div>
                    <div class="p-9 border-slate-600 border-2 rounded-xl max-sm:mb-2">
                        <NuxtImg class="mb-10 w-9 max-sm:float-left max-sm:mr-4"
                            src="/img/iot/motion_sensor_idle_24dp_FILL0_wght400_GRAD0_opsz24 1.png" />Running & Idle
                        Interval Setting
                    </div>
                    <div class="p-9 border-slate-600 border-2 rounded-xl max-sm:mb-2">
                        <NuxtImg class="mb-10 w-9 max-sm:float-left max-sm:mr-4" src="/img/iot/data_object_24dp_FILL0_wght400_GRAD0_opsz24 1.png" />
                        Chassis Code Rename
                    </div>
                    <div class="p-9 border-slate-600 border-2 rounded-xl max-sm:mb-2">
                        <NuxtImg class="mb-10 w-9 max-sm:float-left max-sm:mr-4" src="/img/iot/history_24dp_FILL0_wght400_GRAD0_opsz24 1.png" />History
                    </div>
                </div>
            </div>
        </div>
        <!-- Layer 5 -->
        <div class="separator-diagonal-ai1a"></div>
        <div class="md:flex yellow-bg py-16">
            <div class="container w-10/12 mx-auto px-20 max-sm:px-4">
                <h2 class="text-4xl font-bold text-left text-green-imani">Monstrack Train</h2>
                <div class="md:flex gap-4 my-20 place-items-center">
                    <div class="px-8 w-full">
                        <NuxtImg src="/img/iot/Group 58.png" />
                    </div>
                    <div class="px-8">
                        <p>Monstrack Train IoT provides complete visibility and control in real time of industrial
                            assets operating in unfixed areas. A versatile device, Monstrack Train IoT can be installed
                            on industrial assets such as commercial vehicles, wagons, heavy equipment, and more.</p>
                        <UButton size="md" :ui="{ rounded: 'rounded-full' }" class="my-4 green-imani"
                        @click="products_all[8].active = true">
                            <span class="px-2 text-xl flex gap-2 max-sm:text-sm">Monstrack Train Brochure
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="size-5 mx-auto">
                                    <path
                                        d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                                    <path
                                        d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                                </svg></span>
                        </UButton>
                    </div>
                </div>
                <h2 class="text-2xl font-bold text-left text-green-imani">Key Features</h2>
                <p>We provide Monstrack with all the features that will greatly assist you in monitoring your assets.
                </p>
                <div class="md:grid grid-cols-4 gap-6 my-8 max-sm:grid-cols-1 font-sserif font-bold">
                    <div class="p-9 border-slate-600 border-2 rounded-xl max-sm:mb-2">
                        <NuxtImg class="mb-10 w-9 max-sm:float-left max-sm:mr-4" src="/img/iot/layers_24dp_FILL0_wght400_GRAD0_opsz24 1.png" />Train
                        Tracking
                    </div>
                    <div class="p-9 border-slate-600 border-2 rounded-xl max-sm:mb-2">
                        <NuxtImg class="mb-10 w-9 max-sm:float-left max-sm:mr-4" src="/img/iot/attach_money_24dp_FILL0_wght400_GRAD0_opsz24 1.png" />Low
                        Cost and Low Data Rate
                    </div>
                    <div class="p-9 border-slate-600 border-2 rounded-xl max-sm:mb-2">
                        <NuxtImg class="mb-10 w-9 max-sm:float-left max-sm:mr-4" src="/img/iot/map_24dp_FILL0_wght400_GRAD0_opsz24 1.png" />Full coverage
                        Indonesia
                    </div>
                    <div class="p-9 border-slate-600 border-2 rounded-xl max-sm:mb-2">
                        <NuxtImg class="mb-10 w-9 max-sm:float-left max-sm:mr-4" src="/img/iot/code_blocks_24dp_FILL0_wght400_GRAD0_opsz24 1.png" />
                        Monitoring and Maintenance
                    </div>
                </div>
            </div>
        </div>
        <iotThefooter />

        <template v-for="product in products_all">
            <BrochureDownloadModal file_type="brochure" v-model="product.active" :url="product.url" :selected_product="product.product" />
        </template>
        <BrochureDownloadModal file_type="datasheet" v-model="portprimeDatasheet.active" :url="portprimeDatasheet.url"
            :selected_product="portprimeDatasheet.title" />
        <BrochureDownloadModal file_type="datasheet" v-model="m2primeDatasheet.active" :url="m2primeDatasheet.url"
            :selected_product="m2primeDatasheet.title" />
        <BrochureDownloadModal file_type="datasheet" v-model="FMSDatasheet.active" :url="FMSDatasheet.url"
            :selected_product="FMSDatasheet.title" />
    </div>
</template>

<script setup lang="ts">
const logo = [
    {url: '/img/iot/AISSAT Port Prime (1) 1.png'},
    {url: '/img/iot/AISSAT M2 Prime.png'},
    {url: '/img/iot/AISSAT SAT Prime.png'},
    {url: '/img/iot/AISSAT PM Prime.png'}
]
const portprimeDatasheet = ref({
    url: 'https://drive.google.com/file/d/1vPG0bRq5dOBaAxdmm1VEGr_mW0sAyY_K/view?usp=drive_link',
    title: 'Portprime Datasheet',
    active: false,
});

const m2primeDatasheet = ref({
    url: 'https://drive.google.com/file/d/1vPG0bRq5dOBaAxdmm1VEGr_mW0sAyY_K/view?usp=drive_link',
    title: 'M2Prime Datasheet',
    active: false,
});

const FMSDatasheet = ref({
    url: 'https://drive.google.com/file/d/1Zg635VOtOFvZT3hdWDmh-sYK_wIa15k5/view?usp=drive_link',
    title: 'FMS Datasheet',
    active: false,
});

const Portdata = ref([[
    {
    label: 'ID Version',
    url: 'https://drive.google.com/file/d/1vPG0bRq5dOBaAxdmm1VEGr_mW0sAyY_K/view?usp=drive_link',
    active: false,
    click: () => {
        Portdata.value[0][0].active = true    
        }
    },
    {
    label: 'EN Version',
    url: 'https://drive.google.com/file/d/1vPG0bRq5dOBaAxdmm1VEGr_mW0sAyY_K/view?usp=drive_link',
    click: () => {
        Portdata.value[0][1].active = true    
        }
    }
]])

const VMSdata = ref([[
    {
    label: 'ID Version',
    url: 'https://drive.google.com/file/d/1vPG0bRq5dOBaAxdmm1VEGr_mW0sAyY_K/view?usp=drive_link',
    active: false,
    click: () => {
        VMSdata.value[0][0].active = true    
        }
    },
    {
    label: 'EN Version',
    url: 'https://drive.google.com/file/d/1iAG-RsgqloHpi8Ed3Ba9UW8VTDTY9fte/view?usp=drive_link',
    click: () => {
        VMSdata.value[0][1].active = true    
        }
    }
]])

const FMSdata = ref([[
    {
    label: 'ID Version',
    url: 'https://drive.google.com/file/d/1Zg635VOtOFvZT3hdWDmh-sYK_wIa15k5/view?usp=drive_link',
    active: false,
    click: () => {
        FMSdata.value[0][0].active = true    
        }
    },
    {
    label: 'EN Version',
    url: 'https://drive.google.com/file/d/1Zg635VOtOFvZT3hdWDmh-sYK_wIa15k5/view?usp=drive_link',
    click: () => {
        FMSdata.value[0][1].active = true    
        }
    }
]])


const products = [
    { no: "1", function: "Area Monitoring", desc: "Tracks vessels around the port with a range of approximately 30 miles from the AIS receiver", product: "PortPrime", Hardware: "AISSAT PortPrime, Station (AIS Station)", link: "/#" },
    { no: "2", function: "Monitoring & Tracking Vessels Position", desc: "Vessel monitoring system with gross tonnage > 30", product: "M2Prime", Hardware: "VMS 2.0", link: "/#" },
    { no: "3", function: "Engine & Fuel Monitoring for Vessels", desc: "Vessel monitoring with fuel & engine parameters", product: "M2Prime", Hardware: "FMS", link: "/#" },
    { no: "4", function: "Port Management", desc: "Supports port operations and administrations of port authorities", product: "PMPrime", Hardware: "Android & iOS Apps", link: "/#" },
    { no: "5", function: "Tracking Vessels via Satellites", desc: "Worldwide range vessel monitoring system", product: "SatPrime", Hardware: "ORBCOMM Satelite Modem", link: "/#" },
];
const products_all = ref([
    { active: false, url: 'https://drive.google.com/file/d/1MpfEkymglZCRDY8aXA1Nxbl9pvPL4DWf/view?usp=drive_link', product: 'PortPrime' },
    { active: false, url: 'https://drive.google.com/file/d/18T19KH5klmGhRmkdTrXW2w1qoJ0HZ8PE/view?usp=drive_link', product: 'M2Prime' },
    { active: false, url: 'https://drive.google.com/file/d/14hGwCIUGuNGVrROzuWZHPtvKyAJDZe2u/view?usp=drive_link', product: 'M2Prime' },
    { active: false, url: 'https://drive.google.com/file/d/1vSFad7UoOQgd67mY9UPJ6-eTj65MHPxK/view?usp=drive_link', product: 'PMPrime' },
    { active: false, url: 'https://drive.google.com/file/d/17RgN3fBj6UQOwI6m7KGjZ0HIEk-C1CLA/view?usp=drive_link', product: 'SatPrime' },
    { active: false, url: 'https://drive.google.com/file/d/1CaWICOVYDgAsXpOXalW-U3sHGsy5RDKP/view?usp=drive_link', product: 'Monstrack Heavy Equipment' },
    { active: false, url: 'https://drive.google.com/file/d/1Agw8TCqd6EkZBVG9cue-ppDBqisStYDf/view?usp=drive_link', product: 'Monstrack Container-Chasis' },
    { active: false, url: 'https://drive.google.com/file/d/1zcMbTwnVEJPyjNRAsV3AbN00YG6oV3Q4/view?usp=drive_link', product: 'Monstrack Train' },
    { active: false, url: 'https://drive.google.com/file/d/1zcMbTwnVEJPyjNRAsV3AbN00YG6oV3Q4/view?usp=drive_link', product: 'Monstrack Train' }
])

useSeoMeta({
    title: 'Internet of Things - Imani Prima'
});
definePageMeta({
    colorMode: 'light',
})
</script>