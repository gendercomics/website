<script setup>
import SearchResultFooter from '~/components/SearchResultFooter.vue'
import { useDebounceFn } from '@vueuse/core'

const { locale } = useI18n()
const featureStore = useFeatureStore()

const searchInput = reactive({
  searchTerm: '',
  searchFilter: {
    comics: true,
    persons: true,
    publishers: true,
    keywords: false,
  },
})

let data = {}
const comics = ref([])

const onInput = useDebounceFn(() => {
  if (searchInput.searchTerm.length < 3) {
    console.log('searchterm(' + searchInput.searchTerm + ') to short')
  } else {
    console.log(searchInput.searchTerm)
    search()
  }
}, 500)

async function search() {
  data = await $fetch('http://localhost:8001/search', {
    query: { searchTerm: searchInput.searchTerm },
    method: 'POST',
    onResponse() {
      comics.value = data
      console.log(data)
    },
  })
}

/*
watchDebounced(
  searchInput,
  () => {
    console.log(searchInput.searchTerm)
    search()
  },
  { debounce: 500, maxWait: 1000 },
)
 */
</script>

<template>
  <article-content content="/database" />
  <div class="center page-margin">
    <search-form v-model="searchInput" @input="search" frame />
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
