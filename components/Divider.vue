<script setup>
const props = defineProps({
  t1: {
    type: Boolean,
    default: false
  },
  t2: {
    type: Boolean,
    default: false
  },
  t3: {
    type: Boolean,
    default: false
  },
  t3flat: {
    type: Boolean,
    default: false
  },
  t4: {
    type: Boolean,
    default: false
  },
  t4flat: {
    type: Boolean,
    default: false
  },
  t5: {
    type: Boolean,
    default: false
  },
  t6: {
    type: Boolean,
    default: false
  },

  b1: {
    type: Boolean,
    default: false
  },
  b2: {
    type: Boolean,
    default: false
  },
  b3: {
    type: Boolean,
    default: false
  },
  b3flat: {
    type: Boolean,
    default: false
  },
  b4: {
    type: Boolean,
    default: false
  },
  b4flat: {
    type: Boolean,
    default: false
  },
  b5: {
    type: Boolean,
    default: false
  },
  b6: {
    type: Boolean,
    default: false
  }
})

</script>

<template>
  <div class='container'>
    <div id='divider-top-row'>
      <div v-if='t1' id='divider-top-1' />
      <div v-else id='divider-corner-invisible' />
      <div v-if='t2' id='divider-top-2' />
      <div v-else class='invisible' />
      <div v-if='t3' id='divider-top-3' />
      <div v-else-if='t3flat' id='divider-top-3-flat' />
      <div v-else id='divider-corner-invisible' />
      <div v-if='t4' id='divider-top-4' />
      <div v-else-if='t4flat' id='divider-top-4-flat' />
      <div v-else id='divider-corner-invisible' />
      <div v-if='t5' id='divider-top-5' />
      <div v-else class='invisible' />
      <div v-if='t6' id='divider-top-6' />
      <div v-else id='divider-corner-invisible' />
    </div>
    <div id='divider-bottom-row'>
      <div v-if='b1' id='divider-bottom-1' />
      <div v-else id='divider-corner-invisible' />
      <div v-if='b2' id='divider-bottom-2' />
      <div v-else class='invisible' />
      <div v-if='b3' id='divider-bottom-3' />
      <div v-else-if='b3flat' id='divider-bottom-3-flat' />
      <div v-else id='divider-corner-invisible' />
      <div v-if='b4' id='divider-bottom-4' />
      <div v-else-if='b4flat' id='divider-bottom-4-flat' />
      <div v-else id='divider-corner-invisible' />
      <div v-if='b5' id='divider-bottom-5' />
      <div v-else class='invisible' />
      <div v-if='b6' id='divider-bottom-6' />
      <div v-else id='divider-corner-invisible' />
    </div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: center;
}

#divider-top-row {
  align-items: flex-start;
  height: 100px;
}

#divider-top-1 {
  height: 100px;
  background-size: 100px 100px;
  background-image: url('~assets/images/corner-green-line-3-100px.svg');
  background-repeat: no-repeat;
  flex: 0 0 100px;
}

#divider-top-2 {
  border-bottom-color: var(--gc-green);
  border-bottom-width: 2px;
  border-bottom-style: solid;
}

#divider-top-3 {
  height: 100px;
  background-size: 100px 100px;
  background-image: url('~assets/images/corner-green-line-2-100px.svg');
  background-repeat: no-repeat;
  flex: 0 0 100px;
  margin-right: -1px;
}

#divider-top-3-flat {
  flex: 0 0 100px;
  border-bottom-color: var(--gc-green);
  border-bottom-width: 2px;
  border-bottom-style: solid;
}

#divider-top-4 {
  height: 100px;
  background-size: 100px 100px;
  background-image: url('~assets/images/corner-green-line-3-100px.svg');
  background-repeat: no-repeat;
  flex: 0 0 100px;
  margin-left: -1px;
}

#divider-top-4-flat {
  flex: 0 0 100px;
  border-bottom-color: var(--gc-green);
  border-bottom-width: 2px;
  border-bottom-style: solid;
}

#divider-top-5 {
  border-bottom-color: var(--gc-green);
  border-bottom-width: 2px;
  border-bottom-style: solid;
}

#divider-top-6 {
  height: 100px;
  background-size: 100px 100px;
  background-image: url('~assets/images/corner-green-line-2-100px.svg');
  background-repeat: no-repeat;
  flex: 0 0 100px;
}

#divider-bottom-row {
  align-items: flex-end;
  margin-top: -2px;
  height: 100px;
}

#divider-bottom-1 {
  height: 100px;
  background-size: 100px 100px;
  background-image: url('~assets/images/corner-red-filled-4-100px.svg');
  background-repeat: no-repeat;
  flex: 0 0 100px;
}

#divider-bottom-2 {
  border-top-color: var(--gc-green);
  border-top-width: 2px;
  border-top-style: solid;
}

#divider-bottom-3 {
  height: 100px;
  background-size: 100px 100px;
  background-image: url('~assets/images/corner-green-line-1-100px.svg');
  background-repeat: no-repeat;
  flex: 0 0 100px;
  margin-right: -1px;
}

#divider-bottom-3-flat {
  flex: 0 0 100px;
  border-top-color: var(--gc-green);
  border-top-width: 2px;
  border-top-style: solid;
}

#divider-bottom-4 {
  height: 100px;
  background-size: 100px 100px;
  background-image: url('~assets/images/corner-green-line-4-100px.svg');
  background-repeat: no-repeat;
  flex: 0 0 100px;
  margin-right: -1px;
}

#divider-bottom-4-flat {
  flex: 0 0 100px;
  border-top-color: var(--gc-green);
  border-top-width: 2px;
  border-top-style: solid;
}

#divider-bottom-5 {
  border-top-color: var(--gc-green);
  border-top-width: 2px;
  border-top-style: solid;
}

#divider-bottom-6 {
  height: 100px;
  background-size: 100px 100px;
  background-image: url('~assets/images/corner-green-line-1-100px.svg');
  background-repeat: no-repeat;
  flex: 0 0 100px;
}

#divider-corner-invisible {
  height: 100px;
  background-size: 100px 100px;
  flex: 0 0 100px;
}
</style>
