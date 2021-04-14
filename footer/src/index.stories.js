import Footer from './index.vue';
import './index.vue.css';
import 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css';

export default {
  parameters: {
    backgrounds: { default: '#F3F4F6' },
  },
};
export const story1 = () => ({
  components: { Footer },
  template: `<div><Footer/></div>`,
});
