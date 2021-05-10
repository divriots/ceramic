<template>
  <nav class="mt-2">
    <i class="codicon codicon-close"></i>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <!-- Mobile menu button-->
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
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
          <a href="/" class="flex-shrink-0 flex items-center block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" class="block h-8 w-auto -mt-8">
              <path fill="#8767AC" d="M36 1C16.118 1 1 16.118 1 36h17.042c0-9.917 8.042-17.958 17.958-17.958V1z" />
              <path fill="#EB2027"
                d="M0 35.999h3.042c0-18.189 14.734-32.935 32.917-32.957V0C16.095.023 0 16.131 0 35.999z" />
              <path fill="#F19020"
                d="M3.083 36h3C6.083 19.468 19.473 6.065 36 6.043v-3C17.817 3.065 3.083 17.811 3.083 36z" />
              <path fill="#FFCB4C"
                d="M6.083 36h3C9.083 21.125 21.13 9.065 36 9.043v-3C19.473 6.065 6.083 19.468 6.083 36z" />
              <path fill="#5C903F"
                d="M9.083 36h3c0-13.217 10.705-23.935 23.917-23.957v-3C21.13 9.065 9.083 21.125 9.083 36z" />
              <path fill="#226798"
                d="M12.083 36h3c0-11.56 9.362-20.934 20.917-20.956v-3.001C22.788 12.065 12.083 22.783 12.083 36z" />
            </svg>
            <span class="text-xl">Design-Systems.dev</span>
          </a>
        </div>

        <div class="hidden md:block md:ml-6">
          <div class="flex">
            <a href="/blog"
              class="text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Blog</a>
            <a href="/docs"
              class="text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Documentation</a>
            <a href="/pricing"
              class="text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
            <Discord />
            <Twitter />
          </div>
        </div>
        <!-- Profile dropdown -->
        <!-- <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <details class="ml-3 relative">
            <summary
              class="bg-gray-800 text-white px-4 py-2 flex text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              id="user-menu" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              Studio
            </summary>
            <div
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20"
              role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your
                Profile</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
            </div>
          </details>
        </div> -->
      </div>
    </div>

    <!-- Mobile menu -->
    <input class="hidden" type="checkbox" id="navexpander" checked />
    <div id="mobile-menu" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 text-left">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="/blog" class="bg-gray-300 text-black block px-3 py-2 rounded-md text-base font-medium">Blog</a>
        <a href="/docs"
          class="text-gray-700 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Documentation</a>
        <a href="/pricing"
          class="text-gray-700 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
        <Discord>Discord</Discord>
        <Twitter>Twitter</Twitter>
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
export default {
  components: { Twitter, Discord },
};
</script>