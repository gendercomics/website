<script setup lang="ts">
const route = useRoute()
const id = route.params.id
const comic = ref([])

const { data, status, error, refresh, clear } = await useFetch(
  'http://localhost:8001/comics/' + id,
)

function name(creator) {
  if (creator === null || creator === undefined || creator.name === null) {
    return ''
  } else if (creator.name.name !== null) {
    return creator.name.name
  } else {
    return creator.name.firstName + ' ' + creator.name.lastName
  }
}

onMounted(() => {
  console.log('ID=' + id)
})
</script>

<template>
  <div class="container page-margin">
    <divider b1 b2 t3 t4 b5 b6 />
    <div class="text-container">
      <div class="bib-container">
        <h1>{{ data.title }}</h1>
        <h2>{{ data.subTitle }}</h2>
        <div v-for="(creator, c) in data.creators" :key="c">
          <h4>{{ name(creator) }}</h4>
        </div>
        <div v-for="(publisher, p) in data.publishers" :key="p">
          <div class="a">
            {{ publisher.location }}, {{ publisher.name }} {{ data.year }}
          </div>
        </div>
        <div class="a">ISBN: {{ data.isbn }}</div>
      </div>
      <!--
        <div v-if="doc.data.value.image">
        -->
      <article-image
        :image="data.id + '/' + data.cover"
        from-url
        class="image-container"
        width="auto"
        height="400px"
      />
      <!--
        </div>
        -->
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
  margin-top: 1rem;
}

.text-container {
  display: flex;
  border-left: solid 2px var(--gc-green);
  border-right: solid 2px var(--gc-green);
  padding-left: 100px;
  padding-right: 100px;
}

.image-container {
  float: right;
  margin: 0 0 0 40px;
}
</style>
