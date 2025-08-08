<script setup lang="ts">
const isLoading = ref(true);
const activeIndex = ref<number | null>(null);

const { data: career } = await useAsyncData("all-careers", () =>
  queryCollection("career")
    .select("title", "body", "id", "date")
    .order("date", "DESC")
    .all()
);

isLoading.value = false;

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
.prose strong {
  font-weight: 700 !important;
  color: #000 !important;
}
.prose p {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
  line-height: 1;
}
.prose ol {
  list-style-type: decimal;

  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.prose ul {
  list-style-type: disc;
  
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.prose li {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.prose {
  max-width: none !important;
}


</style>

<template>
  <div>
    <div
      v-for="(item, index) in career"
      :key="item.id"
      class="m-4 space-y-2 drop-shadow-md"
    >
      <div class="flex flex-col gap-2 rounded-lg bg-white p-5 text-black">
       
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

       
        <div
          class="transition-all duration-500 overflow-hidden"
          :class="
            activeIndex === index
              ? 'max-h-screen opacity-100 mt-4'
              : 'max-h-0 opacity-0'
          "
        >
          <ContentRenderer
            :value="item"
            class="prose prose-li:marker:text-black prose-ol:list-decimal prose-ul:list-disc prose-ol:pl-6 prose-ul:pl-6 text-black task"
          />

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
