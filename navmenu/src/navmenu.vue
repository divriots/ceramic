<template>
  <component
    :is="NavMenuItem"
    v-for="route of routes"
    :route="route"
    :key="route"
    :isMobile="true"
    :isActive="current === route"
  ></component>
  <a :href="studioRoute" class="btn-outline ml-2 inline-block">Log in</a>
</template>
<style scoped>
#navexpander:checked ~ #mobile-menu {
  display: none;
}
</style>
<script>
import NavMenuItem from '../../navmenu-item/src/navmenu-item.vue';
export default {
  props: {
    routes: { type: Array, required: true },
    studioRoute: { type: String, required: true },
    pathname: { type: String, default: '' },
    isMobile: { type: Boolean, default: false },
  },
  computed: {
    current() {
      return this.routes.find((r) => this.pathname.startsWith(r.pathname));
    },
  },
  setup() {
    return { NavMenuItem };
  },
};
</script>
