import Footer from '../src/index.vue';
import '~/tailwind';

export default {
  parameters: {
    // backgrounds: { default: '#F3F4F6' },
  },
};
export const story1 = () => ({
  components: { Footer },
  template: `<div><Footer subscribe="https://somewhere.com/subscribe/post?u=UID&id=ID"/></div>`,
});
