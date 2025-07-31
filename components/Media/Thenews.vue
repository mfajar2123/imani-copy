<template>
  <table class="w-full">
    <tbody>
      <tr class="border-b-4 border-teal-800">
        <td
          :class="
            'w-[10%] text-center px-3 max-sm:w-full' +
            (activeTab === 0 ? ' bg-teal-800 rounded-t-md text-white' : ' text-gray-600')
          "
        >
          <button @click="activeTab = 0">All</button>
        </td>
        <td
          :class="
            'w-[10%] text-center px-3 max-sm:w-full' +
            (activeTab === 1 ? ' bg-teal-800 rounded-t-md text-white' : ' text-gray-600')
          "
        >
          <button @click="activeTab = 1">Articles</button>
        </td>
        <td
          :class="
            'w-[10%] text-center px-3 max-sm:w-full' +
            (activeTab === 2 ? ' bg-teal-800 rounded-t-md text-white' : ' text-gray-600')
          "
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
        <div v-for="post in allPosts" class="rounded-md box-border my-4 bg-green-light">
          <!-- {{ post }} -->
          <div class="">
            <div class="bg-teal-800">
              <NuxtImg
                class="w-3/12 h-40 float-left mr-5 object-cover object-center rounded-md bg-teal-800 max-sm:float-none max-sm:w-full max-sm:rounded-none"
                :src="post.img"
              />
            </div>
            <div class="text-green-imani font-bold pt-4 px-2">
              <NuxtLink :href="'/media/' + post.slug">{{ post.title }}</NuxtLink>
            </div>
            <div class="w-auto text-wrap text-xs px-4" v-html="post.excerpt"></div>
          </div>
        </div>
      </template>
      <template v-if="activeTab === 1">
        <div v-for="post in dataArticles" class="rounded-md box-border my-4 bg-green-light">
          <!-- {{ post }} -->
          <div class="">
            <div class="bg-teal-800">
              <NuxtImg
                class="w-3/12 h-40 float-left mr-5 object-cover object-center rounded-md bg-teal-800 max-sm:float-none max-sm:w-full max-sm:rounded-none"
                :src="post.img"
              />
            </div>
            <div class="text-green-imani font-bold pt-4 px-2">
              <NuxtLink :href="'/media/' + post.slug">{{ post.title }}</NuxtLink>
            </div>
            <div class="w-auto text-wrap text-xs px-4" v-html="post.excerpt"></div>
          </div>
        </div>
      </template>
      <template v-if="activeTab === 2">
        <div v-for="post in dataNews" class="rounded-md box-border my-4 bg-green-light">
          <!-- {{ post }} -->
          <div class="">
            <div class="bg-teal-800">
              <NuxtImg
                class="w-3/12 h-40 float-left mr-5 object-cover object-center rounded-md bg-teal-800 max-sm:float-none max-sm:w-full max-sm:rounded-none"
                :src="post.img"
              />
            </div>
            <div class="text-green-imani font-bold pt-4 px-2">
              <NuxtLink :href="'/media/' + post.slug">{{ post.title }}</NuxtLink>
            </div>
            <div class="w-auto text-wrap text-xs px-4" v-html="post.excerpt"></div>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const isLoading = ref(false);
const activeTab = ref(0);

const { data: idArticle }: any = await useFetch(config.public.restUrl + '/categories', {
  method: 'get',
  query: {
    slug: 'articles',
  },
});

const { data: idNews }: any = await useFetch(config.public.restUrl + '/categories', {
  method: 'get',
  query: {
    slug: 'news',
  },
});

const { data: allPosts } = await useFetch(config.public.restUrl + '/posts', {
  method: 'get',
  query: {
    _embed: true,
  },
  transform: (data: any[]) => {
    return data.map((node: any) => {
      return {
        slug: node.slug,
        title: node.title.rendered,
        img: node['_embedded']['wp:featuredmedia'][0].source_url || '',
        excerpt: node.excerpt.rendered || '',
        categories: node.categories || [],
      };
    });
  },
});

const dataArticles = computed(() => {
  return allPosts.value?.filter((post) => post.categories.includes(idArticle.value[0].id));
});

const dataNews = computed(() => {
  return allPosts.value?.filter((post) => post.categories.includes(idNews.value[0].id));
});
</script>
