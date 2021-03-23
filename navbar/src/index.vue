<template>
  <nav class="bg-white mt-2">
    <i class="codicon codicon-close"></i>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <!-- Mobile menu button-->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <label for="navexpander" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" tabIndex={0}>
          <span class="sr-only">Open main menu</span>
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          </label>
        </div>
        <!-- <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
          <div class="flex-shrink-0 flex items-center">
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
          </div>
        </div> -->
        <!-- <div class="hidden sm:block sm:ml-6">
          <div class="flex">
            <a href="#"
              class="text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Blog</a>
            <a href="#"
              class="text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Documentation</a>
            <a href="#"
              class="text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
            <a href="#" aria-label="discord"
              class="text-gray-700 hover:bg-gray-100 hover:text-black pl-3 pt-1 rounded-md text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-26.25 -50 227.5 300" class="h-auto w-6"
                fill="currentColor">
                <path
                  d="M69.4 83.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zm36.5 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" />
                <path
                  d="M154.5 0h-134C9.2 0 0 9.2 0 20.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V20.6C175 9.2 165.8 0 154.5 0zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z" />
              </svg></a>
            <a href="#" aria-label="twitter"
              class="text-gray-700 hover:bg-gray-100 hover:text-black pl-3 pt-1 rounded-md text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-44.7006 -60.54775 387.4052 363.2865" class="h-auto w-8"
                fill="currentColor">
                <path
                  d="M93.719 242.19c112.46 0 173.96-93.168 173.96-173.96 0-2.646-.054-5.28-.173-7.903a124.338 124.338 0 0030.498-31.66c-10.955 4.87-22.744 8.148-35.11 9.626 12.622-7.57 22.313-19.543 26.885-33.817a122.62 122.62 0 01-38.824 14.841C239.798 7.433 223.915 0 206.326 0c-33.764 0-61.144 27.381-61.144 61.132 0 4.798.537 9.465 1.586 13.941-50.815-2.557-95.874-26.886-126.03-63.88a60.977 60.977 0 00-8.279 30.73c0 21.212 10.794 39.938 27.208 50.893a60.685 60.685 0 01-27.69-7.647c-.009.257-.009.507-.009.781 0 29.61 21.075 54.332 49.051 59.934a61.218 61.218 0 01-16.122 2.152 60.84 60.84 0 01-11.491-1.103c7.784 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.798-.28-14.584-.846 27.059 17.344 59.189 27.464 93.722 27.464" />
              </svg></a>
          </div>
        </div>
      </div> -->
        <!-- Profile dropdown -->
        <!-- <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <details class="ml-3 relative">
            <summary
              class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              id="user-menu" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
            <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
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
    <input class="hidden" type="checkbox" id="navexpander" checked/>
    <div id="mobile-menu" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="#" class="bg-gray-300 text-black block px-3 py-2 rounded-md text-base font-medium">Blog</a>
        <a href="#"
          class="text-gray-700 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Documentation</a>
        <a href="#"
          class="text-gray-700 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
        <a href="#" aria-label="discord"
          class="flex items-center justify-between text-gray-700 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
          Discord
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-26.25 -50 227.5 300" class="w-6 inline">
            <path
              d="M69.4 83.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zm36.5 0c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" />
            <path
              d="M154.5 0h-134C9.2 0 0 9.2 0 20.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V20.6C175 9.2 165.8 0 154.5 0zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z" />
          </svg></a>
        <a href="#" aria-label="twitter"
          class="flex items-center justify-between text-gray-700 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
          Twitter
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-44.7006 -60.54775 387.4052 363.2865" class="w-8 inline">
            <path
              d="M93.719 242.19c112.46 0 173.96-93.168 173.96-173.96 0-2.646-.054-5.28-.173-7.903a124.338 124.338 0 0030.498-31.66c-10.955 4.87-22.744 8.148-35.11 9.626 12.622-7.57 22.313-19.543 26.885-33.817a122.62 122.62 0 01-38.824 14.841C239.798 7.433 223.915 0 206.326 0c-33.764 0-61.144 27.381-61.144 61.132 0 4.798.537 9.465 1.586 13.941-50.815-2.557-95.874-26.886-126.03-63.88a60.977 60.977 0 00-8.279 30.73c0 21.212 10.794 39.938 27.208 50.893a60.685 60.685 0 01-27.69-7.647c-.009.257-.009.507-.009.781 0 29.61 21.075 54.332 49.051 59.934a61.218 61.218 0 01-16.122 2.152 60.84 60.84 0 01-11.491-1.103c7.784 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.798-.28-14.584-.846 27.059 17.344 59.189 27.464 93.722 27.464" />
          </svg>
        </a>
      </div>
    </div>
  </nav>
</template>
<style>
  #navexpander:checked~#mobile-menu {
    display: none;
  }
</style>
<script>
  export default {};
</script>