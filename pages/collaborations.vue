<script setup lang="ts">
import DividerRedArrow from '~/components/DividerRedArrow.vue'
import DividerGreenCorner from '~/components/DividerGreenCorner.vue'
const { t } = useI18n({
  useScope: 'local',
})
const { locale } = useI18n()
const route = useRoute()
const fullPath = ref(route.fullPath)

const index = await useAsyncData(fullPath.value, () =>
  queryContent('/' + locale.value + '/collaborations')
    .where({ type: 'index' })
    .findOne(),
)

const feuchtenberger = await useAsyncData(
  locale.value + '/collaborations/advisory-board/anke-feuchtenberger',
  () =>
    queryContent(
      '/' + locale.value + '/collaborations/advisory-board/anke-feuchtenberger',
    ).findOne(),
)

const fliedl = await useAsyncData(
  locale.value + '/collaborations/advisory-board/konstanze-fliedl',
  () =>
    queryContent(
      '/' + locale.value + '/collaborations/advisory-board/konstanze-fliedl',
    ).findOne(),
)

const frahm = await useAsyncData(
  locale.value + '/collaborations/advisory-board/ole-frahm',
  () =>
    queryContent(
      '/' + locale.value + '/collaborations/advisory-board/ole-frahm',
    ).findOne(),
)
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

      <!-- Wissenschaftlicher Beirat -->
      <div>
        <h1 class="mt-3rem center">{{ t('advisory-board') }}</h1>

        <divider-red-arrow />

        <div class="row-2">
          <div class="border-right">
            <archive-box-with-image
              :category="feuchtenberger.data.value.tag"
              :title="feuchtenberger.data.value.title"
              :img="feuchtenberger.data.value.img"
              :description="feuchtenberger.data.value.body"
            />
          </div>
          <div>
            <archive-box-with-image
              :category="fliedl.data.value.tag"
              :title="fliedl.data.value.title"
              :img="fliedl.data.value.img"
              :description="fliedl.data.value.body"
            />
          </div>
        </div>

        <divider b1 b2 t3 t4 b5 b6 />

        <div class="row-2">
          <div class="border-left">
            <archive-box-with-image
              :category="frahm.data.value.tag"
              :title="frahm.data.value.title"
              :img="frahm.data.value.img"
              :description="frahm.data.value.body"
            />
          </div>
          <div class="border-right">
            <archive-box-with-image
              :category="t('advisory-board')"
              title="Elizabeth 'Biz' Nijdam"
              img="advisory-board/elizabeth-nijdam.png"
            />
          </div>
        </div>

        <divider t1 b2 b3 />
        <divider-red-arrow up class="mt-0" />
      </div>

      <!-- Projekte und Institutionen -->
      <div>
        <h1 class="mt-3rem center">{{ t('projects-institutions') }}</h1>
        <divider-red-arrow />
        <divider-green-corner />
        <div class="row-3">
          <archive-box-vertical-with-image
            title="A multidisciplinary study of feminist comic art"
            link="https://www.sh.se/english/sodertorn-university/research/our-research/research-database/research-projects/a-multidisciplinary-study-of-feminist-comic-art"
          />
          <archive-box-vertical-with-image
            title="aka - Arbeitskreis Kulturanalyse"
            img="institution/aka.png"
            link="https://www.kulturanalyse.at/"
          />
          <archive-box-vertical-with-image
            title="Contemporary Swedish feminist comics as medium for political activism and critique"
            link="https://www.gu.se/en/research/contemporary-swedish-feminist-comics-as-medium-for-political-activism-and-critique"
          />
        </div>
        <divider-green-corner :quadrant="4" />
        <divider-green-corner :quadrant="3" />
        <div class="row-3">
          <archive-box-vertical-with-image
            title="Gender and Agency"
            img="institution/GandA-logo.jpg"
            link="https://genderandagency.univie.ac.at/"
          />
          <archive-box-vertical-with-image
            title="Interdisziplinäres Netzwerk Comic Studies (GSA)"
            img="institution/gsa-logo.jpg"
            link="https://www.thegsa.org/about"
          />
          <archive-box-vertical-with-image
            title="NEXTCOMIC Festival"
            img="institution/nextcomic-logo.png"
            link="https://www.nextcomic.org/"
          />
        </div>
      </div>

      <!-- verlage -->
      <div>
        <h1 class="mt-3rem center">{{ t('publisher') }}</h1>
        <divider-red-arrow />
        <divider-green-corner />
        <div class="row-3">
          <archive-box-vertical-with-image
            title="avant-Verlag"
            img="publisher/avant-logo.jpg"
            link="https://www.avant-verlag.de/"
          />
          <archive-box-vertical-with-image
            title="Carlsen"
            img="publisher/carlsen-logo.jpg"
            link="https://www.carlsen.de/"
          />
          <archive-box-vertical-with-image
            title="Edition Moderne"
            img="publisher/edition-moderne-logo.jpg"
            link="https://www.editionmoderne.ch/"
          />
        </div>
        <divider-green-corner :quadrant="4" />
        <divider-green-corner :quadrant="3" />
        <div class="row-3">
          <archive-box-vertical-with-image
            title="Luftschacht"
            img="publisher/luftschacht-logo.jpg"
            link="https://www.luftschacht.com/"
          />
          <archive-box-vertical-with-image
            title="Reprodukt"
            img="publisher/reprodukt-logo.jpg"
            link="https://reprodukt.com/"
          />
        </div>
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

.row-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: row;
  justify-content: center;
}

.row-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}

.grid-item {
  grid-column: 2; /* Place item in the second (center) column */
  justify-self: center; /* Center horizontally in the column */
}

.border-right {
  border-right: solid 2px var(--gc-green);
}

.border-left {
  border-left: solid 2px var(--gc-green);
}

.mt-0 {
  margin-top: 0;
}

.center {
  display: flex;
  justify-content: center;
}
</style>

<i18n lang="yaml">
de:
  advisory-board: Wissenschaftlicher Beirat
  projects-institutions: Projekte und Institutionen
  publisher: Verlags-Kooperationen
en:
  advisory-board: Advisory Board
  projects-institutions: Projects and Institutions
  publisher: Collaborations with publishers
</i18n>
