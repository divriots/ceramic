<script>
  export default {};
</script>
<template>
  <section
    class="gradient hero w-full overflow-hidden mt-16 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
    <div class="relative z-10 lg:max-w-2xl lg:w-full self-center">
      <div class="flex justify-center px-8 md:px-16">
        <div class="text-left">
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black-default sm:text-5xl md:text-5xl leading-normal">
            <span class="block text-primary whitespace-nowrap"
              >Design Systems,</span>
            <span class="block">Code-side</span>
          </h1>
          <p class="mt-3 text-base text-gray-mid sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Build your Front-end source of truth.<br />
            Collaborate & maintain on the go.<br />
            Get efficiency & consistency you deserve.
          </p>
          <div class="flex mt-8 space-x-2">
            <a href="/waitlist" class="btn-primary">Start now</a>
            <a href="https://calendly.com/gg_/backlight" class="btn text-primary" target="_blank">
              Ask a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="img relative hidden sm:block overflow-x-hidden">
    </div>
  </section>
</template>
<style scoped>
  .img {
    background-image: url('https://storage.googleapis.com/tmp-gg/hero.png');
    background-size: auto 100%;
    background-repeat: no-repeat;
  }

  .gradient.hero {
    min-height: 400px;

    display: grid;
    grid-template-columns: 6fr 4fr;
  }

  .gradient.hero::before {
    height: 1200px;
  }
</style>