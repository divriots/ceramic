<template>
  <footer class="relative overflow-hidden">
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
          class="self-start text-white bg-primary rounded-lg shadow px-4 py-2"
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
  footer:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 768px;
    left: 0px;
    top: 0;
    z-index: -1;
    background: linear-gradient(171.93deg, #F3F4F6 17.92%, rgba(255, 255, 255, 0) 119.69%), linear-gradient(58.46deg, #5866CD 35.31%, #38EAC5 84.04%);
  }

  footer:after {
    content: '';
    position: absolute;
    position: absolute;
    width: 100%;
    height: 1096px;
    left: 0;
    top: 0;

    background: linear-gradient(182.05deg, #F3F4F6 12.18%, rgba(255, 255, 255, 0) 51.24%), linear-gradient(57.05deg, #5866CD 40.6%, #5866CD 40.61%, #2EA28A 88.18%);
    mix-blend-mode: saturation;
  }
</style>