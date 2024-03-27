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
  <div class="container">
    <!-- top row -->
    <div class="fixed-width">
      <div v-if="t1" class="divider-top-1" />
    </div>
    <div>
      <div v-if="t2" class="divider-top-2" />
      <div v-else class="invisible" />
    </div>
    <div class="fixed-width">
      <div v-if="t3" class="divider-top-3" />
      <div v-else-if="t3flat" class="divider-top-3-flat" />
    </div>
    <div class="fixed-width">
      <div v-if="t4" class="divider-top-4" />
      <div v-else-if="t4flat" class="divider-top-4-flat" />
    </div>
    <div>
      <div v-if="t5" class="divider-top-5" />
      <div v-else class="invisible" />
    </div>
    <div class="fixed-width">
      <div v-if="t6" class="divider-top-6" />
    </div>

    <!-- bottom row -->
    <div class="fixed-width mt--2">
      <div v-if="b1" class="divider-bottom-1" />
    </div>
    <div class="mt--2">
      <div v-if="b2" class="divider-bottom-2" />
      <div v-else class="invisible" />
    </div>
    <div class="fixed-width mt--2">
      <div v-if="b3" class="divider-bottom-3" />
      <div v-else-if="b3flat" class="divider-bottom-3-flat" />
    </div>
    <div class="fixed-width mt--2">
      <div v-if="b4" class="divider-bottom-4" />
      <div v-else-if="b4flat" id="divider-bottom-4-flat" />
    </div>
    <div class="mt--2">
      <div v-if="b5" class="divider-bottom-5" />
      <div v-else class="invisible" />
    </div>
    <div class="fixed-width mt--2">
      <div v-if="b6" class="divider-bottom-6" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-rows: auto auto; /* Two rows */
  grid-template-columns: 100px auto 100px 100px auto 100px;
}

.fixed-width {
  width: 100px; /* Fixed width for specified items */
}

.divider-top-1 {
  height: 100px;
  background-size: 100px 100px;
  background-image: url('@/assets/images/corner-green-line-3-100px.svg');
  background-repeat: no-repeat;
}

.divider-top-2 {
  border-bottom-color: var(--gc-green);
  border-bottom-width: 2px;
  border-bottom-style: solid;
}

.divider-top-3 {
  height: 100px;
  background-size: 100px 100px;
  background-image: url('@/assets/images/corner-green-line-2-100px.svg');
  background-repeat: no-repeat;
  margin-right: -1px;
}

.divider-top-3-flat {
  flex: 0 0 100px;
  border-bottom-color: var(--gc-green);
  border-bottom-width: 2px;
  border-bottom-style: solid;
}

.divider-top-4 {
  height: 100px;
  background-size: 100px 100px;
  background-image: url('@/assets/images/corner-green-line-3-100px.svg');
  background-repeat: no-repeat;
  margin-left: -1px;
}

.divider-top-4-flat {
  flex: 0 0 100px;
  border-bottom-color: var(--gc-green);
  border-bottom-width: 2px;
  border-bottom-style: solid;
}

.divider-top-5 {
  border-bottom-color: var(--gc-green);
  border-bottom-width: 2px;
  border-bottom-style: solid;
}

.divider-top-6 {
  height: 100px;
  background-size: 100px 100px;
  background-image: url('@/assets/images/corner-green-line-2-100px.svg');
  background-repeat: no-repeat;
}

.divider-bottom-1 {
  height: 100px;
  background-size: 100px 100px;
  background-image: url('@/assets/images/corner-red-filled-4-100px.svg');
  background-repeat: no-repeat;
}

.divider-bottom-2 {
  border-top-color: var(--gc-green);
  border-top-width: 2px;
  border-top-style: solid;
}

.divider-bottom-3 {
  height: 100px;
  background-size: 100px 100px;
  background-image: url('@/assets/images/corner-green-line-1-100px.svg');
  background-repeat: no-repeat;
  margin-right: -1px;
}

.divider-bottom-3-flat {
  flex: 0 0 100px;
  border-top-color: var(--gc-green);
  border-top-width: 2px;
  border-top-style: solid;
}

.divider-bottom-4 {
  height: 100px;
  background-size: 100px 100px;
  background-image: url('@/assets/images/corner-green-line-4-100px.svg');
  background-repeat: no-repeat;
  margin-right: -1px;
}

#divider-bottom-4-flat {
  flex: 0 0 100px;
  border-top-color: var(--gc-green);
  border-top-width: 2px;
  border-top-style: solid;
}

.divider-bottom-5 {
  border-top-color: var(--gc-green);
  border-top-width: 2px;
  border-top-style: solid;
}

.divider-bottom-6 {
  height: 100px;
  background-size: 100px 100px;
  background-image: url('@/assets/images/corner-green-line-1-100px.svg');
  background-repeat: no-repeat;
}

.invisible {
  /* nothing to see here :) */
}
</style>
