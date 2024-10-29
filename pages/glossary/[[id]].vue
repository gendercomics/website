<script setup lang="ts">
import DividerRedArrow from '~/components/DividerRedArrow.vue'
import { useAsyncData } from '#app'

const { locale } = useI18n()
const route = useRoute()
const fullPath = ref(route.fullPath)
const keywordId = route.params.id
const appConfig = useAppConfig()

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
  appConfig.dbApiBaseUrl + '/keywords/top',
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

      <div v-for="(kw, index) in data" :key="index">
        <divider b1 b2 t3 t4 b5 b6 />
        <div class="border-green-left-right">
          <div class="kw-container">
            <div class="w-100 mb-2r">
              <h1 v-if="locale === 'de'" class="mt-5">
                {{ kw.values.de.name }}
              </h1>
              <h1 v-else class="mt-5">{{ kw.values.en.name }}</h1>
            </div>
            <div
              class="kw-container"
              v-for="(related, idx) in kw.relations"
              :key="idx"
            >
              <div v-if="related.source.id === keywordId">
                <green-button
                  v-if="locale === 'de'"
                  :text="related.source.values.de.name"
                  class="pr-1r pb-1r"
                  highlight
                />
                <green-button
                  v-else
                  :text="related.source.values.en.name"
                  class="pr-1r pb-1r"
                  highlight
                />
              </div>
              <div v-else>
                <green-button
                  v-if="locale === 'de'"
                  :text="related.source.values.de.name"
                  class="pr-1r pb-1r"
                />
                <green-button
                  v-else
                  :text="related.source.values.en.name"
                  class="pr-1r pb-1r"
                />
              </div>
            </div>
          </div>
        </div>

        <divider t1 b2 b3 b4 b5 t6 />
      </div>

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
}

.w-100 {
  width: 100%;
}

.mb-2r {
  margin-bottom: 2rem;
}
</style>
