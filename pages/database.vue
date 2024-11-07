<script setup>
import SearchResultFooter from '~/components/SearchResultFooter.vue'
import { useDebounceFn } from '@vueuse/core'

const { locale } = useI18n()
const searchStore = useSearchStore()
const appConfig = useAppConfig()

const searchInput = reactive({
  searchTerm: '',
  searchFilter: {
    comics: true,
    persons: true,
    publishers: false,
    keywords: false,
  },
  language: 'de',
})

let data = {}
const comics = ref([])

const resultSize = computed(() => {
  return comics.value.length
})

// Debounced input handler
const onInput = useDebounceFn(() => {
  if (searchInput.searchTerm.length < 3) {
    console.log('search term (' + searchInput.searchTerm + ') too short')
  } else {
    console.log('Searching for:', searchInput.searchTerm)
    searchStore.setSearchInput(searchInput)
    search()
  }
}, 500)

async function search() {
  try {
    data = await $fetch(appConfig.dbApiBaseUrl + '/search-web', {
      //query: { searchTerm: searchInput.searchTerm },
      method: 'POST',
      contentType: 'application/json',
      body: {
        searchTerm: searchInput.searchTerm,
        searchFilter: searchInput.searchFilter,
        language: locale.value,
      },
    })
    // Update the comics list with the fetched data
    comics.value = data
    console.log('Search result:', comics.value)
  } catch (error) {
    console.error('Search request failed:', error)
  }
}

function resetSearchResult() {
  comics.value = []
  searchStore.setSearchInput(null)
}

watch(searchInput.searchFilter, () => {
  console.log('searchFilter changed')
  searchStore.setSearchInput(searchInput)
  if (searchInput.searchTerm.length >= 3) {
    search()
  }
})

onMounted(() => {
  console.log('API base url: ' + appConfig.dbApiBaseUrl)
  console.log(
    'stored searchInput: ' + JSON.stringify(searchStore.getSearchInput),
  )
  if (searchStore.getSearchInput !== null) {
    navigateTo('#search')
    searchInput.searchTerm = searchStore.getSearchInput.searchTerm
    searchInput.searchFilter = searchStore.getSearchInput.searchFilter
    search()
  }
})
</script>

<template>
  <article-content content="/database" />
  <div class="center page-margin">
    <search-form
      id="search"
      v-model="searchInput"
      @input="onInput"
      @clear="resetSearchResult"
      frame
    />
    <search-result-header :num-results="resultSize" frame />

    <divider b4 b5 t6 />
    <divider-red-arrow />
    <divider-green-corners />

    <search-result v-model="comics" />

    <search-result-footer v-if="resultSize > 0" />
  </div>
</template>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
}
</style>
