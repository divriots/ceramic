<template>
  <a :href="route.pathname" :class="`
      text-inherit
      ml-2
      ${isMobile ? 'px-2 py-1 block' : 'px-3'}
      ${isActive ? 'active' : ''}
      nav-link
    `">
    <span :class="`inline-block pb-1 border-0 border-b-4 border-solid border-transparent`">
      {{ route.label }}
    </span>
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