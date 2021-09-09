<template>
  <nav class="mt-2 text-white">
    <div class="mx-auto px-2">
      <div class="relative flex items-center justify-between h-16">
        <component :is="Logo" class="text-xl"></component>
        <div class="hidden md:block md:ml-6 flex-grow">
          <div class="flex items-center justify-end">
            <component :is="NavMenu" :pathname="pathname" :routes="routes"></component>
          </div>
        </div>
        <div class="inset-y-0 right-0 flex items-center md:hidden">
          <label
            for="navexpander"
            class="btn"
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
      </div>
    </div>

    <input class="hidden" type="checkbox" id="navexpander" checked />
    <div id="mobile-menu" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 text-left">
        <component :is="NavMenu" :pathname="pathname" :routes="routes"></component>
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
  import NavMenu from '../../navmenu/src/navmenu.vue';
import Logo from '../../logo/src/logo.vue';
export default {
  components: { NavMenu },
  props: {
    routes: { type: Array, required: true },
    pathname: { type: String, default: '' },
  },
  setup() {
    return { Logo, NavMenu };
  },
};
</script>