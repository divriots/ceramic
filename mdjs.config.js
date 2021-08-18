import Layout from './layout';
import { html } from 'lit-html';

export default {
  htmlParser: html,
  layout: (content, context) => ({
    components: { Layout },
    template: `<Layout :content="content" :context="context">`,
    setup() {
      return { content, context };
    },
  }),
};
