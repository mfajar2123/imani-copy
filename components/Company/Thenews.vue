<template>
  <!-- <div class="w-full bg-teal-900">
    {{ percobaanAllPosts }}
  </div> -->
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
          :class="
            'border-b-4 px-4' +
            (activeTab === 0
              ? ' text-teal-800 font-semibold border-teal-800'
              : ' text-gray-400 hover:text-gray-500 border-gray-400')
          "
        >
          <button @click="filterPosts('', 0)">All</button>
        </td>
        <td
          :class="
            'border-b-4 px-4' +
            (activeTab === index + 1
              ? ' text-teal-800 font-semibold border-teal-800'
              : ' text-gray-400 hover:text-gray-500 border-gray-400')
          "
          v-for="(category, index) in getCategories"
        >
          <button @click="filterPosts(category.id, index + 1)">
            {{ category.name }}
          </button>
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
        class="rounded-md box-border w-80 h-auto my-4 bg-green-light p-4 max-sm:my-0 max-sm:mt-4 max-sm:w-full"
      >
        <div class="my-2">
          <div class="">
            <NuxtImg class="w-full h-32 object-cover object-center rounded-md" :src="post.img" />
          </div>
          <div class="text-green-imani font-bold my-2">
            <NuxtLink :href="'/media' + post.uri">{{ post.title }} </NuxtLink>
          </div>
          <div
            class="w-auto h-16 overflow-hidden text-wrap text-sm"
            v-html="post.excerpt.substr(3, 100) + '...'"
          ></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const isLoading = ref(true);
const activeTab = ref(0);

const { data: getCategories } = await useFetch(config.public.wordpressUrl, {
  method: 'get',
  query: {
    query: `query MyQuery2 {
                    categories {
                        nodes {
                        id
                        name
                        }
                    }
                }
                `,
  },
  transform: (data: any) => {
    return data.data.categories.nodes.filter(
      (node: any) => node.name === 'Articles' || node.name === 'News'
    );
  },
});

const { data: percobaanAllPosts } = await useFetch<any>(config.public.wordpressUrl, {
  method: 'GET',
  query: {
    query: `
            query NewQuery {
                    posts {
                        nodes {
                            title
                            excerpt
                            uri
                            date
                            categories {
                                nodes {
                                id
                                name
                                }
                            }
                            featuredImage {
                                node {
                                sourceUrl
                                }
                            }
                        }
                    }
                }
            `,
  },
  transform: (data: any) => {
    return data.data.posts.nodes.map((node: any) => {
      const img = node.featuredImage ? node.featuredImage.node.sourceUrl : '/img/logo.png';
      return { ...node, img };
    });
  },
});

let dataPosts = ref();

const filterPosts = (postsId = '', index = 0) => {
  isLoading.value = true;
  activeTab.value = index;
  if (postsId !== '') {
    dataPosts.value = percobaanAllPosts.value
      .filter((post: any) => post.categories.nodes.some((node: any) => node.id === postsId))
      .slice(0, 3);
    isLoading.value = false;
    return;
  }

  dataPosts.value = percobaanAllPosts.value.slice(0, 3);
  isLoading.value = false;
};

onMounted(async () => {
  isLoading.value = true;
  filterPosts();
  isLoading.value = false;
});
</script>
