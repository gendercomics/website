<script setup>
const { t } = useI18n({
  useScope: 'local',
})
const filter = defineModel({
  comics: false,
  persons: false,
  publishers: false,
  keywords: false,
})
</script>

<template>
  <div class="flex container-row">
    <div class="mt-1rem">
      <bubble-button
        :label="t('comics')"
        v-model="filter.comics"
        class="pr-1r"
      />
      <bubble-button
        :label="t('persons')"
        v-model="filter.persons"
        class="pr-1r"
      />
      <bubble-button
        :label="t('publisher')"
        v-model="filter.publishers"
        class="pr-1r"
      />
      <bubble-button :label="t('keywords')" v-model="filter.keywords" />
    </div>
  </div>
</template>

<style scoped>
.container-row {
  justify-content: center;
}
</style>

<i18n lang="yaml">
de:
  comics: Comics
  persons: Personen
  publisher: Verlage
  keywords: Schlagwörter
en:
  comics: Comics
  persons: Persons
  publisher: Publisher
  keywords: Keywords
</i18n>
