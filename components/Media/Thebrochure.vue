<template>
  <div class="flex flex-wrap gap-4 items-center">
    <button class="bg-red-800 p-2 text-white rounded-md" @click="resetFilter">Reset Filter</button>
    <div v-for="cat in category" :key="cat.id">
      <label class="cursor-pointer flex">
        <input class="mr-2" type="checkbox" :value="cat.id" v-model="filterBrochure" />
        <span>{{ cat.cat }}</span>
      </label>
    </div>
  </div>

  <div class="block gap-4 max-sm:grid-cols-1">
    <div
      v-for="(item, index) in filteredProduct"
      :key="`${item.product}-${index}`"
      class="w-auto p-1 mx-auto overflow-hidden float-left"
    >
      <div class="rounded-md box-border w-80 h-96 my-4 bg-green-light p-4 max-sm:w-full max-sm:p-4">
        <div class="my-2">
          <NuxtImg class="w-full h-32 object-cover object-center rounded-md" :src="item.src" />
          <div class="flex justify-between items-center font-sm mt-2">
            <UButton
              variant="ghost"
              icon="ic:baseline-download"
              trailing
              size="sm"
              class="text-teal-950 hover:bg-gray-100"
              @click="openModal(item.product)"
            >
              Download
            </UButton>
            <p class="text-teal-950 text-sm font-bold pr-2">Brochure</p>
          </div>
          <div class="text-green-imani font-bold my-2">
            <UButton
              class="text-left text-green-imani font-bold bg-green-light hover:bg-green-light text-md pl-0"
              @click="openModal(item.product)"
            >
              {{ item.title }}
            </UButton>
          </div>
          <div class="w-auto h-16 overflow-hidden text-wrap text-sm" v-html="item.excerpt.substr(0, 100) + '...'"></div>
        </div>
      </div>

      <!-- Modal satu per item -->
      <BrochureDownloadModal
        file_type="brochure"
        :url="item.url"
        :selected_product="item.product"
        v-model="activeModal[item.product]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const filterBrochure = ref<number[]>([])
const category = [
  { id: 1, cat: 'Internet of Things' },
  { id: 2, cat: 'Artificial Intelligence' },
  { id: 3, cat: 'Others' },
]

const { data: brochuresRaw } = await useAsyncData(() =>
  queryCollection('brochure')
    .select('product', 'title', 'excerpt', 'cover_image', 'url', 'cat')
    .all()
)

console.log('Raw brochures data:', brochuresRaw.value);

const baseProduct = computed(() =>
  (brochuresRaw.value || []).map((item) => ({
    ...item,
    src: item.cover_image,
  }))
)

// Gunakan object untuk modal state agar lebih reliable
const activeModal = ref<Record<string, boolean>>({})

const filteredProduct = computed(() => {
  const filtered = filterBrochure.value.length > 0
    ? baseProduct.value.filter((item) => {
        // Convert cat to number untuk comparison
        const itemCat = typeof item.cat === 'string' ? parseInt(item.cat) : item.cat
        return filterBrochure.value.includes(itemCat)
      })
    : baseProduct.value
  
  // console.log('Filtered products:', filtered);
  // console.log('Current filter:', filterBrochure.value);
  // console.log('Item cats:', baseProduct.value.map(item => ({ product: item.product, cat: item.cat, type: typeof item.cat })));
  
  return filtered
})

function openModal(productKey: string) {
  // Reset semua modal ke false
  Object.keys(activeModal.value).forEach(key => {
    activeModal.value[key] = false
  })
  // Buka modal yang dipilih
  activeModal.value[productKey] = true
}

function resetFilter() {
  filterBrochure.value = []
}

// Initialize modal states ketika data berubah
watch(baseProduct, (newProducts) => {
  const modalStates: Record<string, boolean> = {}
  newProducts.forEach(item => {
    modalStates[item.product] = false
  })
  activeModal.value = modalStates
}, { immediate: true })

// Debug watcher untuk melihat perubahan filter
watch(filterBrochure, (newFilter, oldFilter) => {
  console.log('Filter changed from:', oldFilter, 'to:', newFilter)
}, { deep: true })
</script>