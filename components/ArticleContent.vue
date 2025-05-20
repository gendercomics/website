<script setup lang="ts">
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

onMounted(() => {
  console.log('ArticleContent fullPath: ' + fullPath.value)
})
</script>

<template>
  <div class="container page-margin">
    <ContentDisplay :path="i18nPath">
      <template #default="{ doc }">
        <div
          v-if="doc.title"
          class="titel-xl mt-3rem txt-align-center"
        >
          {{ doc.title }}
        </div>
        <div class="w-90">
          <div v-if="doc.excerpt">
            <ContentRendererMarkdown
              class="a txt-align-center mt-2rem"
              :value="doc.excerpt"
              :key="fullPath"
            />
          </div>
        </div>
      </template>
    </ContentDisplay>

    <divider-red-arrow />
    <img
      src="../assets/images/corner-green-3-50px(buttons).svg"
      alt=""
      class="translate-50"
    />
    <divider b1green b2 b3flat b4flat b5 b6 />

    <div class="text-container">
      <div class="container-relative">
        <ContentDisplay :path="i18nPath">
          <template #default="{ doc }">
            <div v-if="doc.image">
              <article-image
                :image="doc.image"
                :caption="doc.caption"
                :caption-link="doc.captionLink"
                :target="props.target"
                class="image"
              />
            </div>
            <h1>{{ doc.heading }}</h1>
            <h2 v-if="doc.subheading">
              {{ doc.subheading }}
            </h2>
            <div class="a mt-2rem">
              <ContentRendererMarkdown
                :value="doc.body"
                :key="fullPath"
              />
            </div>
          </template>
        </ContentDisplay>
      </div>
    </div>
    <divider t1 b2 b3flat b4flat b5 t6 />
    <div class="mr-2">
      <divider b4 />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.translate-50 {
  transform: translateX(50%);
  margin-right: 2px;
}

.mr-2 {
  margin-right: 2px;
}

.text-container {
  display: flex;
  flex-direction: column;
  border-left: solid 2px var(--gc-green);
  border-right: solid 2px var(--gc-green);
  padding-left: 100px;
  padding-right: 100px;
}

.container-relative {
  position: relative;
  max-width: 100%;
}

.image {
  float: right;
  margin: 0 0 0 40px;
}

.txt-align-center {
  text-align: center;
}
</style>
