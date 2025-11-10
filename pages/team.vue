<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import DividerRedArrow from '~/components/DividerRedArrow.vue'

const { locale } = useI18n()
const route = useRoute()
const fullPath = ref(route.fullPath)

const memberPath = computed(() => '/' + locale.value + '/team')

/*
const members = await useAsyncData('team-members-' + locale.value, () =>
  queryContent(memberPath.value).where({ type: 'member' }).find(),
)
*/

const memberKey = computed(() => 'team-members-' + locale.value)
const { data: members } = await useAsyncData(memberKey.value, () => {
  return queryCollection('content')
    .path(memberPath.value)
    .where('type', '=', 'member')
    .all()
})

const { data: index } = await useAsyncData('team-${locale.value}', () => {
  return queryCollection('content')
    .path(memberPath.value)
    .where('type', '=', 'index')
    .first()
})
</script>

<template>
  <div class="page-margin container">
    <div>
      <div class="column">
        <div class="titel-xl mt-3rem">{{ index?.title }}</div>
        <content-renderer :key="index?.id" :value="(index?.body ?? {})" class="a" />
        <divider-red-arrow />
      </div>

      <div>{{ members }}</div>

      <div v-for="member in members" :key="member.id">
        <div>{{ member.id }}</div>
      </div>

      <!--
      <div v-for="(member, index) in members.data.value" :key="member._path">
        <div class="row" :class="{ 'border-left': index % 2 != 0 }">
          <div class="w-50">
            <ImageBox
              v-if="index % 2 === 0"
              class="border-right"
              :img="member.image"
              width="60%"
              :caption="member.caption"
              :caption-link="member.captionLink"
            />
            <div v-else-if="index % 2 != 0">
              <content-preview :member="member" />
            </div>
          </div>
          <div class="w-50">
            <ImageBox
              class="mr-2"
              v-if="index % 2 != 0"
              :img="member.image"
              width="60%"
              :caption="member.caption"
              :caption-link="member.captionLink"
              :btn-arrow="false"
            />
            <div v-if="index % 2 === 0">
              <content-preview :member="member" />
            </div>
          </div>
        </div>

        <div v-if="index % 2 === 0 && index < members.data.value.length - 1">
          <divider b1 b2 t3 t4 b5 b6 />
        </div>
        <div v-else-if="index % 2 != 0">
          <divider t1 b2 b3 />
        </div>
      </div>
      -->
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  display: flex;
  flex-direction: row;
}

.a strong {
  font-weight: var(--gc-font-weight-600);
}

.border-right {
  border-right: 2px solid var(--gc-green);
  margin-right: -1px;
}

.border-left {
  border-left: 2px solid var(--gc-green);
  margin-left: 0;
}

.column {
  display: flex;
  flex-direction: column;
}

.mt-1rem {
  margin-top: 1rem;
}

.mr-2 {
  margin-right: 2px;
}
</style>
