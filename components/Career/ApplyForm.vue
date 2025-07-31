<template>
  <div class="md:flex">
    <div class="form w-1/2 max-sm:w-full" >
      <form class="w-11/12 max-sm:w-full" @submit.prevent="modalConfirm = true">
        <div class="mb-5">
          <label for="person_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name <span
              class="text-red-500">*</span></label>
          <input type="text" id="person_name" name="name"
            class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="dataForm.name" placeholder="Your Name" required />
        </div>
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email <span
              class="text-red-500">*</span></label>
          <input type="email" id="email" name="email"
            class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="dataForm.email" placeholder="name@imaniprima.com" required />
        </div>
        <div class="mb-5">
          <label for="position" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Applied Position
            <span class="text-red-500">*</span></label>
          <input type="text" id="position" name="position"
            class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="dataForm.position" placeholder="position" required />
        </div>
        <div class="mb-5">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover Letter <span
              class="text-red-500">*</span></label>
          <textarea id="message" name="message" rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="dataForm.cover_letter" placeholder="Leave a message..." required></textarea>
        </div>
        <button type="submit"
          class="text-white green-imani hover:green-imani focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </form>
    </div>
    <div class="map w-1/2 rounded-md max-sm:mt-8 max-sm:w-full">
      <iframe style="border: 0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8171229267023!2d106.81663921423758!3d-6.287753063293558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f21e0c9a2983%3A0x46d8e5a1241eca4b!2sImani%20Prima!5e0!3m2!1sid!2sid!4v1637103877936!5m2!1sid!2sid"
        class="responsive-frame" allowfullscreen="false"></iframe>
    </div>
  </div>

  <UModal v-model="modalConfirm">
    <div class="p-4">
      <p>Do you want to submit this form?</p>
      <div class="flex justify-end">
        <button type="button"
          class="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          @click="handleSubmit(dataForm)">
          Yes
        </button>
        <button type="button"
          class="text-red-500 hover:border-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          @click="modalConfirm = false">
          No
        </button>
      </div>
    </div>
  </UModal>
  <UNotifications />
</template>

<script setup>
const route = useRoute();
const toast = useToast();
const config = useRuntimeConfig();

const dataForm = ref({
  name: '',
  email: '',
  position: route.query.ref ? route.query.ref : '',
  cover_letter: ''
});
const modalConfirm = ref(false);

const handleSubmit = async ({ name, email, position, cover_letter }) => {
  try {
    const req = await $fetch(config.public.serviceUrl + '/career', {
      method: 'POST',
      body: {
        name,
        email,
        position,
        cover_letter
      }
    });

    dataForm.value = {
      name: '',
      email: '',
      position: '',
      cover_letter: ''
    }
    toast.add({ title: 'thank you for your submission 😊', color: 'sky' });
  } catch (error) {
    console.log(error);
  }

  modalConfirm.value = false;
}
</script>