<script setup>
import SearchResultFooter from '~/components/SearchResultFooter.vue'
import { useDebounceFn } from '@vueuse/core'
import { useAsyncData } from '#app'
import { track } from 'insights-js'

const { locale } = useI18n()
const searchStore = useSearchStore()
const appConfig = useAppConfig()

const route = useRoute()

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
  } finally {
    track({ id: 'database-search', parameters: { searchInput: searchInput } })
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

function setSearchStoreForKeyword() {
  console.log('setSearchStoreForKeyword: ' + route.query.keyword)
  searchInput.searchTerm = route.query.keyword
  searchInput.searchFilter.comics = false
  searchInput.searchFilter.persons = false
  searchInput.searchFilter.publishers = false
  searchInput.searchFilter.keywords = true

  searchStore.setSearchInput(searchInput)
}

let faq = await useAsyncData('db-faq-' + locale.value, () =>
  queryContent('/' + locale.value + '/database')
    .where({ type: 'faq' })
    .findOne(),
)

onMounted(() => {
  console.log('onMounted route.query: ' + route.query.keyword)
  if (route.query.keyword) {
    setSearchStoreForKeyword()
  }

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

    <search-result-footer v-if="resultSize > 0" :search-input="searchInput" />

    <!-- FAQs -->
    <divider b1green b2 t3 t4 b5 b6 />
    <div class="border-green-left-right">
      <content-renderer :value="faq">
        <content-renderer-markdown class="a" :value="faq.data.value.body" />
      </content-renderer>
    </div>
    <divider t1 b2 b3 b4 b5 t6 />
    <!-- FAQs end -->
  </div>
</template>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
}
</style>
