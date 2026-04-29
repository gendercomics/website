<script setup lang="ts">
import DividerRedArrow from '~/components/DividerRedArrow.vue'

const { locale } = useI18n()

const memberPath = computed(() => '/' + locale.value + '/team')

const { data: members } = await useAsyncData('team-members-' + locale.value, () => {
  return queryCollection('content')
    .where('path', 'LIKE', '/' + locale.value + '/team/%')
    .where('type', '=', 'member')
    .order('path', 'ASC')
    .all()
})

const { data: index } = await useAsyncData(`team-index-${locale.value}`, () => {
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

      <div v-for="(member, i) in members" :key="member.path">
        <div class="row" :class="{ 'border-left': i % 2 != 0 }">
          <div class="w-50">
            <ImageBox
              v-if="i % 2 === 0"
              class="border-right"
              :img="member.image"
              width="60%"
              :caption="member.caption"
              :caption-link="member.captionLink"
            />
            <div v-else-if="i % 2 != 0">
              <content-preview :member="member" />
            </div>
          </div>
          <div class="w-50">
            <ImageBox
              class="mr-2"
              v-if="i % 2 != 0"
              :img="member.image"
              width="60%"
              :caption="member.caption"
              :caption-link="member.captionLink"
              :btn-arrow="false"
            />
            <div v-if="i % 2 === 0">
              <content-preview :member="member" />
            </div>
          </div>
        </div>

        <div v-if="i % 2 === 0 && i < (members?.length ?? 0) - 1">
          <divider b1 b2 t3 t4 b5 b6 />
        </div>
        <div v-else-if="i % 2 != 0">
          <divider t1 b2 b3 />
        </div>
      </div>
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

.mt-1rem {
  margin-top: 1rem;
}

.mr-2 {
  margin-right: 2px;
}
</style>
