<template>
  <ul>
    <li>
      <a
        v-if="node.page"
        class="pl-4"
        :href="url(node.page)"
        :style="
          node.page.input === currentPage.input ? 'font-weight: bold' : ''
        "
      >
        {{ node.key }}
      </a>
      <div v-else class="border-t-2 border-fuchsia-600 text-xl">
        {{ node.key }}
      </div>
      <NavGroup
        v-for="child in node.children"
        :key="child.key"
        :node="child"
        :currentPage="currentPage"
      ></NavGroup>
    </li>
  </ul>
</template>
<script>
import * as path from 'path';
export default {
  props: {
    node: { type: Object, required: true },
    currentPage: { type: Object, required: true },
  },
  methods: {
    url(page) {
      return path.relative(path.dirname(this.currentPage.url), page.url);
    },
  },
};
</script>
