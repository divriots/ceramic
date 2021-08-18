<template>
  <aside class="sidenav">
    <NavGroup
      v-for="node in context.pagesGraph"
      :key="node.key"
      :node="node"
      :currentPage="context.currentPage"
    ></NavGroup>
  </aside>
  <div class="root">
    <h1 class="text-xl">{{ context.currentPage.data.title }}</h1>
    <span v-html="content" />
  </div>
</template>
<script>
import NavGroup from './NavGroup.vue';
import '~/tailwind/src/styles.css';

export default {
  components: { NavGroup },
  computed: {},
  props: {
    content: { type: String, required: true },
    context: { type: Object, required: true },
  },
};
</script>
<style lang="scss" scoped>
.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  border: solid 1px blue;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.root {
  margin-left: 160px;
  padding: 5em;
  border: solid 1px red;
}
</style>
