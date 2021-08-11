<script>
import '../../tailwind';
export default {
  props: {
    primaryText: { type: String, required: false },
    primaryHref: { type: String, required: false },
    primaryOnClick: { type: Function, required: false },
    secondaryText: { type: String, required: false },
    secondaryHref: { type: String, required: false },
    secondaryOnClick: { type: Function, required: false },
  },
};
</script>
<template>
  <div class="flex mt-8 space-x-2">
    <a v-if="primaryHref" class="btn-primary" :href="primaryHref">
      {{ primaryText }}
    </a>
    <button v-else class="btn-primary" :onclick="primaryOnClick">
      {{ primaryText }}
    </button>
    <a v-if="secondaryHref" class="btn-text" :href="secondaryHref">
      {{ secondaryText }}
    </a>
    <button v-else class="btn-text" :onclick="secondaryOnClick">
      {{ secondaryText }}
    </button>
  </div>
</template>
