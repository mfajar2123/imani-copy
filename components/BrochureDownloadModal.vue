<template>
    <UModal v-model="modalActive">
        <div class="bg-cyan-950 px-8 py-6 rounded-lg">
            <div class="flex justify-end">
                <UButton variant="solid" icon="i-heroicons-x-mark" size="2xs"
                    class="bg-white text-teal-950 hover:bg-gray-200" @click="modalActive = false">
                </UButton>
            </div>
            <form @submit.prevent="handleFormSubmit()" class="w-11/12 mx-auto">
                <div class="mb-5">
                    <label for="person_name" class="block mb-2 text-sm font-medium text-white dark:text-white">
                        Full Name <span class="text-red-500">*</span></label>
                    <div class="flex w-full">
                        <!-- <UInputMenu v-model="dataForm.honorific" :options="honorificOption" class="h-full" /> -->
                        <select v-model="dataForm.honorific"
                            class="h-full bg-gray-50 border border-r-0 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-l-md">
                            <option v-for="honorific in honorificOption" :key="honorific">{{ honorific }}</option>
                        </select>
                        <input type="text" id="person_name" name="name"
                            class="bg-gray-50 border border-l-0 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-r-md"
                            placeholder="Your Name" v-model="dataForm.name" required />
                    </div>
                </div>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Business
                        Email
                        <span class="text-red-500">*</span></label>
                    <input type="email" id="email" name="email"
                        class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@imaniprima.com" v-model="dataForm.email" required />
                </div>
                <div class="mb-5">
                    <label for="subject" class="block mb-2 text-sm font-medium text-white dark:text-white">Phone
                        Number
                        <span class="text-red-500">*</span></label>
                    <input type="text" id="phone" name="phone"
                        class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="phone" v-model="dataForm.phone" required />
                </div>
                <div class="mb-5">
                    <label for="position" class="block mb-2 text-sm font-medium text-white dark:text-white">Job
                        Position
                        <span class="text-red-500">*</span></label>
                    <input type="text" id="position" name="position"
                        class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="position" v-model="dataForm.position" required />
                </div>
                <div class="mb-5">
                    <label for="company_name" class="block mb-2 text-sm font-medium text-white dark:text-white">Company
                        Name
                        <span class="text-red-500">*</span></label>
                    <input type="text" id="company_name" name="company_name"
                        class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="company name" v-model="dataForm.company" required />
                </div>
                <div class="mb-5">
                    <label for="company_town" class="block mb-2 text-sm font-medium text-white dark:text-white">Company
                        Town</label>
                    <input type="text" id="company_town" name="company_town"
                        class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="company_town" v-model="dataForm.city" />
                </div>
                <div class="mb-5">
                    <label for="field" class="block mb-2 text-sm font-medium text-white dark:text-white">Company
                        Field</label>
                    <input type="text" id="field" name="field"
                        class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="field" v-model="dataForm.company_field" />
                </div>
                <div class="mb-5 text-white text-sm flex items-center w-80">
                    <input type="checkbox" id="agreement" name="agreement" v-model="dataForm.agreement" />
                    <label class="ml-2">I agree to be contacted by the Imani Prima sales team about the files I am interested in
                    </label>
                </div>
                <button type="submit"
                    class="text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-bold rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800 flex items-center gap-2 mx-auto"
                    :class="{ 'opacity-50 hover:bg-amber-500 cursor-not-allowed dark:hover:bg-amber-600': !dataForm.agreement }"
                    :disabled="!dataForm.agreement">
                    Download
                    <UIcon name="ic:baseline-download" />
                </button>
            </form>
        </div>
    </UModal>
    <UNotifications />
</template>

<script setup lang="ts">
import { useDownloadStore } from '@/store/downloadForm';

const props = defineProps({
    url: {
        type: String,
        required: true
    },
    selected_product: {
        type: String,
        required: true
    },
    file_type:{
        type: String,
        required: true
    }
});
const toast = useToast();
const config = useRuntimeConfig();
const store = useDownloadStore();


const session = ref()
const modalActive = defineModel({ type: Boolean, default: false });

const honorificOption = ['Mr.', 'Ms.', 'Mrs.'];
const dataForm = ref({
  honorific: 'Mr.',
  name: '',
  email: '',
  phone: '',
  position: '',
  company: '',
  city: '',
  company_field: '',
  agreement: false
})


const handleFormSubmit = async () => { console.log(JSON.parse(sessionStorage.getItem('download-log') as string));
    try {
        downloadBrochure();
        const name_h = dataForm.value.honorific + ' ' + dataForm.value.name;
        const res = await $fetch(config.public.serviceUrl + '/download', {
            method: 'POST',
            body: {
                name: name_h,
                email: dataForm.value.email,
                phone: dataForm.value.phone,
                position: dataForm.value.position,
                company: dataForm.value.company,
                city: dataForm.value.city,
                company_field: dataForm.value.company_field,
                agreement: dataForm.value.agreement,
                type: props.file_type,
                selected_product: props.selected_product
            }
        });

        dataForm.value.agreement = false;
        store.dataForm = dataForm.value;
        sessionStorage.setItem('download-log', JSON.stringify(store.dataForm));
        
        toast.add({ title: 'Document Sent Succesfully', color: 'sky' });
    } catch (error) {
        console.log(error);
    }
    modalActive.value = false;
}

const downloadBrochure = () => {
    window.open(props.url, '_blank');
}

onMounted(() => {
    session.value = sessionStorage.getItem('download-log');
    if (session.value) {
        store.dataForm = JSON.parse(session.value);
    }
    dataForm.value = store.dataForm
})
</script>