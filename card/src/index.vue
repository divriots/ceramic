<template>
  <article class="bg-white text-left flex overflow-hidden radius-lg rounded-lg" :class="{ wide }">
    <img v-if="wide" :src="image" class="object-cover max-w-60" />
    <div class="inline-flex flex-col space-y-4 my-4">
      <img v-if="!wide" :src="image" class="h-48 object-cover" />
      <h1 class="text-2xl px-4">{{ title }}</h1>
      <p class="flex-grow overflow-hidden overflow-ellipsis px-4">
        {{ description }}
      </p>
      <span class="text-gray-500 text-sm px-4">{{ published_time }}</span>
      <span v-if="tags" class="flex space-x-4 pt-4 px-4">
        <span
          v-for="tag of tags"
          :key="tag"
          class="text-teal-mid"
          >{{ tag }}</span>
      <span class="flex-grow"></span>
      <a :href="href" class="flex justify-end text-primary decoration-none px-4">Read more...</a>
      </span>
    </div>
  </article>
</template>

<script>
  export default {
  props: {
    wide: { type: Boolean, required: false, default: false },
    image: { type: String, required: false },
    section: { type: String, required: false },
    title: { type: String, required: true },
    description: { type: String, require: false },
    tags: { type: Array, required: false },
    href: { type: String, required: true },
    published_time: { type: String, required: false },
  },
};
</script>
<style scoped lang="scss">
  article {
    height: 36rem;

    &.wide {
      height: 24rem;
    }
  }
</style>