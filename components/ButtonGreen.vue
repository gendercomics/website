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
