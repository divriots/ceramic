<template>
  <a :href="route.pathname" :class="`
      text-inherit
      ml-2
      pb-1
      border-0 border-b-4 border-solid border-transparent
      ${isMobile ? 'px-2 py-1 block' : 'px-3'}
      ${isActive ? 'font-semibold active' : 'font-normal'}
      nav-link
    `">
    {{ route.label }}
  </a>
</template>
<script>
  export default {
  props: {
    route: { type: Object, required: true },
    isActive: { type: Boolean, default: false },
    isMobile: { type: Boolean, default: false },
  },
};
</script>