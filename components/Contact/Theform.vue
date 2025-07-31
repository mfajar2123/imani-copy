<template>
  <div class="md:flex">
    <div class="form w-1/2 max-sm:w-full">

      <form @submit.prevent="handleFormSubmit(dataForm)" class="w-11/12 max-sm:w-full">
        <div class="mb-5">
          <label for="person_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name <span
              class="text-red-500">*</span></label>
          <input type="text" id="person_name" name="name"
            class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Name" v-model="dataForm.name" required />
        </div>
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email <span
              class="text-red-500">*</span></label>
          <input type="email" id="email" name="email"
            class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@imaniprima.com" v-model="dataForm.email" required />
        </div>
        <div class="mb-5">
          <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject <span
              class="text-red-500">*</span></label>
          <input type="text" id="subject" name="subject"
            class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="subject" v-model="dataForm.subject" required />
        </div>
        <div class="mb-5">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message <span
              class="text-red-500">*</span></label>
          <textarea id="message" name="message" rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a message..." v-model="dataForm.message" required></textarea>
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
  <UNotifications />
</template>

<script setup>
const route = useRoute();
const toast = useToast();
const config = useRuntimeConfig();
const dataForm = ref({
  name: '',
  email: '',
  subject: route.query.ref ? route.query.ref : '',
  message: ''
});

const handleFormSubmit = async ({ name, email, subject, message }) => {
  try {
    const res = await $fetch(config.public.serviceUrl + '/sales', {
      method: 'POST',
      body: {
        name,
        email,
        subject,
        message
      }
    });

    dataForm.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    toast.add({ title: 'message sent. thank you 😊', color: 'sky' });
  } catch (error) {
    console.log(error)
  }
}

</script>