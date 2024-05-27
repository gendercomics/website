<script setup>
import SearchInput from '~/components/SearchInput.vue'

const searchInput = defineModel({
  searchString: '',
  searchFilter: {
    comics: true,
    persons: false,
    publishers: false,
    keywords: false,
  },
})
</script>

<template>
  <div>
    <divider b1green b2 b3flat b4flat b5 t6 class="mt-30" />
    <search-filter class="buttons" v-model="searchInput.searchFilter" />
    <search-input v-model="searchInput.searchString" />
  </div>
</template>

<style scoped>
.buttons {
  margin-top: -134px;
  margin-bottom: 14px;
}
</style>
