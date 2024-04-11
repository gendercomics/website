<script setup>
import SearchForm from '~/components/SearchForm.vue'
import SearchResult from '~/components/SearchResult.vue'
</script>

<template>
  <div class="container-row page-margin">
    <search-form />
    <search-result-header />
    <search-result />
  </div>
</template>

<style scoped></style>
