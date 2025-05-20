<script setup>
const props = defineProps({
  member: {
    type: Object,
    default: () => ({}),
  },
})

const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div class="container-row">
    <div class="column">
      <div class="w-90">
        <ContentRenderer :value="member" :key="$route.fullPath">
          <div class="tag">{{ member.tag }}</div>
          <div class="titel-kachel">{{ member.title }}</div>
          <ContentRendererMarkdown
            class="a mt-1rem"
            :value="member"
            excerpt
          />
        </ContentRenderer>
        <button-gray class="mt-1rem" :text="t('more')" :link="member.route" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.a strong {
  font-weight: var(--gc-font-weight-600);
}

.column {
  display: flex;
  flex-direction: column;
}

.mt-1rem {
  margin-top: 1rem;
}
</style>

<i18n lang="yaml">
de:
  more: Mehr erfahren
en:
  more: Learn more
</i18n>
