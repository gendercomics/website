<script setup>
import { useAsyncData } from '#app'

const { locale } = useI18n()
const route = useRoute()
const fullPath = ref(route.fullPath)

const { data: index } = await useAsyncData(fullPath.value, () =>
  queryCollection('content')
    .path('/' + locale.value + '/activities')
    .where('type', '=', 'index')
    .first(),
)
</script>

<template>
  <content-frame>
    <template #header>
      <div class="titel-xl mt-3rem">{{ index?.title }}</div>
    </template>

    <template #image>
      <article-image
        :image="index?.image"
        :caption="index?.caption"
        :caption-link="index?.captionLink"
        target="_self"
      />
    </template>
    <ContentRenderer
      :key="fullPath.value"
      class="a"
      :value="(index?.body ?? {})"
    />
  </content-frame>
</template>
