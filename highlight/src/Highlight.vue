<template>
  <section class="text-center grid gap-8 md:gap-4 relative mt-20">
    <h2 class="text-3xl sm:text-4xl lg:text-5xl px-4">
      Be a <span class="text-primary whitespace-nowrap">Design System</span
      >{{ ' ' }}
      hero!
    </h2>
    <p class="text-lg text-gray-dark px-4 leading-relaxed">
      Select the Starter-kits with the right technology for you.<br />
      You are not far from releasing your first Design System.
    </p>
    <div
      class="bg-black-divriots py-56 mt-48 overflow-hidden flex justify-center"
    >
      <div
        class="scrollable-horizontal max-w-full px-8 py-16 sm:px-16 absolute bottom-0 space-x-16"
      >
        <component
          :is="StarterCard"
          v-for="kit of kits.filter(({ highlight }) => !highlight)"
          :key="kit.name"
          v-bind="kit"
          actionDescription="Discover"
        >
          {{ kit.desc }}
        </component>
        <component :is="EmptyCard" url="/starterkits" class="bg-secondary">
          <div
            class="w-full h-full flex items-center text-4xl text-bold text-center text-black-default"
          >
            Explore all Starter-kits
          </div>
        </component>
      </div>
    </div>
  </section>
</template>

<script>
import StarterCard from '../../startercard/src/StarterCard.vue';
import EmptyCard from '../../startercard/src/EmptyCard.vue';
import kits from './data';

export default {
  computed: {
    kits() {
      return kits;
    }
  },
  data() { return { EmptyCard, StarterCard } },
};
</script>