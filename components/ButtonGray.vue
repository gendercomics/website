<template>
  <div id="wrapper" class="pt-2 pb-2">
    <span id="button" class="button-gray" @click="openLink">{{ text }}</span>
    <img
      v-if="left"
      id="left"
      src="~assets/images/corner-gray-flat-3-50px(buttons).svg"
      class="button-left-position"
    />
    <img
      v-if="left"
      id="left-hover"
      src="~assets/images/corner-red-flat-3-50px(buttons).svg"
      class="button-left-position"
    />
    <img
      v-if="right"
      id="right"
      src="~assets/images/corner-gray-2-50px(buttons).svg"
      class="btn-corner-right"
    />
  </div>
</template>

<script>
export default {
  name: 'ButtonGray',
  props: {
    text: {
      type: String,
      default: 'mehr erfahren'
    },
    link: {
      type: String,
      default: ''
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    openLink() {
      this.$router.push({ path: this.link })
    }
  }
}
</script>

<style scoped>
.button-gray {
  font-family: var(--gc-font-family-george-rounded);
  font-style: var(--gc-font-style-italic);
  font-weight: var(--gc-font-weight-bold);
  font-size: var(--gc-font-size-16);
  line-height: var(--gc-line-spacing-35);
  letter-spacing: var(--gc-character-spacing-2-4);
  color: var(--white);
  text-align: left;
  text-transform: uppercase;

  background: var(--gc-gray) 0% 0% no-repeat padding-box;
  border-radius: 0px 50px 50px 50px;
  opacity: 1;

  padding: 10px;
}

.button-gray + #left {
  display: inline;
}

#left-hover {
  opacity: 0;
}

.button-gray:hover {
  background-color: var(--gc-red);
  cursor: pointer;
}

.button-gray:hover + #left {
  background-color: var(--gc-red);
  cursor: pointer;
  opacity: 0;
}

.button-gray:hover ~ #left-hover {
  opacity: 1;
  transform: translate(-452%, -91%);
}

.button-left-position {
  transform: translate(-345%, -91%);
}
</style>
