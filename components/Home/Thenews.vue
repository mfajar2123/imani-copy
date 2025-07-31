<template>
  <div class="flex justify-between items-center my-8 max-sm:flex-row">
    <h2 class="text-green-imani font-bold text-3xl">Highlights</h2>
    <NuxtLink
      to="/media"
      class="bg-[#A7C4BC] hover:bg-[#98b3ac] text-[#1f1f1f] rounded-full flex items-center py-3 px-4"
    >
      <NuxtImg class="w-4 mr-1" src="/img/company/ic--round-newspaper.png" /> Discover More
    </NuxtLink>
  </div>
  <div v-if="error">{{ error }}</div>
  <div class="md:grid grid-cols-3 place-items-center">
    <div v-for="post in data" class="rounded-md box-border w-80 h-80 my-4 bg-green-light p-4 max-sm:w-full">
        <div class="my-2">
          <div class=""><NuxtImg class="w-full h-32 object-cover object-center rounded-md" :src=post.img /></div>
          <p class="text-xs">{{  post.author }} . {{ new Date(post.date).toLocaleDateString() }}</p>
          <p class="">{{ post.category }}</p>
          <div class="text-green-imani font-bold my-2"><NuxtLink :href="'media'+ post.uri">{{ post.title }} </NuxtLink></div>
          <div class="w-auto h-16 overflow-hidden text-wrap text-sm" v-html="post.excerpt.substr(3,100)+ '...'"></div>
        </div>
      </div>
    </div>
    </template>

    <script setup lang="ts">
    const config = useRuntimeConfig();
    const { data, error } = await useFetch(config.public.wordpressUrl, {
     method: 'get',
     query: {
       query: `
         query NewQuery {
           posts (first: 3) {
                nodes {
                     title
                     excerpt
                     uri
                     date
                     featuredImage{
                        node{
                            sourceUrl
                        }
                    }
        categories {
        nodes {
          name
        }
      }
        author {
        node {
          name
        }
      }  
        }
      }
         }`
    },
    transform ( data:any ){
    return data.data?.posts.nodes.map((node:any) => {const img = node.featuredImage?.node.sourceUrl; const category = node.categories?.nodes.name; const author = node.author?.node.name;  return{ ...node, img, author, category}}) as Array<Record< 'title' | 'content' | 'uri' | 'date' | 'excerpt' | 'img' | 'author' | 'category', string>>;
    }
    })
    </script>