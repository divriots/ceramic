<template>
  <article class="bg-white text-left flex overflow-hidden radius-lg rounded-lg" :class="{wide}">
    <img v-if="wide" :src="image" class="object-cover max-w-50" />
    <div class="inline-flex flex-col gap-4 my-4">
      <img v-if="!wide" :src="image" class="h-54 object-cover -my-10" />
      <span v-if="tags" class="inline-flex gap-4 px-4">
        <span
          v-for="tag of tags"
          :key="tag"
          class="rounded-lg py-2 px-4 text-white bg-indigo-400"
          >{{ tag }}</span>
      </span>
      <h1 class="text-2xl px-4">{{ title }}</h1>
      <p class="flex-grow overflow-hidden overflow-ellipsis px-4">
        {{ description }}

      </p>
      <span class="text-gray-500 text-sm px-4">{{
        published_time
      }}</span>
      <a :href="href" class="text-indigo-700 decoration-none px-4">Read more</a>
    </div>
  </article>
</template>

<script>
  export default {
  props: {
    wide : { type: Boolean , required:false, default:false},
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