<template>
  <div class="gc-page-margin">
    <div class="d-flex">
      <img src="~assets/images/corner-green-line-4.svg" />
      <span class="logo-border-top" />
      <img src="~assets/images/corner-red-filled-1.svg" class="float-right" />
    </div>
    <big-logo class="logo-border-left-right" />
    <div>
      <img src="~assets/images/corner-red-filled-3.svg" />
      <img
        src="~assets/images/corner-green-line-2.svg"
        class="corner-align-right"
      />
    </div>
    <div class="d-flex">
      <div id="left-lower-logo" class="w-50">
        <div class="logo-border-bottom" />
        <img
          src="~assets/images/corner-green-line-1.svg"
          class="logo-corner-green-bottom"
        />
      </div>

      <div id="right-lower-logo" class="w-50">
        <div class="ml-5 margin-corner-right">
          <span class="logo-claim"
            >Visualitäten von Geschlecht in deutsch&shy;sprachigen Comics</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing'
}
</script>

<style scoped>
.logo-corner-green-bottom {
  float: right;
  margin-top: -3px;
  margin-right: -2px;
}
</style>
