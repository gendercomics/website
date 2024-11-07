<script setup>
const props = defineProps({
  searchInput: {
    type: Object,
    default: {},
  },
})

const { t } = useI18n({
  useScope: 'local',
})
const appConfig = useAppConfig()

async function download() {
  try {
    const response = await $fetch(appConfig.dbApiBaseUrl + '/search/download', {
      //query: { searchTerm: searchInput.searchTerm },
      method: 'POST',
      contentType: 'application/json',
      body: {
        searchTerm: props.searchInput.searchTerm,
        searchFilter: props.searchInput.searchFilter,
        language: props.searchInput.language,
      },
      responseType: 'blob',
    })

    // Create a blob from the response data
    const blob = new Blob([response], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)

    // Create a temporary link and click it to initiate the download
    const link = document.createElement('a')
    link.href = url
    link.download = `comics-${props.searchInput.searchTerm}.txt`
    document.body.appendChild(link)
    link.click()

    // Clean up the temporary URL and link
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Search request failed:', error)
  }
}
</script>

<template>
  <div class="container-row w-50">
    <green-button
      :text="t('download')"
      right-arrow
      @click="download"
      class="mt-1rem mb-21px mr-1px"
    />
  </div>
</template>

<style scoped>
.container-row {
  display: flex;
  justify-content: flex-end;
}

.mb-21px {
  margin-bottom: 21px;
}

.mr-1px {
  margin-right: 1px;
}
</style>

<i18n lang="yaml">
de:
  download: Download Ergebnisse
en:
  download: Download results
</i18n>
