<script setup lang="ts">
import DividerRedArrow from '~/components/DividerRedArrow.vue'
import { useAsyncData } from '#app'

const { locale } = useI18n()
const route = useRoute()
const fullPath = ref(route.fullPath)

const { data: index } = await useAsyncData(fullPath.value, () =>
  queryCollection('content')
    .path('/' + locale.value + '/blog')
    .where('type', '=', 'index')
    .first(),
)
</script>

<template>
  <div class="page-margin container">
    <div class="column">
      <div class="titel-xl mt-3rem">{{ index?.title }}</div>
      <ContentRenderer
        class="a"
        :value="(index?.body ?? {})"
        :key="fullPath.value"
      />

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
