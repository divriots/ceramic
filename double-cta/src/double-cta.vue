<script>
import '../../tailwind';
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
    <a class="btn-primary" :href="primaryHref">{{ primaryText }}</a>
    <a class="btn-text" :href="secondaryHref">{{ secondaryText }}</a>
  </div>
</template>
