<script setup lang="ts">
import DividerRedArrow from '~/components/DividerRedArrow.vue'

const { locale } = useI18n()
const index = await useAsyncData('doc', () =>
  queryContent('/' + locale.value + '/blog')
    .where({ type: 'index' })
    .findOne(),
)
</script>

<template>
  <div class="page-margin container">
    <div class="column">
      <content-renderer :value="index" :key="$route.fullPath">
        <div class="titel-xl mt-3rem">{{ index.data.value.title }}</div>
        <content-renderer-markdown class="a" :value="index.data.value.body" />
      </content-renderer>

      <divider-red-arrow />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
