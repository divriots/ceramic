<script>
export default {
  props: { imgSrc: String },
};
</script>
<template>
  <section class="font-space-grotesk">
    <div class="sm:flex md:justify-center sm:px-16 bg-gray-darker text-white">
      <div class="flex-col md:max-w-lg xl:max-w-md p-4 sm:my-auto">
        <h2 class="font-semibold mb-4 text-3xl lg:text-5xl">
          See it for yourself
        </h2>
        <p
          class="font-light text-gray-light text-sm sm:text-normal lg:text-lg leading-normal"
        >
          You can start today with getting to know Backlight, or we can show all
          its features to you and your team, no strings attached.
        </p>
        <div class="flex mt-8 space-x-8">
          <a class="btn-primary" href="/get-started">Get Started</a>
          <a
            href="https://calendly.com/backlight_/demo"
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="btn-outline"
          >
            Book a demo
          </a>
        </div>
      </div>
      <div class="md:max-w-lg pt-8 md:pt-16 px-4 md:pr-6">
        <img
          :src="imgSrc"
          loading="lazy"
          alt="Backlight interface Figma integration"
        />
      </div>
    </div>
  </section>
</template>
