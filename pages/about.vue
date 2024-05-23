<script setup lang="ts">
import DividerRedArrow from '~/components/DividerRedArrow.vue'

const doc = await useAsyncData('doc', () => queryContent('/about').findOne())
</script>

<template>
  <div class="container page-margin">
    <content-renderer :value="doc">
      <div class="titel-xl mt-3rem">{{ doc.data.value.title }}</div>
      <div class="w-90">
        <content-renderer-markdown class="a" :value="doc.data.value.excerpt" />
      </div>
    </content-renderer>
    <divider-red-arrow />
    <img
      src="@/assets/images/corner-green-3-50px(buttons).svg"
      alt=""
      class="translate-50"
    />
    <divider b1green b2 b3flat b4flat b5 b6 />
    <div class="text-container">
      <content-renderer :value="doc">
        <div class="h1">{{ doc.data.value.heading }}</div>
        <div class="a mt-2rem">
          <content-renderer-markdown :value="doc.data.value.body" />
        </div>
      </content-renderer>
    </div>
    <divider t1 b2 b3flat b4flat b5 t6 />
    <div class="mr-2">
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

.translate-50 {
  transform: translateX(50%);
  margin-right: 2px;
}

.mr-2 {
  margin-right: 2px;
}

.text-container {
  display: flex;
  flex-direction: column;
  border-left: solid 2px var(--gc-green);
  border-right: solid 2px var(--gc-green);
  padding-left: 100px;
  padding-right: 100px;
}
</style>
