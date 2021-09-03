import ActionDescription from '../src/ActionDescription.vue';
import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const normal = () => ({
  components: { ActionDescription },
  template: `<ActionDescription v-bind="props" description="Get started">{{ props.desc }}</ActionDescription>`,
});

export const big = () => ({
  components: { ActionDescription },
  template: `<ActionDescription v-bind="props" description="Get started" size="big">{{ props.desc }}</ActionDescription>`,
});
