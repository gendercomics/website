<template>
  <div class="pattern-background">
    <NavBar />
    <slot />
    <Footer />
  </div>
</template>

<style scoped>
.pattern-background {
  background: transparent url('@/assets/images/pattern-background.png') 0 0
    repeat padding-box;
  opacity: 1;
}
</style>
