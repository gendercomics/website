<template>
  <div class="pt-2 pb-2">
    <span class="button-artist" v-on:click="openLink">{{ text }}</span>
    <img src="~/assets/images/corner-green-2-50px(buttons).png" class="btn-corner-right"/>
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
    }
  },
  methods: {
    openLink() {
      window.open(this.link, '_self')
    }
  }
}
</script>
