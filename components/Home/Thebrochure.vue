<template>
  <div class="md:grid grid-cols-3 place-items-center">
    <div
      v-for="(item, index) in latestProducts"
      :key="item.product"
      class="rounded-md box-border w-80 h-80 my-4 bg-green-light p-4 max-sm:w-full"
    >
      <div>
        <NuxtImg class="w-full h-32 object-cover object-center rounded-md" :src="item.cover_image" />
      </div>
      <div class="flex justify-between items-center font-sm">
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
          class="text-green-imani font-bold bg-green-light hover:bg-green-light text-md pl-0"
          @click="openModal(item.product)"
        >
          {{ item.title }}
        </UButton>
      </div>
      <div class="w-auto h-16 overflow-hidden text-wrap text-sm" v-html="item.excerpt.substr(0, 200)">
      </div>

      <!-- Modal -->
      <BrochureDownloadModal
        file_type="brochure"
        v-model="activeModal[item.product]"
        :url="item.url"
        :selected_product="item.product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: brochuresRaw } = await useAsyncData(() =>
  queryCollection('brochure')
    .select('product', 'title', 'excerpt', 'cover_image', 'url', 'date')
    .order('date', 'DESC')
    .limit(3) // hanya ambil 3 data terbaru
    .all()
)

const latestProducts = computed(() => brochuresRaw.value || [])

// Modal state per produk
const activeModal = ref<Record<string, boolean>>({})

function openModal(productKey: string) {
  // Reset semua modal ke false
  Object.keys(activeModal.value).forEach((key) => {
    activeModal.value[key] = false
  })
  // Buka modal yang dipilih
  activeModal.value[productKey] = true
}

// Inisialisasi state modal ketika data pertama kali dimuat
watch(latestProducts, (newProducts) => {
  const modalStates: Record<string, boolean> = {}
  newProducts.forEach((item) => {
    modalStates[item.product] = false
  })
  activeModal.value = modalStates
}, { immediate: true })
</script>
