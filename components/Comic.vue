<script setup lang="ts">
const route = useRoute()
const id = route.params.id
const { t, locale } = useI18n({
  useScope: 'local',
})
const appConfig = useAppConfig()
const { data, status, error, refresh, clear } = await useFetch(
  appConfig.dbApiBaseUrl + '/comics/' + id,
)
const searchStore = useSearchStore()

const searchInput = reactive({
  searchTerm: '',
  searchFilter: {
    comics: true,
    persons: true,
    publishers: false,
    keywords: false,
  },
  language: locale.value,
})

function name(creator) {
  if (creator === null || creator === undefined || creator.name === null) {
    return ''
  } else if (creator.name.name !== null) {
    return creator.name.name
  } else {
    return creator.name.firstName + ' ' + creator.name.lastName
  }
}

function comicLink(comicId) {
  return '/comic/' + comicId
}

function i18nKeyword(values) {
  if (locale.value === 'en') return values.en.name
  return values.de.name
}

function searchCreator(creator) {
  searchInput.searchTerm = name(creator)
  searchInput.searchFilter.comics = false
  searchInput.searchFilter.persons = true
  searchInput.searchFilter.publishers = false
  searchInput.searchFilter.keywords = false
  searchStore.setSearchInput(searchInput)
  navigateTo('/database#search')
}

function searchPublisher(publisher) {
  searchInput.searchTerm = publisher.name
  searchInput.searchFilter.comics = false
  searchInput.searchFilter.persons = false
  searchInput.searchFilter.publishers = true
  searchInput.searchFilter.keywords = false
  searchStore.setSearchInput(searchInput)
  navigateTo('/database#search')
}

function openLink(wikidataId: string) {
  navigateTo('https://www.wikidata.org/wiki/ ' + wikidataId, {
    external: true,
    open: '_blank',
  })
}

function searchKw(kw) {
  console.log('search db for keyword: ' + kw)
  searchInput.searchTerm = kw
  searchInput.searchFilter.comics = false
  searchInput.searchFilter.persons = false
  searchInput.searchFilter.publishers = false
  searchInput.searchFilter.keywords = true
  searchStore.setSearchInput(searchInput)
  navigateTo('/database')
}


onMounted(() => {
  console.log('ID=' + id)
})
</script>

<template>
  <div class="container page-margin">
    <divider-red-arrow />
    <img
      src="../assets/images/corner-green-3-50px(buttons).svg"
      alt=""
      class="translate-50"
    />
    <divider b1green b2 b3flat b4flat b5 b6 />

    <div class="text-container">
      <div class="container-relative">
        <div>
          <h1>{{ data.title }} {{ data.issue }}</h1>
          <h2>
            {{ data.subTitle }}
          </h2>
          <div class="a mt-2rem">
            <div v-for="(creator, c) in data.creators" :key="c" class="flex">
              <h4 @click="searchCreator(creator)" class="link">
                {{ name(creator) }}
              </h4>
              <!-- wikidata -->
              <!--
              <div
                class="pointer"
              >
                <div @click="openLink(creator.wikidata)">
                  <img
                    src="@/assets/images/Wikidata-logo-en.svg"
                    alt="wikidata-logo-en"
                    class="wikidata"
                  />
                </div>
              </div>
              -->
            </div>
            <div class="mt-2rem">
              <div v-for="(publisher, p) in data.publishers" :key="p">
                <div class="a link" @click="searchPublisher(publisher)">
                  {{ publisher.location }}, {{ publisher.name }} {{ data.year }}
                </div>
              </div>
            </div>
            <div v-if="data.isbn" class="a">ISBN: {{ data.isbn }}</div>
            <div v-if="data.partOf">
              <div class="a">
                in:
                <router-link :to="comicLink(data.partOf.comic.id)">
                  {{ data.partOf.comic.title }}
                  {{ data.partOf.comic.issue }}</router-link
                >, {{ t('pages') }}
                {{ data.partOf.pages }}
              </div>
            </div>
            <div
              v-if="data.seriesList && data.seriesList.length > 0"
              class="mt-2rem"
            >
              <h6>{{ t('series') }}</h6>
              <div v-for="(series, s) in data.seriesList" :key="s">
                <div class="a">
                  <router-link :to="comicLink(series.comic.id)">
                    {{ series.comic.title }}</router-link
                  >, {{ t('volume') }}
                  {{ series.volume }}
                </div>
              </div>
            </div>

            <div class="mt-1rem">
              <div v-for="(link, l) in data.hyperLinks" :key="l">
                <a :href="link.url" target="_blank">{{ link.url }}</a>
              </div>
            </div>

            <div v-if="data.genres" class="mt-2rem">
              <h6>{{ t('genres') }}</h6>
              <div v-for="(genre, g) in data.genres" :key="g">
                <green-button
                  :text="i18nKeyword(genre.values)"
                  class="mt-1rem"
                />
              </div>
            </div>

            <div v-if="data.keywords" class="mt-2rem">
              <h6>{{ t('keywords') }}</h6>
              <div v-for="(keyword, k) in data.keywords" :key="k" class="flex">
                <outline-button
                  :text="i18nKeyword(keyword.values)"
                  class="mt-1rem"
                  @click="searchKw(i18nKeyword(keyword.values))"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-if="data.cover">
          <article-image
            :image="data.id + '/' + data.cover"
            from-api-url
            class="image"
            width="auto"
            height="400px"
            no-caption
          />
        </div>
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
  border-left: solid 2px var(--gc-green);
  border-right: solid 2px var(--gc-green);
  width: 100%;
  padding-left: 87pt;
  padding-right: 87pt;
  box-sizing: border-box;
}

.container-relative {
  display: flex;
  flex-direction: row;
  max-width: 100%;
}

.image {
  float: right;
  margin: 0 0 0 40px;
}

.pointer {
  cursor: pointer;
}

.link {
  cursor: pointer;
}

.link:hover {
  color: var(--gc-red);
}

.wikidata {
  height: 35px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
}
</style>
<i18n lang="yaml">
de:
  genres: Genre(s)
  keywords: Schlagwort(e)
  pages: Seiten
  series: Reihe(n)
  volume: Band
en:
  genres: Genre(s)
  keywords: Keyword(s)
  pages: pages
  series: Series
  volume: volume
</i18n>
