<script setup>
const props = defineProps({
  searchInput: {
    type: Object,
    default: {},
  },
})

const { t, locale } = useI18n({
  useScope: 'local',
})
const appConfig = useAppConfig()

let data = {}
async function download() {
  try {
    data = await $fetch(appConfig.dbApiBaseUrl + '/search/download', {
      //query: { searchTerm: searchInput.searchTerm },
      method: 'POST',
      contentType: 'application/json',
      body: {
        searchTerm: props.searchInput.searchTerm,
        searchFilter: props.searchInput.searchFilter,
        language: locale.value,
      },
    })
  } catch (error) {
    console.error('Search request failed:', error)
  }
}
</script>

<template>
  <div class="container-row w-50 mr--1">
    <green-button :text="t('download')" right-arrow @click='download'/>
  </div>
</template>

<style scoped>
.container-row {
  display: flex;
  justify-content: flex-end;
}

.mr--1 {
  margin-right: -1px;
}
</style>

<i18n lang="yaml">
de:
  download: Ergebnisse speichern
en:
  download: Download results
</i18n>
