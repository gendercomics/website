<script setup>
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div class="container">
    <div class="left-column">
      <!-- fwf -->
      <div class="border-left-green">
        <div class="w-90">
          <div class="tag">{{ t('funding-org') }}</div>
          <div class="titel-kachel">{{ t('fwf') }}</div>
          <div>
            <a class="a">Grant DOI</a>
            <a
              class="ml-10 link-passiv"
              href="https://www.fwf.ac.at/en/research-radar/10.55776/P31925"
              target="_blank"
              >10.55776/P31925</a
            >
          </div>
          <a href="https://www.fwf.ac.at/" target="_blank">
            <img src="@/assets/images/logo-FWF.png" alt="FWF" class="mt-30" />
          </a>
        </div>
      </div>
      <!-- divider -->
      <div class="row">
        <div class="w-100px">
          <img src="@/assets/images/corner-green-line-3-100px.svg" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="border-green-left-right"></div>
      </div>
      <div class="row mt--6">
        <div class="w-100px" />
        <div class="border-top-green" />
        <div class="w-100px">
          <img src="@/assets/images/corner-green-line-1-100px.svg" alt="" />
        </div>
      </div>
      <!-- uni -->
      <div class="border-right-green mt--6 mr--1 pb-75">
        <div class="w-90">
          <div class="tag">{{ t('institution') }}</div>
          <div class="titel-kachel">{{ t('uni') }}</div>
          <a class="a">{{ t('germanistik') }}</a>
          <a href="https://germanistik.univie.ac.at/" target="_blank">
            <img
              src="~assets/images/logo-UniWien-gray.png"
              alt="UNI"
              class="mt-30"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="right-column">
      <mdw />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.left-column {
  display: flex;
  flex-direction: column;
  width: 50%; /* Adjust as needed */
}

.right-column {
  display: flex;
  align-items: flex-start;
  width: 50%;
}

.row {
  display: grid;
  grid-template-columns: 100px auto 100px;
}

.mt--6 {
  margin-top: -6px;
}

.w-100px {
  width: 100px;
}

.mr--1 {
  margin-right: -1px;
}

.pb-75 {
  padding-bottom: 75px;
}
</style>

<i18n lang="yaml">
de:
  funding-org: Fördergeber
  fwf: FWF Der Wissenschaftsfonds
  institution: Institution
  uni: Universität Wien
  germanistik: Institut für Germanistik
en:
  funding-org: Funding Organization
  fwf: Austrian Science Fund (FWF)
  institution: Institution
  uni: University of Vienna
  germanistik: Department of German Studies
</i18n>
