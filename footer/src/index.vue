<script>
  export default {};
</script>
<template>
  <footer>
    <div class="grid place-items-center margin-auto sm:grid-cols-2 py-24 w-auto">
      <h1 class="flex-grow text-4xl max-w-64">
        Chocolate milk <span class="text-primary">newsletter</span>
      </h1>
      <form class="flex gap-4 mt-4">
        <input
        type="email"
        class="bg-transparent border-b-1 border-gray text-gray"
        placeholder="Enter your e-mail"
      />
        <button type="submit" class="px-4 py-2">Subscribe</button>
      </form>
    </div>
    <nav class="grid sm:grid-cols-3 bg-white p-6">
      <span class="inline-flex">
        <span>By <a class="text-primary" href="https://divriots.com" name="left">&lt;divriots&gt;</a></span>
      <Twitter compact />
      <Discord compact />
      </span>
      <Logo compact />
      <span class="inline-flex"><slot name="left"></slot></span>
    </nav>
  </footer>
</template>