<script setup></script>

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

    <div class="divider-row">
      <div class="cell-fixed" />
      <div class="cell-dynamic top-border" />
      <div class="cell-fixed square-200 green-line-1" />
      <div class="cell-dynamic" span="2">
        <!--
        <span
          >Visualitäten von Geschlecht in deutsch&shy;sprachigen Comics</span
        >
        -->
      </div>
      <div class="cell-fixed" />
    </div>
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
  background-image: url('~/assets/images/corner-green-line-4.svg');
}

.top-border {
  border-top: 2px solid black; /* change line color */
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

.bottom-border {
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

.divider-row {
  display: grid;
  grid-template-columns: 200px auto 200px auto auto 200px;
  margin-top: -2px;
}

.cell {
  border: 1px solid black;
  text-align: center;
}

.cell-fixed {
  width: 200px;
}

.cell-dynamic {
  /* No fixed width */
}

.cell-dynamic[span='2'] {
  grid-column: span 2; /* Spanning two columns */
}

.green-line-1 {
  background-image: url('~/assets/images/corner-green-line-1.svg');
}
</style>
