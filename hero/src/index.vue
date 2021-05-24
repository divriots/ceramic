<script>
  export default {};
</script>
<template>
  <section
    class="gradient mx-auto max-w-5xl grid md:grid-cols-2 overflow-hidden mt-16 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28 place-items-center">
    <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <div class="mx-auto max-w-7xl pl-4 lg:pr-6">
        <div class="text-left">
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black-default sm:text-5xl md:text-5xl leading-normal">
            <span class="block text-primary">Design Systems,</span>
            <span class="block">Code-side</span>
          </h1>
          <p class="mt-3 text-base text-gray-mid sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Build your Front-end source of truth.<br/>
            Collaborate & maintain on the go.<br/>
            Get efficiency & consistency you deserve.
          </p>
          <div class="flex mt-8 gap-2">
            <a href="#" class="btn-primary">
              Start now
            </a>
            <a href="https://calendly.com/gg_/backlight" class="btn text-primary">
              Ask a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="relative hidden md:grid gap-4 pt-12 pb-24 px-4 items-center w-96">
      <div class="absolute bg-black-divriots w-2/3 top-0 bottom-16 left-1/6 rounded-lg z-auto" style="left: 16.666%">
      </div>
      <div class="z-10 rounded-full bg-teal-mid py-3 px-8 text-white text-left">
        Hello, I'm a H1 title
      </div>
      <div class="z-10 rounded-full bg-teal-light py-3 px-8 text-gray-mid text-left">
        &lt;and here>
        <span class="text-black-default font-bold">is the</span> &lt;/code>
      </div>
      <div class="z-10 rounded-full bg-white py-3 px-8 text-primary mx-16">
        No more error
      </div>
      <div class="z-10 rounded-full bg-gray-dark py-1 px-8 text-primary mx-16">
      </div>
    </div>
  </section>
</template>
<style scoped>
  .gradient::before {
    height: 1200px;
  }
</style>