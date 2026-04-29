<script setup>
const props = defineProps({
  content: {
    type: String,
    default: '',
  },
})
const { t } = useI18n({
  useScope: 'local',
})
const { locale } = useI18n()

const i18nPath = computed(() => '/' + locale.value + props.content)
const key = computed(() => 'preview:' + i18nPath.value)

const { data: doc } = await useAsyncData(key.value, () => {
  return queryCollection('content').path(i18nPath.value).first()
})

onMounted(() => {
  console.log('TextPreviewBox key: ' + key.value)
})
</script>
<template>
  <div class="container-row">
    <div class="column">
      <div class="w-90">
        <div>
          <div class="tag">{{ doc?.tag }}</div>
          <div class="titel-kachel">{{ doc?.title }}</div>
          <ContentRenderer
            :key="doc?.id"
            :value="(doc?.excerpt ?? {})"
            class="a mt-1rem"
          />
        </div>

        <button-gray class="mt-1rem" :text="t('more')" :link="i18nPath" />
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
