<template>
  <NuxtPage />
</template>

<script setup>
const route = useRoute();

watchEffect(()=>{
  
})
const pathHead = computed(()=>{
  return route.path.split("/")[1].toUpperCase();
});

useHead({
  title: `${pathHead.value} - PT. Imani Prima`,
});

useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});
</script>

