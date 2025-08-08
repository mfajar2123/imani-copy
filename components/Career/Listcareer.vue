<script setup lang="ts">
const isLoading = ref(true);
const activeIndex = ref<number | null>(null); // Track index yang dibuka

// Ambil data dari collection "career"
const { data: career } = await useAsyncData('all-careers', () =>
  queryCollection('career')
    .select('title', 'body', 'id', 'date')
    .order('date', 'DESC')
    .all()
);

isLoading.value = false;

// Fungsi toggle buka/tutup
const toggleAccordion = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style>
.career ul li {
  list-style-type: decimal;
}
ul.wp-block-list li {
  list-style: decimal;
}
</style>

<template>
  <div>
    <div
      v-for="(item, index) in career"
      :key="item.id"
      class="m-4 space-y-2 drop-shadow-md"
    >
      <div
        class="flex flex-col gap-2 rounded-lg bg-white p-5 text-black"
      >
        <!-- HEADER -->
        <div
          class="flex cursor-pointer items-center justify-between"
          @click="toggleAccordion(index)"
        >
          <span class="text-black font-semibold">
            {{ index + 1 }}. {{ item.title }}
          </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
            class="h-2 w-3 transition-all duration-300"
            :class="{ 'rotate-180': activeIndex === index }"
          />
        </div>

        <!-- CONTENT -->
        <div
          class="transition-all duration-500 overflow-hidden"
          :class="activeIndex === index ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'"
        >
          <div class="text-black p-4 task">
            <ContentRenderer :value="item" />
          </div>
          <div class="text-center mt-10">
            <NuxtLink :to="'/career-apply?ref=' + item.title + '#main-apply'">
              <button
                type="button"
                class="mx-auto p-4 bg-sky-400 rounded-md text-black font-bold"
              >
                Apply this position
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
