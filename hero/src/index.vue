<script>
  export default {};
</script>
<template>
  <section
    class="gradient hero mx-auto max-w-5xl grid md:grid-cols-2 overflow-hidden mt-16 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28 place-items-center">
    <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <div class="mx-auto max-w-7xl pl-4 lg:pr-6">
        <div class="text-left">
          <h1
            class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black-default sm:text-5xl md:text-5xl leading-normal">
            <span class="block text-primary whitespace-nowrap">Design Systems,</span>
            <span class="block">Code-side</span>
          </h1>
          <p class="mt-3 text-base text-gray-mid sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Build your Front-end source of truth.<br/>
            Collaborate & maintain on the go.<br/>
            Get efficiency & consistency you deserve.
          </p>
          <div class="flex mt-8 space-x-2">
            <a href="/get-started" class="btn-primary">
              Start now
            </a>
            <a href="https://calendly.com/gg_/backlight" class="btn text-primary" target="_blank">
              Ask a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="relative hidden md:grid gap-4 pt-12 pb-24 px-4 items-center w-96">
      <img src="https://via.placeholder.com/400"/>
    </div>
  </section>
</template>
<style scoped>
  .gradient.hero::before {
    height: 1200px;
  }
</style>