<script setup>
const props = defineProps({
  content: {
    type: String,
    default: '',
  },
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
  <content-preview
    :member="{
      tag: doc?.tag,
      title: doc?.title,
      excerpt: doc?.excerpt,
      route: i18nPath,
    }"
  />
</template>
