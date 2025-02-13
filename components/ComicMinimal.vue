<script setup>
const props = defineProps({
  artist: {
    type: String,
    default: 'Artist',
  },
  title: {
    type: String,
    default: 'Title',
  },
  comic: {
    type: Object,
    default: {},
  },
})

const appConfig = useAppConfig()

function imageUrl(id, cover) {
  if (cover === null) {
    return new URL(`@/assets/images/logo-gendercomics.svg`, import.meta.url)
  }
  return new URL(
    appConfig.apiImageUrl + `/` + id + `/` + cover,
    import.meta.url,
  )
}

function name(creator) {
  if (creator === null || creator === undefined || creator.name === null) {
    return ''
  } else if (creator.name.name !== null) {
    return creator.name.name
  } else {
    return creator.name.firstName + ' ' + creator.name.lastName
  }
}
</script>

<template>
  <div class="container" @click="navigateTo('/comic/' + comic.id)">
    <div class="comic">
      <div class="image-container">
        <img
          :src="imageUrl(comic.id, comic.cover)"
          alt="cover"
          class="center"
          :class="{ rounded: comic.cover !== null }"
        />
      </div>

      <div class="mt-creator">
        <div v-for="(creator, index) in props.comic.creators" :key="index">
          <div class="font-creator ml-50 mt-5">{{ name(creator) }}</div>
        </div>
      </div>
      <div class="font-titel mt-10 ml-50 mr-50 mb-3rem">
        {{ props.comic.title }} {{ props.comic.issue }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  flex: 1 1 calc(25%);
  flex-direction: column;
  border-radius: 100px;
  border: 2px solid var(--gc-green);
  box-sizing: border-box;
  cursor: pointer;
  min-width: 280px;
}

.container:hover {
  background: var(--white) 0 0 no-repeat padding-box;
  border-radius: 100px;
  box-shadow: 0 0 50px var(--gc-green-2);
  transition: 0.4s ease-out;
}

.image-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  width: 100%;
  height: auto;
}

.comic img {
  max-width: 80%;
  max-height: 250px;
  height: auto;
  width: auto;
  display: block;
  margin-top: 50px;
}

.mt-creator {
  margin-top: 20px;
}

.font-creator {
  font-family: var(--gc-font-family-outfit), sans-serif;
  font-style: var(--gc-font-style-normal);
  font-weight: var(--gc-font-weight-bold);
  font-size: var(--gc-font-size-12);
  line-height: var(--gc-line-spacing-10);
  letter-spacing: var(--gc-character-spacing-1);
  color: var(--gc-green-2);
  text-transform: var(--gc-text-transform-uppercase);
}

.font-titel {
  font-family: var(--gc-font-family-outfit), sans-serif;
  font-style: var(--gc-font-style-normal);
  font-weight: var(--gc-font-weight-600);
  font-size: var(--gc-font-size-25);
  line-height: var(--gc-line-spacing-25);
  letter-spacing: var(--gc-character-spacing-0-17);
  color: var(--gc-green-2);
}

.font-size-32 {
  font-size: var(--gc-font-size-32);
}

.mb-3rem {
  margin-bottom: 3rem;
}

.mt-5 {
  margin-top: 5px;
}

.rounded {
  border-radius: 50px;
}
</style>
