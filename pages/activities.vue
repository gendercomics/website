<script setup>
import DividerRedArrow from '~/components/DividerRedArrow.vue'

const { locale } = useI18n()
const route = useRoute()
const fullPath = ref(route.fullPath)
const contentPath = computed(() => '/' + locale.value + '/activities')
</script>

<template>
  <div class="page-margin container">
    <ContentDisplay :path="contentPath">
      <template #default="{ doc }">
        <div class="titel-xl mt-3rem">{{ doc.title }}</div>
        <divider-red-arrow />
        <img
          src="../assets/images/corner-green-3-50px(buttons).svg"
          alt=""
          class="translate-50"
        />
        <divider b1green b2 b3flat b4flat b5 b6 />

        <div class="column text-container">
          <div class="container-relative">
            <article-image
              :image="doc.image"
              :caption="doc.caption"
              :caption-link="doc.captionLink"
              target="_self"
              class="image"
            />
            <ContentRendererMarkdown
              class="a"
              :value="doc.body"
            />
          </div>
        </div>
        <divider t1 b2 b3flat b4flat b5 t6 />
        <div class="mr-2">
          <divider b4 />
        </div>
      </template>
    </ContentDisplay>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  border-left: solid 2px var(--gc-green);
  border-right: solid 2px var(--gc-green);
  padding-left: 100px;
  padding-right: 100px;
}

.translate-50 {
  transform: translateX(50%);
  margin-right: 2px;
}

.container-relative {
  position: relative;
  max-width: 100%;
}

.image {
  float: right;
  margin: 0 0 0 40px;
}
</style>
