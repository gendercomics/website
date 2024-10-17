<script setup>
import SearchResultFooter from '~/components/SearchResultFooter.vue'
import { useDebounceFn } from '@vueuse/core'

const { locale } = useI18n()
const featureStore = useFeatureStore()
const searchStore = useSearchStore()
const appConfig = useAppConfig()

const searchInput = reactive({
  searchTerm: '',
  searchFilter: {
    comics: false,
    persons: false,
    publishers: false,
    keywords: false,
  },
})

let data = {}
const comics = ref([])

// Debounced input handler
const onInput = useDebounceFn(() => {
  if (searchInput.searchTerm.length < 3) {
    console.log('search term (' + searchInput.searchTerm + ') too short')
  } else {
    console.log('Searching for:', searchInput.searchTerm)
    search()
  }
}, 500)

async function search() {
  try {
    data = await $fetch(appConfig.dbApiBaseUrl + '/search', {
      query: { searchTerm: searchInput.searchTerm },
      method: 'POST',
    })

    // Update the comics list with the fetched data
    comics.value = data
    console.log('Search result:', comics.value)
  } catch (error) {
    console.error('Search request failed:', error)
  }
}

onMounted(() => {
  console.log('API base url: ' + appConfig.dbApiBaseUrl)
  //searchInput = searchStore.getSearchInput.value
})
</script>

<template>
  <article-content content="/database" />
  <div class="center page-margin">
    <search-form v-model="searchInput" @input="onInput" frame />
    <search-result-header frame />

    <divider b4 b5 t6 />
    <divider-red-arrow />
    <divider-green-corners />

    <search-result v-model="comics" />

    <search-result-footer />
  </div>
</template>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
}
</style>
