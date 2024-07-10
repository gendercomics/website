<script setup>
const props = defineProps({
  content: {
    type: String,
    default: '',
  },
})

const doc = await useAsyncData('doc', () =>
  queryContent(props.content).findOne(),
)
</script>
<template>
  <div class="container-row">
    <div class="column">
      <div class="w-90">
        <content-renderer :value="doc">
          <div class="tag">{{ doc.data.value.team }}</div>
          <div class="titel-kachel">{{ doc.data.value.title }}</div>
          <content-renderer-markdown
            class="a mt-1rem"
            :value="doc.data.value.excerpt"
          />
        </content-renderer>
        <button-gray
          class="mt-1rem"
          text="mehr erfahren"
          :link="props.content"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-row {
  display: flex;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
}

.mt-1rem {
  margin-top: 1rem;
}
</style>
