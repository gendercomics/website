<script setup>
import SearchResultFooter from '~/components/SearchResultFooter.vue'

const { locale } = useI18n()
const featureStore = useFeatureStore()

const searchInput = reactive({
  searchTerm: '',
  searchFilter: {
    comics: true,
    persons: false,
    publishers: false,
    keywords: false,
  },
})

async function search() {
  return await $fetch('http://localhost:8001/search', {
    query: { searchTerm: searchInput.searchTerm },
    method: 'POST',
  })
}

let { data } = reactive({})

function searchComics() {
  console.log('searchTerm=' + searchInput.searchTerm)
  data = search()
}

onMounted(() => {
  console.log('searchInput=' + JSON.stringify(searchInput))
})
</script>

<template>
  <article-content content="/database" />
  <div class="center page-margin">
    <search-form v-model="searchInput" @input="searchComics()" frame />
    <search-result-header frame />

    <divider b4 b5 t6 />
    <divider-red-arrow />
    <divider-green-corners />

    <search-result v-model="data" />
    <search-result-footer />
  </div>
</template>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
}
</style>
