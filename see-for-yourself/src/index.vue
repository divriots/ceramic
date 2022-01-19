<script>
export default {
  props: { imgSrc: String },
};
</script>
<template>
  <section class="font-space-grotesk">
    <div class="sm:flex md:justify-center sm:px-16 bg-gray-darker text-white">
      <div class="flex-col md:max-w-lg xl:max-w-md p-4 sm:my-auto">
        <h1 class="font-light mb-4 text-2xl md:text-2xl lg:text-4xl">
          See it for yourself
        </h1>
        <p
          class="text-gray-light text-sm sm:text-normal lg:text-lg leading-normal"
        >
          You can start today with getting to know Backlight, or we can show all
          its features to you and your team, no strings attached.
        </p>
        <div
          class="flex flex-col sm:flex-row mt-6 sm:space-x-8 text-sm sm:text-normal lg:text-lg whitespace-nowrap"
        >
          <a
            class="btn-primary rounded-sm text-center mb-4 sm:mb-0"
            href="/get-started"
          >
            Get Started
          </a>
          <a
            href="https://calendly.com/backlight_"
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="btn-outline rounded-sm text-center"
          >
            Book a demo
          </a>
        </div>
      </div>
      <div class="md:max-w-lg pt-8 md:pt-16 px-4 md:pr-6">
        <img :src="imgSrc" loading="lazy" />
      </div>
    </div>
  </section>
</template>
