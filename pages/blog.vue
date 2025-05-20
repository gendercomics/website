<script setup lang="ts">
import DividerRedArrow from '~/components/DividerRedArrow.vue'

const { locale } = useI18n()
const route = useRoute()
const fullPath = ref(route.fullPath)
const contentPath = computed(() => '/' + locale.value + '/blog')
</script>

<template>
  <div class="page-margin container">
    <div class="column">
      <ContentDisplay :path="contentPath">
        <template #default="{ doc }">
          <div class="titel-xl mt-3rem">{{ doc.title }}</div>
          <ContentRendererMarkdown
            class="a"
            :value="doc.body"
          />
        </template>
      </ContentDisplay>

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
