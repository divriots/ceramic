import Footer from './index.vue';
import '~/tailwind.css';

export default {
  parameters: {
    backgrounds: { default: '#F3F4F6' },
  },
};
export const story1 = () => ({
  components: { Footer },
  template: `<div><Footer/></div>`,
});
