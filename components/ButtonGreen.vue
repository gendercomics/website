<template>
  <div class="pt-2 pb-2">
    <span class="button-artist" v-on:click="openLink">{{ text }}</span>
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
