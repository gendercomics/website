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
const route = useRoute()
const fullPath = ref(route.fullPath)

const i18nPath = computed(() => '/' + locale.value + props.content)
const key = computed(() => 'preview:' + i18nPath.value)

let doc = await useAsyncData(key.value, () =>
  queryContent(i18nPath.value).findOne(),
)

onMounted(() => {
  console.log('TextPreviewBox key: ' + key.value)
})
</script>
<template>
  <div class="container-row">
    <div class="column">
      <div class="w-90">
        <content-renderer :value="doc" :key="key.value">
          <div class="tag">{{ doc.data.value.tag }}</div>
          <div class="titel-kachel">{{ doc.data.value.title }}</div>
          <content-renderer-markdown
            class="a mt-1rem"
            :value="doc.data.value.excerpt"
            :key="key.value"
          />
        </content-renderer>
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
