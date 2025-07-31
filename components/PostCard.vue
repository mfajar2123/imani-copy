<!-- components/PostCard.vue -->
<template>
  <div class="rounded-md box-border my-4 bg-green-light">
    <div class="bg-teal-800">
      <img
        class="w-3/12 h-40 float-left mr-5 object-cover object-center rounded-md bg-teal-800 max-sm:float-none max-sm:w-full max-sm:rounded-none"
        :src="post.cover_image"
        alt="cover"
      />
    </div>
    <div class="text-green-imani font-bold pt-4 px-2">
      <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
    </div>
    <div class="w-auto text-wrap text-xs px-4">
      {{ post.excerpt2 || 'Tidak ada ringkasan.' }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
