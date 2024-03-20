<script setup></script>

<template>
  <div class="frame">
    <div class="corner top-left"></div>
    <div class="line-top top-center"></div>
    <div class="corner top-right"></div>
    <div class="border-left"></div>
    <div class="content">
      <div class="inner-content">
        <big-logo />
      </div>
    </div>
    <div class="border-right"></div>
    <div class="corner bottom-left"></div>
    <div class="bottom-center"></div>
    <div class="corner bottom-right"></div>
  </div>

  <!--
    <div class="row flex mt-minus6">
      <div id="left-lower-logo" class="w-50">
        <div class="logo-border-bottom" />
        <img
          src="~/assets/images/corner-green-line-1.svg"
          class="logo-corner-green-bottom"
          alt=""
          height="200"
        />
      </div>

      <div id="right-lower-logo" class="w-50">
        <div class="ml-5 margin-corner-right">
          <span class="logo-claim flex-ml10"
            >Visualitäten von Geschlecht in deutsch&shy;sprachigen Comics</span
          >
        </div>
      </div>
    </div>
  </div>
  -->
</template>

<style scoped>
@import url('~/assets/css/styles.css');

.frame {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 200px auto 200px;
}

.corner {
  width: 200px;
  height: 200px;
  background-size: cover;
}

.top-left {
  background-image: url('~/assets/images/corner-green-line-4.svg');
}

.top-center {
  border-top: 2px solid black; /* change line color */
  height: 200px;
}

.top-right {
  background-image: url('~/assets/images/corner-red-filled-1.svg');
}

.bottom-left {
  background-image: url('~/assets/images/corner-red-filled-3.svg'); /* Adjust path */
}

.bottom-center {
  height: 200px;
}

.bottom-right {
  background-image: url('~/assets/images/corner-green-line-2.svg');
}

.border-bottom {
  border-bottom: 2px solid black; /* change line color */
  height: 200px;
}

.border-left {
  width: 198px;
  border-left: 2px solid black;
}

.border-right {
  width: 198px;
  border-right: 2px solid black;
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
</style>
