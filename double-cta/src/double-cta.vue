<script>
  export default {
  props: {
    primaryText: { type: String, required: false },
    primaryHref: { type: String, required: false },
    secondaryText: { type: String, required: false },
    secondaryHref: { type: String, required: false },
  },
};
</script>
<template>
  <div class="flex mt-8 space-x-2">
    <a v-if="primaryText" class="btn-primary" :href="primaryHref">{{ primaryText }}</a>
    <a v-if="secondaryText" class="btn-text" :href="secondaryHref">{{ secondaryText }}</a>
  </div>
</template>