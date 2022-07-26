<template>
  <div class="pt-2 pb-2">
    <img
      v-if="left"
      src="~/assets/images/corner-green-3-50px(buttons).png"
      class="btn-corner-left"
    />
    <span class="button-artist" @click="openLink">{{ text }}</span>
    <img
      v-if="right"
      src="~/assets/images/corner-green-2-50px(buttons).png"
      class="btn-corner-right"
    />
  </div>
</template>

<script>
export default {
  name: 'ButtonGreen',
  props: {
    text: {
      type: String,
      default: 'Künstler*in'
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
      window.open(this.link, '_self')
    }
  }
}
</script>

<style scoped>
.button-artist {
  font-family: var(--gc-font-family-george-rounded);
  font-style: var(--gc-font-style-italic);
  font-weight: var(--gc-font-weight-normal);
  font-size: var(--gc-font-size-20);
  line-height: var(--gc-line-spacing-27);
  letter-spacing: var(--gc-character-spacing-0-5);
  color: var(--white);

  background: var(--gc-green) 0% 0% no-repeat padding-box;
  border-radius: 50px;
  padding: 5px 10px;
  opacity: 1;

  margin-right: -5px;
  margin-left: -5px;
}

.button-artist:hover {
  background-color: var(--gc-red);
  cursor: pointer;
}
</style>
