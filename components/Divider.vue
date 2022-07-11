<template>
  <div class="w-100">
    <div v-if="center_1" class="divider-center-1" />
    <div v-if="left_3">
      <div class="divider-left-3" />
      <div class="divider-border-bottom" />
    </div>
    <div v-if="left_4">
      <div class="divider-left-4" />
      <div class="divider-border-top" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Divider',
  props: {
    position: {
      type: String,
      default: 'center'
    },
    direction: {
      type: String,
      default: '1'
    }
  },
  computed: {
    center_1() {
      return this.position === 'center' && this.direction === '1'
    },
    left_3() {
      return this.position === 'left' && this.direction === '3'
    },
    left_4() {
      return this.position === 'left' && this.direction === '4'
    }
  }
}
</script>
