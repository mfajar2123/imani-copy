<template>
    <div class="article">
      <ArticleTheheader />
      <div class="container w-10/12 p-4 mx-auto mb-16">
        <div class="flex flex-wrap justify-between items-center">
        <div><h1 class="text-4xl font-bold mt-16">{{ newData[0].title.rendered }}</h1>
        <p class="mb-16 text-xs">
          <!--Author: {{ newData[0].yoast_head_json.author }},--> publish:
          {{ new Date(newData[0].date).toLocaleDateString() }}
        </p></div>
        <div class="flex"><NuxtLink
      to="/media"
      class="bg-[#A7C4BC] hover:bg-[#98b3ac] text-[#1f1f1f] rounded-full flex items-center py-3 px-4"
    >
      <NuxtImg class="w-4 mr-1" src="/img/company/ic--round-newspaper.png" /> Discover More
    </NuxtLink></div>
      </div>
        <div class="text-justify text-wrap truncate" v-html="newData[0].content.rendered"></div>
      </div>
      <Thefooter />
    </div>
  </template>
  
  <script setup>
  const config = useRuntimeConfig();
  const route = useRoute();
  const { data: newData } = await useFetch(config.public.restUrl + '/posts', {
    method: 'get',
    query: {
      slug: route.params.uri,
    },
  });
  useSeoMeta({
    title: newData.value[0].title.rendered + ' - Imani Prima'
  })
  definePageMeta({
    colorMode: 'light',
  });
  </script>
  