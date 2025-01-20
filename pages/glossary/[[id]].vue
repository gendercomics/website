<script setup>
import DividerRedArrow from '~/components/DividerRedArrow.vue'
import { useAsyncData } from '#app'

const { locale } = useI18n()
const route = useRoute()
const fullPath = ref(route.fullPath)
const keywordId = route.params.id
const appConfig = useAppConfig()

const filter = defineModel({
  power: false,
  health: false,
  sex: false,
  age: false,
})

const index = await useAsyncData(fullPath.value, () =>
  queryContent('/' + locale.value + '/glossary')
    .where({ type: 'index' })
    .findOne(),
)

/*
const { data, status, error, refresh, clear } = await useFetch(
  appConfig.dbApiBaseUrl + '/keywords/' + keywordId,
)
*/

const { data, status, error, refresh, clear } = await useFetch(
  appConfig.dbApiBaseUrl + '/keywords?type=content',
)

onMounted(() => {
  //console.log('top level keywords: ' + JSON.stringify(data))
})
</script>

<template>
  <div class="page-margin container">
    <div class="column">
      <content-renderer :value="index" :key="fullPath.value">
        <div class="titel-xl mt-3rem">{{ index.data.value.title }}</div>
        <content-renderer-markdown
          class="a"
          :value="index.data.value.body"
          :key="fullPath.value"
        />
      </content-renderer>

      <divider-red-arrow />

      <divider b1 b2 t3 t4 b5 b6 />

      <!-- TODO button-block      -->
      <div class="border-right-green w-100 column">
        <keyword-filter v-model="filter" class="border-left-green w-100" />
        <div>
          <img
            src="@/assets/images/corner-green-line-3-100px.svg"
            class="corner-left-img"
            alt=""
          />
        </div>
      </div>

      <!-- Filter reset block -->
      <div class="border-right-green w-100 column">
        <div class="filter-reset-container">
          <div>
            <img
              src="@/assets/images/corner-green-1-50px(buttons).svg"
              alt=""
              class="corner-1"
            />
            <divider-red-arrow up class="red-arrow" />
          </div>
          <div class="font-filter-active filter-reset-btn">Filter aufheben</div>
        </div>
      </div>

      <!-- keyword block -->
      <div class="kw-container">
        <div v-for="(kw, index) in data" :key="index">
          <div>
            <outline-button
              v-if="locale === 'de'"
              :text="kw.values.de.name"
              class="pr-1r pb-1r"
            />
            <outline-button
              v-else
              :text="kw.values.en.name"
              class="pr-1r pb-1r"
            />
          </div>
        </div>
      </div>

      <!-- keyword block end -->

      <divider b4 b5 t6 />

      <!-- TODO text block for cluster description -->

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

.kw-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-right: 4rem;
  padding-left: 4rem;
  border-right: solid 2px var(--gc-green);
}

.w-100 {
  width: 100%;
}

.mb-2r {
  margin-bottom: 2rem;
}

.corner-left-img {
  display: flex;
  justify-content: flex-start;
  width: 100px;
  height: 100px;
}

.corner-1-50 {
  width: 50px;
  height: 50px;
}

.filter-reset-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-bottom: 2rem;
  transform: translateY(-2px);
}

.filter-reset-btn {
  display: flex;
  cursor: pointer;
  width: 200px;
}

.font-filter-active {
  font-family: var(--gc-font-family-george-rounded), sans-serif;
  font-style: var(--gc-font-style-normal);
  font-weight: var(--gc-font-weight-bold);
  font-size: var(--gc-font-size-32);
  line-height: var(--gc-line-spacing-35);
  color: var(--gc-red);
  text-transform: var(--gc-text-transform-uppercase);
}

.corner-1 {
  transform: translateX(-12px);
}

.red-arrow {
  transform: translatey(-4px);
}
</style>
