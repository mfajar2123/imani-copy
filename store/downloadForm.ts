import { defineStore } from 'pinia';

export const useDownloadStore = defineStore('downloadFormStore', () => {

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
    });

    return {
        dataForm
    }
})