<script setup>
const { t } = useI18n({
  useScope: 'local',
})
</script>

<template>
  <div>
    <div class="hero-frame">
      <div class="square-200 top-left"></div>
      <div class="line-top top-border"></div>
      <div class="square-200 top-right"></div>
      <div class="border-left"></div>
      <div class="content">
        <div class="inner-content">
          <big-logo />
        </div>
      </div>
      <div class="border-right"></div>
      <div class="square-200 bottom-left"></div>
      <div class="bottom-center"></div>
      <div class="square-200 bottom-right"></div>
    </div>

    <div class="bottom-row">
      <div class="w-50">
        <div class="cell-dynamic top-border ml-200 mr-200" />
        <div class="square-200 corner-green-1 mt--2 mr--1" />
      </div>
      <div class="w-50">
        <div class="logo-claim pl-10 ml-10">
          {{ t('title') }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-frame {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 200px auto 200px;
}

.square-200 {
  width: 200px;
  height: 200px;
  background-size: cover;
}

.top-left {
  background-image: url('@/assets/images/corner-green-line-4.svg');
}

.top-border {
  border-top: 2px solid var(--gc-green);
}

.top-right {
  background-image: url('@/assets/images/corner-red-filled-1.svg');
}

.bottom-left {
  background-image: url('@/assets/images/corner-red-filled-3.svg');
}

.bottom-center {
  height: 200px;
}

.bottom-right {
  background-image: url('@/assets/images/corner-green-line-2.svg');
}

.border-left {
  width: 198px;
  border-left: 2px solid var(--gc-green);
}

.border-right {
  width: 198px;
  border-right: 2px solid var(--gc-green);
}

.content {
  grid-column: 2;
  grid-row: 2;
  display: flex;
  flex-direction: column;
}

.inner-content {
  flex: 1;
}

/** divider row **/

.bottom-row {
  display: flex;
  margin-top: -2px;
}

.cell-debug {
  border: 1px solid black;
  text-align: center;
}

.cell-dynamic {
  /* No fixed width */
}

.cell-dynamic[span='2'] {
  grid-column: span 2; /* Spanning two columns */
}

.mr--1 {
  margin-right: -1px;
}
</style>

<i18n lang="yaml">
de:
  title: Visualitäten von Geschlecht in deutschsprachigen Comics
en:
  title: Visualities of Gender in German-Language Comics
</i18n>
