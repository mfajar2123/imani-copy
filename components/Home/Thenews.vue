<template>
  <div class="flex justify-between items-center my-8 max-sm:flex-row">
    <h2 class="text-green-imani font-bold text-3xl">Highlights</h2>
    <NuxtLink
      to="/media"
      class="bg-[#A7C4BC] hover:bg-[#98b3ac] text-[#1f1f1f] rounded-full flex items-center py-3 px-4"
    >
      <NuxtImg class="w-4 mr-1" src="/img/company/ic--round-newspaper.png" />
      Discover More
    </NuxtLink>
  </div>

  <div v-if="error">{{ error }}</div>

  <div class="md:grid grid-cols-3 place-items-center">
    <div
      v-for="post in latestPosts"
      :key="post.id"
      class="rounded-md box-border w-80 h-80 my-4 bg-green-light p-4 max-sm:w-full"
    >
      <div class="my-2">
        <div>
          <NuxtImg class="w-full h-32 object-cover object-center rounded-md" :src="post.cover_image" />
        </div>
        <p class="text-xs">
          {{ post.author }} . {{ new Date(post.date).toLocaleDateString() }}
        </p>
        
        <div class="text-green-imani font-bold my-2">
          <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>

        </div>
        <div
          class="w-auto h-16 overflow-hidden text-wrap text-sm"
          v-html="post.excerpt2?.substr(0, 75) + '...'"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: posts, error } = await useAsyncData('highlight-posts', () =>
  queryCollection('media')
    .select('title', 'excerpt2', 'cover_image', 'path', 'id', 'date', 'author', 'category')
    .order('date', 'DESC')
    .limit(3)
    .all()
)

const latestPosts = computed(() => posts.value || [])
</script>
