<script setup>
defineProps({
  // body spans the full frame width (comic detail page)
  fullWidth: { type: Boolean, default: false },
})
</script>

<!-- Page frame for article-like content: red arrow and green corner on top,
     a body with green side borders, and closing dividers at the bottom. -->
<template>
  <div class="container page-margin">
    <slot name="header" />
    <divider-red-arrow />
    <img
      src="@/assets/images/corner-green-3-50px(buttons).svg"
      alt=""
      class="corner"
    />
    <divider b1green b2 b3flat b4flat b5 b6 />

    <div
      class="text-container border-left-green border-right-green"
      :class="{ 'full-width': fullWidth }"
    >
      <div class="body">
        <div v-if="$slots.image" class="image">
          <slot name="image" />
        </div>
        <slot />
      </div>
    </div>
    <divider t1 b2 b3flat b4flat b5 t6 />
    <div class="end-corner">
      <divider b4 />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.corner {
  transform: translateX(50%);
  margin-right: 2px;
}

.text-container {
  display: flex;
  flex-direction: column;
  padding-left: 100px;
  padding-right: 100px;
}

.text-container.full-width {
  width: 100%;
  padding-left: 87pt;
  padding-right: 87pt;
  box-sizing: border-box;
}

.body {
  position: relative;
  max-width: 100%;
}

.image {
  float: right;
  margin: 0 0 0 40px;
}

.end-corner {
  margin-right: 2px;
}
</style>
