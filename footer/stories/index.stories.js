import Footer from '../src/index.vue';
import '~/tailwind';

export default {
  parameters: {
    // backgrounds: { default: '#F3F4F6' },
  },
};
export const home_version = () => ({
  components: { Footer },
  template: `<div><Footer subscribe="https://somewhere.com/subscribe/post?u=UID&id=ID" imgSrc="/img/landing/hero.png" version="homepage" contact="hello@backlight.dev"/></div>`,
});
export const short_version = () => ({
  components: { Footer },
  template: `<div><Footer subscribe="https://somewhere.com/subscribe/post?u=UID&id=ID" contact="hello@backlight.dev"/></div>`,
});
