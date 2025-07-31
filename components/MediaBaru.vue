<template>
  <table class="w-full">
    <tbody>
      <tr class="border-b-4 border-teal-800">
        <td
          :class="[
            'w-[10%] text-center px-3 max-sm:w-full',
            activeTab === 0 ? ' bg-teal-800 rounded-t-md text-white' : ' text-gray-600',
          ]"
        >
          <button @click="activeTab = 0">All</button>
        </td>
        <td
          :class="[
            'w-[10%] text-center px-3 max-sm:w-full',
            activeTab === 1 ? ' bg-teal-800 rounded-t-md text-white' : ' text-gray-600',
          ]"
        >
          <button @click="activeTab = 1">Articles</button>
        </td>
        <td
          :class="[
            'w-[10%] text-center px-3 max-sm:w-full',
            activeTab === 2 ? ' bg-teal-800 rounded-t-md text-white' : ' text-gray-600',
          ]"
        >
          <button @click="activeTab = 2">News</button>
        </td>
        <td class="w-full"></td>
      </tr>
    </tbody>
  </table>

  <div class="md:grid grid-cols-1 gap-2 h-3/4 overflow-y-scroll media">
    <template v-if="isLoading">
      <span class="text-center text-gray-400 mt-8">
        <UIcon name="i-heroicons-arrow-path" class="w-16 h-16 animate-spin" />
      </span>
    </template>

    <template v-else>
      <template v-if="activeTab === 0">
        <PostCard v-for="post in posts" :key="post.id" :post="post" />
      </template>

      <template v-if="activeTab === 1">
        <PostCard v-for="post in dataArticles" :key="post.id" :post="post" />
      </template>

      <template v-if="activeTab === 2">
        <PostCard v-for="post in dataNews" :key="post.id" :post="post" />
      </template>
    </template>
  </div>
</template>


<script setup lang="ts">
const activeTab = ref(0);
const isLoading = ref(true);

// Ambil semua post dari collection "blog"
const { data: posts } = await useAsyncData('all-posts', () =>
  queryCollection('blog')
    .select('title', 'excerpt2', 'cover_image', 'path', 'id', 'date', 'author', 'category')
    .order('date', 'DESC')
    .all()
);

console.log(posts.value);
isLoading.value = false;

// Data tab artikel dan news berdasarkan kategori
const dataArticles = computed(() =>
  posts.value?.filter((post) => post.category?.toLowerCase() === 'articles')
);

const dataNews = computed(() =>
  posts.value?.filter((post) => post.category?.toLowerCase() === 'news')
);

</script>
