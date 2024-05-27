<script setup>
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
}
</script>

<template>
  <div class="center page-margin">
    <search-form v-model="searchInput" @input="searchComics()" />
    <search-result-header />
    <search-result />
  </div>
</template>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
}
</style>
