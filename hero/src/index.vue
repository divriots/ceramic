<script>
import DoubleCtaVue from '../../double-cta/src/double-cta.vue';
export default {
  setup: () => ({ DoubleCtaVue }),
};
</script>
<template>
  <section
    class="
      gradient
      text-white
      hero
      w-full
      overflow-hidden
      my-8
      sm:my-16
      md:my-24
      lg:my-28
      xl:my-32
    "
  >
    <div class="wrapper max-w-6xl mx-auto">
      <div
        class="
          relative
          z-10
          lg:max-w-2xl lg:w-full
          self-center
          py-8
          sm:py-12
          md:py-16
          lg:py-20
          xl:py-28
        "
      >
        <div class="flex justify-center px-4 md:px-16">
          <div class="text-left">
            <h1 class="main-title font-semibold leading-normal">
              <span class="text-primary whitespace-nowrap">
                Design Systems,
              </span>
              <span class="block">Code-side</span>
            </h1>
            <p class="main-subtitle mt-3 sm:mt-5 sm:mx-auto md:mt-5 lg:mx-0">
              All-in-one Design System platform.
              <br />
              Build components and reference site.
              <br />
              Developers and Designers together.
            </p>
            <component
              :is="DoubleCtaVue"
              :primaryText="'Request early access'"
              :primaryHref="'/request-earlyaccess'"
              :secondaryText="'Book a demo'"
              :secondaryHref="'https://calendly.com/gg_/backlight'"
            ></component>
          </div>
        </div>
      </div>
      <div class="relative hidden md:block">
        <img class="absolute max-w-none h-full" src="/img/landing/hero.png" />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.gradient .wrapper {
  min-height: 400px;

  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 6fr 4fr;
  }
}

.gradient.hero::before {
  height: 1200px;
}
</style>
