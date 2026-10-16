<script setup lang="ts">
import { useAsyncData } from '#app'

const props = defineProps({
  content: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: '_self',
  },
})
const { locale } = useI18n()
const route = useRoute()
const fullPath = ref(route.fullPath)

const i18nPath = computed(() => {
  if (locale.value === 'en' && props.content.startsWith('/en')) {
    return props.content
  }

  return '/' + locale.value + props.content
})

async function fetchContent() {
  return (
    await queryCollection('content').path(i18nPath.value).first() ??
    await queryCollection('content').path(props.content).first()
  )
}

const { data: doc } = await useAsyncData(fullPath.value, () => fetchContent())

watch(
  () => fullPath.value,
  async () => {
    console.log('ArticleContent watch: ' + fullPath.value)
    doc.value = await fetchContent()
  },
)

onMounted(() => {
  console.log('ArticleContent fullPath: ' + fullPath.value)
})
</script>

<template>
  <content-frame>
    <template #header>
      <div v-if="doc?.title" class="titel-xl mt-3rem txt-align-center">
        {{ doc?.title }}
      </div>
      <div class="w-90">
        <div v-if="doc?.excerpt">
          <ContentRenderer
            :key="fullPath"
            class="a txt-align-center mt-2rem"
            :value="doc?.excerpt"
          />
        </div>
      </div>
    </template>

    <template v-if="doc?.image" #image>
      <article-image
        :image="doc?.image"
        :caption="doc?.caption"
        :caption-link="doc?.captionLink"
        :target="props.target"
      />
    </template>
    <h1>{{ doc?.heading }}</h1>
    <h2 v-if="doc?.subheading">{{ doc?.subheading }}</h2>
    <div class="a mt-2rem">
      <ContentRenderer :key="fullPath.value" :value="(doc?.body ?? {})" />
    </div>
  </content-frame>
</template>

<style scoped>
.txt-align-center {
  text-align: center;
}
</style>
