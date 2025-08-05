<template>
  <div class="flex justify-between items-center py-4 max-sm:flex-1">
    <div class="text-green-imani text-4xl font-bold my-11 max-sm:my-4">Media</div>
    <NuxtLink
      to="/media"
      class="bg-[#A7C4BC] hover:bg-[#98b3ac] text-[#1f1f1f] rounded-full flex items-center py-3 px-4"
    >
      <NuxtImg class="w-4 mr-1" src="/img/company/ic--round-newspaper.png" /> Discover More
    </NuxtLink>
  </div>

  <table class="max-sm:w-full">
    <tbody>
      <tr>
        <td
          :class="[
            'border-b-4 px-4',
            activeTab === 0 ? 'text-teal-800 font-semibold border-teal-800' : 'text-gray-400 hover:text-gray-500 border-gray-400'
          ]"
        >
          <button @click="activeTab = 0">All</button>
        </td>
        <td
          v-for="(category, index) in ['Articles', 'News']"
          :key="category"
          :class="[
            'border-b-4 px-4',
            activeTab === index + 1 ? 'text-teal-800 font-semibold border-teal-800' : 'text-gray-400 hover:text-gray-500 border-gray-400'
          ]"
        >
          <button @click="activeTab = index + 1">{{ category }}</button>
        </td>
        <td class="w-full border-b-4 border-gray-400"></td>
      </tr>
    </tbody>
  </table>

  <div :class="'md:grid justify-items-center' + (isLoading ? ' grid-cols-1' : ' grid-cols-3')">
    <template v-if="isLoading">
      <span class="text-gray-400 mt-8">
        <UIcon name="i-heroicons-arrow-path" class="w-16 h-16 animate-spin" />
      </span>
    </template>
    <template v-else>
      <div
        v-for="post in dataPosts"
        :key="post.id"
        class="rounded-md box-border w-80 h-auto my-4 bg-green-light p-4 max-sm:my-0 max-sm:mt-4 max-sm:w-full"
      >
        <div class="my-2">
          <NuxtImg
            class="w-full h-32 object-cover object-center rounded-md"
            :src="post.cover_image || '/img/logo.png'"
          />
          <div class="text-green-imani font-bold my-2">
            <NuxtLink :href="post.path">{{ post.title }}</NuxtLink>
          </div>
          <div
            class="w-auto h-16 overflow-hidden text-wrap text-sm"
            v-html="post.excerpt2?.substring(0, 100) + '...'"
          ></div>
        </div>
      </div>
    </template>
  </div>
</template>


<script setup lang="ts">
const activeTab = ref(0);
const isLoading = ref(true);

const { data: allPosts } = await useAsyncData('latest-media-posts', () =>
  queryCollection('media')
    .select('title', 'excerpt2', 'cover_image', 'path', 'id', 'date', 'author', 'category')
    .order('date', 'DESC')
    .limit(3)
    .all()
);

const dataPosts = computed(() => {
  if (!allPosts.value) return [];

  if (activeTab.value === 1) {
    return allPosts.value.filter((post) => post.category?.toLowerCase() === 'articles');
  }

  if (activeTab.value === 2) {
    return allPosts.value.filter((post) => post.category?.toLowerCase() === 'news');
  }

  return allPosts.value;
});

isLoading.value = false;

</script>
