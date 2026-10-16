<script setup>
defineProps({
  // { tag, title, excerpt, route }
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
        <div class="tag">{{ member?.tag }}</div>
        <div class="titel-kachel">{{ member?.title }}</div>
        <ContentRenderer
          :key="member?.route"
          class="a mt-1rem"
          :value="(member?.excerpt ?? {})"
        />
        <button-gray class="mt-1rem" :text="t('more')" :link="member?.route" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-row {
  display: flex;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
}

.a strong {
  font-weight: var(--gc-font-weight-600);
}
</style>

<i18n lang="yaml">
de:
  more: Mehr erfahren
en:
  more: Learn more
</i18n>
