<template>
  <section class="text-center grid gap-8 md:gap-4 relative">
    <h2 class="title px-4">
      Kickstart your
      <span class="text-primary whitespace-nowrap">Design System</span>
    </h2>
    <p class="text-lg text-white px-4 leading-relaxed">
      Select the Starter-kits with the right technology for you.
      <br />
      <!-- You are not far from releasing your first Design System. -->
    </p>
    <div
      class="bg-black-divriots py-56 mt-32 overflow-hidden flex justify-center"
    >
      <div
        class="
          scrollable-horizontal
          max-w-full
          px-8
          py-16
          sm:px-16
          absolute
          bottom-0
          space-x-16
        "
      >
        <component
          :is="StarterCard"
          v-for="kit of kits.filter(({ highlight }) => !highlight)"
          :key="kit.name"
          v-bind="kit"
          actionDescription="Request early access"
        >
          {{ kit.desc }}
        </component>
        <component
          :is="EmptyCard"
          url="/request-earlyaccess"
          class="bg-primary"
        >
          <div
            class="
              w-full
              h-full
              flex
              items-center
              text-3xl
              sm:text-4xl
              text-bold text-center text-black-default
            "
          >
            Many other Starter-kits available in different technologies
          </div>
        </component>
      </div>
    </div>
  </section>
</template>

<script>
import { StarterCard } from '../../starter-card';
import { EmptyCard } from '../../empty-card';
import kits from './data';

export default {
  computed: {
    kits: () => kits,
  },
  data: () => ({ EmptyCard, StarterCard }),
};
</script>
