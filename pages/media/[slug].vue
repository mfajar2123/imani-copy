<template>
  <div class="article">
    <ArticleTheheader />

    <div class="container w-10/12 p-4 mx-auto mb-16">
      <div v-if="post">
        <div class="flex flex-wrap justify-between items-center">
          <div>
            <h1 class="text-4xl font-bold mt-16">{{ post.title }}</h1>
            <p class="mb-16 text-xs">
             publish: {{ formatDate(post.date) }} • {{ post.category }}
            </p>
          </div>
          <div class="flex">
            <NuxtLink
              to="/media"
              class="bg-[#A7C4BC] hover:bg-[#98b3ac] text-[#1f1f1f] rounded-full flex items-center py-3 px-4"
            >
              <NuxtImg class="w-4 mr-1" src="/img/company/ic--round-newspaper.png" />
              Discover More
            </NuxtLink>
          </div>
        </div>

        <div class="prose max-w-none text-black text-justify">
          <ContentRenderer :value="post" />
        </div>
      </div>

      <div v-else class="text-center text-gray-500 py-12">
        Loading...
      </div>
    </div>

    <CareerThefooter />
  </div>
</template>



<script setup lang="ts">
const route = useRoute()

const pageId = computed(() => 'media-' + route.path)
// console.log('route.path', route.path)
const { data: post } = await useAsyncData(pageId, () => {
  return queryCollection('media').path(route.path).first()
})

// console.log('post.value', post.value)
useSeoMeta({
  title: post.value?.title || 'Media Detail - Imani Prima',
  ogTitle: post.value?.title,
  description: post.value?.excerpt2,
  ogDescription: post.value?.excerpt2,
  ogImage: post.value?.cover_image,
})

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Date(dateString).toLocaleDateString('id-ID', options)
}

definePageMeta({
  colorMode: 'light',
})
</script>



<style scoped>
.prose :deep(img) {
  max-width: 100%;
  border-radius: 12px;
}
</style>
