<script setup lang="ts">
import SearchInput from '~/components/SearchInput.vue'
import SearchResultHeader from '~/components/SearchResultHeader.vue'
const searchString = ref('')
</script>

<template>
  <div>
    <divider b1green b2 b3flat b4flat b5 t6 class="mt-30" />
    <search-filter class="buttons" />
    <search-input v-model="searchString" />
    <search-result-header />
  </div>
</template>

<style scoped>
.buttons {
  margin-top: -134px;
  margin-bottom: 14px;
}
</style>
