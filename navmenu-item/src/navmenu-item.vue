<template>
  <a :href="route.pathname" :class="`
      action
      text-inherit
      ml-2
      ${isMobile ? 'px-2 py-1 block' : 'px-3'}
      ${isActive ? 'text-primary font-semibold active' : 'font-normal'}
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