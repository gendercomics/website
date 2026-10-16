<script setup>
const props = defineProps({
  t1: {
    type: Boolean,
    default: false,
  },
  t2: {
    type: Boolean,
    default: false,
  },
  t3: {
    type: Boolean,
    default: false,
  },
  t3flat: {
    type: Boolean,
    default: false,
  },
  t4: {
    type: Boolean,
    default: false,
  },
  t4flat: {
    type: Boolean,
    default: false,
  },
  t5: {
    type: Boolean,
    default: false,
  },
  t6: {
    type: Boolean,
    default: false,
  },

  b1: {
    type: Boolean,
    default: false,
  },
  b1green: {
    type: Boolean,
    default: false,
  },
  b2: {
    type: Boolean,
    default: false,
  },
  b3: {
    type: Boolean,
    default: false,
  },
  b3flat: {
    type: Boolean,
    default: false,
  },
  b4: {
    type: Boolean,
    default: false,
  },
  b4flat: {
    type: Boolean,
    default: false,
  },
  b5: {
    type: Boolean,
    default: false,
  },
  b6: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="container-row">
    <!-- top row -->
    <div class="fixed-width">
      <div v-if="t1" class="corner corner-3" />
    </div>
    <div>
      <div v-if="t2" class="border-bottom-green" />
      <div v-else />
    </div>
    <div class="fixed-width">
      <div v-if="t3" class="corner corner-2 mr--2" />
      <div v-else-if="t3flat" class="border-bottom-green" />
    </div>
    <div class="fixed-width">
      <div v-if="t4" class="corner corner-3 ml--1" />
      <div v-else-if="t4flat" class="border-bottom-green" />
    </div>
    <div>
      <div v-if="t5" class="border-bottom-green" />
      <div v-else />
    </div>
    <div class="fixed-width">
      <div v-if="t6" class="corner corner-2" />
    </div>

    <!-- bottom row -->
    <div class="fixed-width mt--2">
      <div v-if="b1" class="corner corner-red-4" />
      <div v-else-if="b1green" class="corner corner-4" />
    </div>
    <div class="mt--2">
      <div v-if="b2" class="border-top-green" />
      <div v-else />
    </div>
    <div class="fixed-width mt--2">
      <div v-if="b3" class="corner corner-1 mr--1" />
      <div v-else-if="b3flat" class="border-top-green" />
    </div>
    <div class="fixed-width mt--2">
      <div v-if="b4" class="corner corner-4 mr--1" />
      <div v-else-if="b4flat" class="border-top-green" />
    </div>
    <div class="mt--2">
      <div v-if="b5" class="border-top-green" />
      <div v-else />
    </div>
    <div class="fixed-width mt--2">
      <div v-if="b6" class="corner corner-1" />
    </div>
  </div>
</template>

<style scoped>
.container-row {
  display: grid;
  grid-template-rows: auto auto; /* Two rows */
  grid-template-columns: 100px auto 100px 100px auto 100px;
  width: 100%;
}

.fixed-width {
  width: 100px; /* Fixed width for specified items */
}

/* 100px rounded corner pieces; the number is the corner's orientation */
.corner {
  height: 100px;
  background-size: 100px 100px;
  background-repeat: no-repeat;
}

.corner-1 {
  background-image: url('@/assets/images/corner-green-line-1-100px.svg');
}

.corner-2 {
  background-image: url('@/assets/images/corner-green-line-2-100px.svg');
}

.corner-3 {
  background-image: url('@/assets/images/corner-green-line-3-100px.svg');
}

.corner-4 {
  background-image: url('@/assets/images/corner-green-line-4-100px.svg');
}

.corner-red-4 {
  background-image: url('@/assets/images/corner-red-filled-4-100px.svg');
}

.mr--2 {
  margin-right: -2px;
}

.ml--1 {
  margin-left: -1px;
}
</style>
