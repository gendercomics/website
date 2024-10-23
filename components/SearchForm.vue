<script setup>
import SearchInput from '~/components/SearchInput.vue'

const emit = defineEmits(['clear'])
const props = defineProps({
  frame: {
    type: Boolean,
    default: false,
  },
})

const searchInput = defineModel({
  searchTerm: '',
  searchFilter: {
    comics: false,
    persons: false,
    publishers: false,
    keywords: false,
  },
})

function clear() {
  emit('clear')
}
</script>

<template>
  <div>
    <divider v-if="props.frame" b1 b2 t3 t4 b5 b6 />
    <divider v-else b1green b2 b3flat b4flat b5 t6 class="mt-30" />
    <search-filter
      class="border-green-left-right"
      :class="{ 'margin-top': !frame }"
      v-model="searchInput.searchFilter"
    />
    <search-input
      v-model="searchInput.searchTerm"
      :class="{ 'border-right-green': props.frame }"
      @clear="clear"
    />
  </div>
</template>

<style scoped>
.margin-top {
  margin-top: -134px;
}
</style>
