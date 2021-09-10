<template>
  <component :is="NavMenuItem" v-for="route of routes" :route="route" :key="route" :isMobile="true"
    :isActive="current === route"></component>
  <a href="/studio" class="btn-primary ml-2 inline-block">Studio</a>
</template>
<style scoped>
  #navexpander:checked~#mobile-menu {
    display: none;
  }
</style>
<script>
  import NavMenuItem from '../../navmenu-item/src/navmenu-item.vue';
export default {
  props: {
    routes: { type: Array, required: true },
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