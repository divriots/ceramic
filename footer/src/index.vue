<template>
  <footer class="gradient relative overflow-hidden">
    <div class="mx-auto max-w-7xl grid sm:place-items-center sm:grid-cols-2 py-24 px-4 w-auto text-left">
      <h1 class="flex-grow text-4xl max-w-68">
        Chocolate <br />milk <span class="text-primary">newsletter</span>
      </h1>
      <form class="inline-flex flex-col gap-4 mt-4 sm:flex-row">
        <input
          type="email"
          class="bg-transparent border-b-1 border-gray-light text-gray-light outline-none"
          placeholder="Enter your e-mail"
        />
        <button
          type="submit"
          class="self-start text-white bg-primary rounded-md shadow px-4 py-2 hover:underline"
        >
          Subscribe
        </button>
      </form>
    </div>
    <div>
      <nav class="mx-auto max-w-7xl grid sm:grid-cols-3 p-6">
        <span class="inline-flex items-center">
        <span>By <a class="text-primary" href="https://divriots.com" name="left">&lt;divriots&gt;</a></span>
        <component :is="Twitter"></component>
        <component :is="Discord"></component>
        </span>
        <span class="inline-flex"><slot name="left"></slot></span>
      </nav>
    </div>
  </footer>
</template>
<script>
  import Twitter from '../../twitter/src/index.vue';
import Discord from '../../discord/src/index.vue';
export default {
  setup() { return { Twitter, Discord }}
};
</script>
<style scoped>
  .gradient:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0;
    z-index: -1;
    background: linear-gradient(180deg, #F3F4F6 20%, rgba(255, 255, 255, 0) 180%), linear-gradient(58.46deg, #6373e6 35.31%, #84e6fb 84.04%);
  }
</style>