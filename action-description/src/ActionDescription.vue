<template>
  <div :class="`action-description action-description-${size}`">
    {{ description }}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style="width: 1.5em; height: 1.5em"
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    description: { type: String },
    size: { type: String, default: 'normal' },
  },
};
</script>
<style lang="scss" scoped>
.action-description {
  display: flex;
  align-items: center;
  font-weight: bold;
  z-index: 1;
}

.action-description-big {
  font-size: 1.5em;
}
</style>
