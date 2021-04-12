<script>
  import Twitter from '../../twitter/dist/index.vue'
  import Discord from '../../discord/dist/index.vue'
  export default {
    components: {Twitter,Discord}
  };
</script>
<template>
  <footer>
    <div class="mx-auto max-w-7xl grid sm:place-items-center sm:grid-cols-2 py-24 px-4 w-auto text-left">
      <h1 class="flex-grow text-4xl max-w-68 ">
        Chocolate <br/>milk <span class="text-primary">newsletter</span>
      </h1>
      <form class="inline-flex flex-col gap-4 mt-4 sm:flex-row">
        <input
        type="email"
        class="bg-transparent border-b-1 border-gray text-gray"
        placeholder="Enter your e-mail"
      />
        <button type="submit" class="self-start text-white bg-primary rounded-lg shadow px-4 py-2">Subscribe</button>
      </form>
    </div>
    <div class="bg-white">
      <nav class="mx-auto max-w-7xl grid sm:grid-cols-3 p-6">
        <span class="inline-flex items-center">
        <span>By <a class="text-primary" href="https://divriots.com" name="left">&lt;divriots&gt;</a></span>
        <Twitter />
        <Discord />
        </span>
        <span class="inline-flex"><slot name="left"></slot></span>
      </nav>
    </div>
  </footer>
</template>