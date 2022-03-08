import Switch from '~/switch/src/switch.vue';
import '~/tailwind';

export const story1 = () => ({
  components: { Switch },
  data() {
    return {};
  },
  template: `<Switch name="" title="" toggled="true" />`,
});
