<template>
  <nav class="mt-2">
    <i class="codicon codicon-close"></i>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 right-0 flex items-center md:hidden">
          <label
            for="navexpander"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            tabIndex="{0}"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
        <component :is="Logo" class="text-xl">Design-Systems.dev</component>
        <div class="hidden md:block md:ml-6">
          <div class="flex">
            <a :href="route.href" v-for="route of routes" key="route"
              class="text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">{{route.label}}</a>
            <component :is="Discord"></component>
            <component :is="Twitter"></component>
          </div>
        </div>
      </div>
    </div>

    <input class="hidden" type="checkbox" id="navexpander" checked />
    <div id="mobile-menu" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 text-left">
        <a :href="route.href" v-for="route of routes" key="route"
          :class="`btn bg-gray-300 block text-base font-medium ${current==route?'text-primary font-semibold':''}`">{{route.label}}</a>
        <component :is="Discord">Discord</component>
        <component :is="Twitter">Twitter</component>
      </div>
    </div>
  </nav>
</template>
<style scoped>
  #navexpander:checked~#mobile-menu {
    display: none;
  }
</style>
<script>
  import Twitter from '../../twitter/src/index.vue';
import Discord from '../../discord/src/index.vue';
import Logo from '../../logo/src/index.vue'
export default {
  props:{
    routes: {type: Array, required: true}
  },
  computed:{
    current(){ 
      return this.routes.find(r=>location.href.endsWith(r.href))
    }
  },
  setup() { return { Logo, Twitter, Discord }}
};
</script>