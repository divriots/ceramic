<template>
  <component
    :is="NavMenuItem"
    v-for="route of routes"
    :route="route"
    :key="route"
    :isMobile="true"
    :isActive="current === route"
  ></component>
  <component :is="Discord"></component>
  <component :is="Twitter"></component>
</template>
<style scoped>
#navexpander:checked ~ #mobile-menu {
  display: none;
}
</style>
<script>
import Twitter from '../../twitter/src/twitter.vue';
import Discord from '../../discord/src/discord.vue';
import NavMenuItem from '../../navmenu-item/src/navmenu-item.vue';
export default {
  props: {
    routes: { type: Array, required: true },
    pathname: { type: String, default: '' },
    isMobile: { type: Boolean, default: false },
  },
  computed: {
    current() {
      return this.routes.find((r) => this.pathname === r.pathname);
    },
  },
  setup() {
    return { NavMenuItem, Twitter, Discord };
  },
};
</script>
