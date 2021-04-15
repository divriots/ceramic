<script>
export default {};
</script>
<template>
  <section class="my-10 text-center">
    <h2 class="font-semibold mx-auto text-3xl">
      Kickstart with one of our <span class="text-primary">stater-kits</span>
    </h2>
    <p class="mt-8 max-w-sm mx-auto text-sm text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu velit eu
      tellus scelerisque porttitor. Nullam dictum finibus quam, in mollis nisi
      rhoncus at. Nulla lacinpsn
    </p>
    <div class="flex overflow-auto">
      <slot name="starterkit"></slot>
    </div>
  </section>
</template>
