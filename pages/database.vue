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
const searchResult = reactive({})
</script>

<template>
  <div class="container-row page-margin">
    <search-form v-model="searchInput" />
    <search-result-header />
    <search-result />
  </div>
</template>

<style scoped></style>
