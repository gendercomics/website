<script setup>
import DividerRedArrow from '~/components/DividerRedArrow.vue'
import { useAsyncData } from '#app'

const { locale } = useI18n()
const route = useRoute()
const fullPath = ref(route.fullPath)
const keywordId = route.params.id
const appConfig = useAppConfig()

const filter = reactive({
  power: false,
  health: false,
  sex: false,
  development: false,
})

const clusterIds = {
  power: '66bb37ed01c0892ad764274e',
  health: '6627a7e069717325da0968ab',
  sex: '638f1f5769717325da0968a3',
  development: '66bb381901c0892ad764274f',
}

const index = await useAsyncData(fullPath.value, () =>
  queryContent('/' + locale.value + '/glossary')
    .where({ type: 'index' })
    .findOne(),
)

const {
  data: kw,
  status: kwStatus,
  error: kwError,
  refresh: kwRefresh,
  clear: kwClear,
} = await useFetch(appConfig.dbApiBaseUrl + '/keywords?type=content')

const {
  data: clusterPower,
  status: cpStatus,
  error: cpError,
  refresh: cpRefresh,
} = await useFetch(appConfig.dbApiBaseUrl + '/keywords/' + clusterIds.power)

const {
  data: clusterHealth,
  status: chStatus,
  error: chError,
  refresh: chRefresh,
} = await useFetch(appConfig.dbApiBaseUrl + '/keywords/' + clusterIds.health)

const {
  data: clusterSex,
  status: csStatus,
  error: csError,
  refresh: csRefresh,
} = await useFetch(appConfig.dbApiBaseUrl + '/keywords/' + clusterIds.sex)

const {
  data: clusterDevelopment,
  status: cdStatus,
  error: cdError,
  refresh: cdRefresh,
} = await useFetch(
  appConfig.dbApiBaseUrl + '/keywords/' + clusterIds.development,
)

const allKeywords = computed(() => {
  return !filter.power && !filter.health && !filter.sex && !filter.development
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

      <!-- button-block      -->
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

      <!-- frame block -->
      <div>
        <!-- place image here -->
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
      <!-- display all keywords -->
      <div class="kw-container" v-if="allKeywords">
        <div v-for="(kw, index) in kw" :key="index">
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

      <!-- display keywords of cluster power/violence-->
      <div class="kw-container" v-if="filter.power">
        <div v-for="(kw, index) in clusterPower.relations" :key="index">
          <div>
            <outline-button
              v-if="locale === 'de'"
              :text="kw.source.values.de.name"
              class="pr-1r pb-1r"
            />
            <outline-button
              v-else
              :text="kw.source.values.en.name"
              class="pr-1r pb-1r"
            />
          </div>
        </div>
      </div>

      <!-- display keywords of cluster health/illness/dis_ability -->
      <div class="kw-container" v-if="filter.health">
        <div v-for="(kw, index) in clusterHealth.relations" :key="index">
          <div>
            <outline-button
              v-if="locale === 'de'"
              :text="kw.source.values.de.name"
              class="pr-1r pb-1r"
            />
            <outline-button
              v-else
              :text="kw.source.values.en.name"
              class="pr-1r pb-1r"
            />
          </div>
        </div>
      </div>

      <!-- display keywords of cluster gender/sexuality -->
      <div class="kw-container" v-if="filter.sex">
        <div v-for="(kw, index) in clusterSex.relations" :key="index">
          <div>
            <outline-button
              v-if="locale === 'de'"
              :text="kw.source.values.de.name"
              class="pr-1r pb-1r"
            />
            <outline-button
              v-else
              :text="kw.source.values.en.name"
              class="pr-1r pb-1r"
            />
          </div>
        </div>
      </div>

      <!-- display keywords of cluster development/identity -->
      <div class="kw-container" v-if="filter.development">
        <div v-for="(kw, index) in clusterDevelopment.relations" :key="index">
          <div>
            <outline-button
              v-if="locale === 'de'"
              :text="kw.source.values.de.name"
              class="pr-1r pb-1r"
            />
            <outline-button
              v-else
              :text="kw.source.values.en.name"
              class="pr-1r pb-1r"
            />
          </div>
        </div>
      </div>

      <!-- keyword block end -->

      <divider b4 b5 t6 />
      <divider-red-arrow />

      <!-- TODO text block for cluster description -->
      <div>
        <!-- display power/violence keyword description -->
        <div v-if="filter.power" class="column">
          <div v-if="locale === 'de'">
            <h1>{{ clusterPower.values.de.name }}</h1>
            <div v-html="clusterPower.values.de.description" />
          </div>
          <div v-else-if="locale === 'en'">
            <h1>{{ clusterPower.values.en.name }}</h1>
            <div v-html="clusterPower.values.en.description" />
          </div>
        </div>

        <!-- display health/illness/dis_ability keyword description -->
        <div v-if="filter.health" class="column">
          <div v-if="locale === 'de'">
            <h1>{{ clusterHealth.values.de.name }}</h1>
            <div v-html="clusterHealth.values.de.description" />
          </div>
          <div v-else-if="locale === 'en'">
            <h1>{{ clusterHealth.values.en.name }}</h1>
            <div v-html="clusterHealth.values.en.description" />
          </div>
        </div>

        <!-- display gender/sexuality keyword description -->
        <div v-if="filter.sex" class="column">
          <div v-if="locale === 'de'">
            <h1>{{ clusterSex.values.de.name }}</h1>
            <div v-html="clusterSex.values.de.description" />
          </div>
          <div v-else-if="locale === 'en'">
            <h1>{{ clusterSex.values.en.name }}</h1>
            <div v-html="clusterSex.values.en.description" />
          </div>
        </div>

        <!-- display development/identity keyword description -->
        <div v-if="filter.development" class="column">
          <div v-if="locale === 'de'">
            <h1>{{ clusterDevelopment.values.de.name }}</h1>
            <div v-html="clusterDevelopment.values.de.description" />
          </div>
          <div v-else-if="locale === 'en'">
            <h1>{{ clusterDevelopment.values.en.name }}</h1>
            <div v-html="clusterDevelopment.values.en.description" />
          </div>
        </div>
      </div>
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

<i18n lang="yaml">
de:
  power: Macht/Gewalt
  health: Gesundheit/Krankheit/Dis_ability
  sex: Geschlecht/Sexualität
  development: Entwicklung/Identität
en:
  power: Power/Violence
  health: Health/Illness/Dis_ability
  sex: Gender/Sexuality
  development: Development/Identity
</i18n>
