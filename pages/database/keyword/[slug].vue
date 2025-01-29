<script setup lang="ts">
const route = useRoute()
const searchStore = useSearchStore()
const { locale } = useI18n()

const searchInput = reactive({
  searchTerm: '',
  searchFilter: {
    comics: true,
    persons: true,
    publishers: false,
    keywords: false,
  },
  language: locale.value,
})

function searchDb() {
  console.log('search db for keyword: ' + route.params.slug)
  searchInput.searchTerm = route.params.slug
  searchInput.searchFilter.comics = false
  searchInput.searchFilter.persons = false
  searchInput.searchFilter.publishers = false
  searchInput.searchFilter.keywords = true
  searchStore.setSearchInput(searchInput)
  navigateTo('/' + locale.value + '/database')
}

onMounted(() => {
  console.log('database/keyword:' + route.params.slug)
  searchDb()
})
</script>

<template></template>

<style scoped></style>
