<script setup>
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div class="container-row w-50 mr--1">
    <green-button :text="t('load-more')" link="#" right-arrow />
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
  load-more: Mehr Ergebnisse laden
en:
  load-more: Load more results
</i18n>
