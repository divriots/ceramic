import Card from '../src/index.vue';
import '~/tailwind/src/styles.css';

export default {
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'black' },
  },
};

const props = {
  title: 'Hello',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  href: '#',
  tags: ['Label', 'Label'],
  published_time: new Date().toLocaleDateString(),
  image:
    'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80',
};

export const wide = () => ({
  components: { Card },
  setup() {
    return { props };
  },
  template: `<Card wide v-bind="props"/>`,
});

export const normal = () => ({
  components: { Card },
  setup() {
    return { props };
  },
  template: `<Card v-bind="props"/>`,
});
