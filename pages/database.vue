<script setup>
import SearchForm from '~/components/SearchForm.vue'
import SearchResult from '~/components/SearchResult.vue'

const searchInput = reactive({
  searchString: '',
  searchFilter: {
    comics: true,
    persons: false,
    publishers: false,
    keywords: false,
  },
})

async function searchComics() {
  console.log('searchString=' + searchInput.searchString)
  const searchResult = await $fetch('http://localhost:8001/search', {
    method: 'POST',
    body: {
      searchTerm: searchInput.searchString,
    },
  })
  console.log(searchResult.data)
}
</script>

<template>
  <div class="container-row page-margin">
    <search-form v-model="searchInput" @input="searchComics()" />
    <search-result-header />
    <search-result />
  </div>
</template>

<style scoped></style>
