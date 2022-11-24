<template>
  <div class="gc-page-margin">
    <b-row id="divider-top-row" class="d-flex" no-gutters>
      <b-col v-if="t1" id="divider-top-1" />
      <b-col v-else id="divider-corner-invisible" />
      <b-col v-if="t2" id="divider-top-2" />
      <b-col v-else class="invisible" />
      <b-col v-if="t3" id="divider-top-3" />
      <b-col v-else-if="t3flat" id="divider-top-3-flat" />
      <b-col v-else id="divider-corner-invisible" />
      <b-col v-if="t4" id="divider-top-4" />
      <b-col v-else-if="t4flat" id="divider-top-4-flat" />
      <b-col v-else id="divider-corner-invisible" />
      <b-col v-if="t5" id="divider-top-5" />
      <b-col v-else class="invisible" />
      <b-col v-if="t6" id="divider-top-6" />
      <b-col v-else id="divider-corner-invisible" />
    </b-row>
    <b-row id="divider-bottom-row" no-gutters>
      <b-col v-if="b1" id="divider-bottom-1" />
      <b-col v-else id="divider-corner-invisible" />
      <b-col v-if="b2" id="divider-bottom-2" />
      <b-col v-else class="invisible" />
      <b-col v-if="b3" id="divider-bottom-3" />
      <b-col v-else-if="b3flat" id="divider-bottom-3-flat" />
      <b-col v-else id="divider-corner-invisible" />
      <b-col v-if="b4" id="divider-bottom-4" />
      <b-col v-else-if="b4flat" id="divider-bottom-4-flat" />
      <b-col v-else id="divider-corner-invisible" />
      <b-col v-if="b5" id="divider-bottom-5" />
      <b-col v-else class="invisible" />
      <b-col v-if="b6" id="divider-bottom-6" />
      <b-col v-else id="divider-corner-invisible" />
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Divider',
  props: {
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
  }
}
</script>

<style scoped>
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
  margin-top: -2px;
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
