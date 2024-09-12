<script setup lang="ts">
const props = defineProps({
  content: {
    type: String,
    default: '',
  },
})
const { locale } = useI18n()

const i18nPath = computed(() => '/' + locale.value + props.content)

async function fetchContent() {
  try {
    return await queryContent(i18nPath).findOne()
  } catch (err: any) {
    return await queryContent(props.content).findOne()
  }
}

// let { data: doc } = await useAsyncData(() => fetchContent(i18nPath.value))

let doc = await useAsyncData(() => queryContent(i18nPath.value).findOne())

// Watch the route and refetch content on route change
/*
watch(
  () => route.fullPath,
  async () => {
    console.log("route changed: " + route.fullPath)
    doc = await queryContent(i18nPath.value).findOne()
  },
)
 */

// Alternatively, using `onBeforeRouteUpdate`
onBeforeRouteUpdate(async (to, from, next) => {
  console.log("i18nPath: " + i18nPath.value)
  doc = await queryContent(i18nPath.value).findOne()
  next()
})
</script>

<template>
  <div class="container page-margin">
    <content-renderer :value="doc" :key="$route.fullPath">
      <div class="titel-xl mt-3rem txt-align-center">
        {{ doc.data.value.title }}
      </div>
      <div class="w-90">
        <div v-if="doc.data.value.excerpt">
          <content-renderer-markdown
            class="a txt-align-center mt-2rem"
            :value="doc.data.value.excerpt"
          />
        </div>
      </div>
    </content-renderer>

    <divider-red-arrow />
    <img
      src="../assets/images/corner-green-3-50px(buttons).svg"
      alt=""
      class="translate-50"
    />
    <divider b1green b2 b3flat b4flat b5 b6 />

    <div class="text-container">
      <div class="container-relative">
        <content-renderer :value="doc" :key="$route.fullPath">
          <div v-if="doc.data.value.image">
            <article-image
              :image="doc.data.value.image"
              :caption="doc.data.value.caption"
              class="image"
            />
          </div>
          <h1>{{ doc.data.value.heading }}</h1>
          <h2 v-if="doc.data.value.subheading">
            {{ doc.data.value.subheading }}
          </h2>
          <div class="a mt-2rem">
            <content-renderer-markdown :value="doc.data.value.body" />
          </div>
        </content-renderer>
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
