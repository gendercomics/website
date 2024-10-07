<script setup lang="ts">
const route = useRoute()
const id = route.params.id
const comic = ref([])

const { data, status, error, refresh, clear } = await useFetch(
  'http://localhost:8001/comics/' + id,
)

onMounted(() => {
  console.log('ID=' + id)
})
</script>

<template>
  <div class="container page-margin">
    <div class="titel-xl mt-3rem txt-align-center">
      {{ data.title }}
    </div>

    <divider b1 b2 t3 t4 b5 b6 />
    <div class="text-container">
      <div class="container-relative">
        <!--
        <div v-if="doc.data.value.image">
        -->
        <article-image
          :image="data.id + '/' + data.cover"
          class="image"
          from-url
        />
        <!--
        </div>
        -->
      </div>
    </div>
    <divider t1 b2 b3 b4 b5 t6 />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
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

.container-relative {
  position: relative;
  max-width: 100%;
}

.image {
  float: right;
  margin: 0 0 0 40px;
}
</style>
