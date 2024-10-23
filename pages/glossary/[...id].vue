<script setup lang="ts">
import DividerRedArrow from '~/components/DividerRedArrow.vue'
import { useAsyncData } from '#app'

const { locale } = useI18n()
const route = useRoute()
const fullPath = ref(route.fullPath)
const keywordId = route.params.id

const index = await useAsyncData(fullPath.value, () =>
  queryContent('/' + locale.value + '/glossary')
    .where({ type: 'index' })
    .findOne(),
)
</script>

<template>
  <div class="page-margin container">
    <div class="column">
      <content-renderer :value="index" :key="fullPath.value">
        <div class="titel-xl mt-3rem">{{ index.data.value.title }}</div>
        <content-renderer-markdown
          class="a"
          :value="index.data.value.body"
          :key="fullPath.value"
        />
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
