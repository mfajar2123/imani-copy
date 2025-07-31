<script setup lang="ts">
const config = useRuntimeConfig();
const { data, refresh, pending } = await useFetch(config.public.wordpressUrl, {
  method: 'get',
  query: {
    query: `
     query NewQuery {
       careers(first:10){
         nodes {
           id
           title
           content
           uri
         }
       }
     }`
},
transform(data:any){
return data.data.careers.nodes as Array<Record< 'id' | 'title' | 'content' | 'uri', string>>;
}
});

</script>
<style>
.career ul li{
  list-style-type: decimal
}
ul.wp-block-list li{
  list-style: decimal;
}
</style>
<template>
  <div class="">
    <div v-for="(career, index) in data" :key="career.id" class="m-4 space-y-2 drop-shadow-md">
      <div class="group flex flex-col gap-2 rounded-lg bg-white p-5 text-black" :at="'#' + index + 1" :tabindex="index">
        <div class="flex cursor-pointer items-center justify-between">
          <span class="text-black font-semibold"> {{ index + 1 }}. {{ career.title }} </span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180" />
        </div>
        <div
          class="invisible h-auto max-h-0 items-center opacity-0 transition-all font-sserif group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000 max-sm:overflow-scroll">
          <div class="text-black p-4 task" v-html="career.content"></div>
          <div class="text-center mt-10">
            <NuxtLink :to="'/career-apply?ref=' + career.title + '#main-apply'"><button type="button"
                class="mx-auto p-4 bg-sky-400 rounded-md text-black font-bold">
                Apply this position
              </button></NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!-- Accordion Template -->

  </div>
</template>