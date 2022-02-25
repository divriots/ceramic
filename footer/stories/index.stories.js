import Footer from '../src/index.vue';
import '~/tailwind';

export default {
  parameters: {
    // backgrounds: { default: '#F3F4F6' },
  },
};

const Template = (args) => ({
  components: { Footer },
  setup() {
    return { args };
  },
  template: `<div><Footer v-bind="args"/></div>`,
});

const baseArgs = {
  subscribe: 'https://somewhere.com/subscribe/post?u=UID&id=ID',
  contact: 'hello@backlight.dev',
};

const routes = {
  linksRoutes: [
    {
      pathname: 'whatever',
      label: 'DS Mastery',
    },
    {
      pathname: 'whatever',
      label: 'DS Sessions',
    },
    {
      pathname: 'whatever',
      label: 'Doc',
    },
    {
      pathname: 'whatever',
      label: 'Blog',
    },
    {
      pathname: 'whatever',
      label: 'Pricing',
    },
  ],
  supportRoutes: [
    {
      pathname: 'whatever',
      label: 'Community',
    },
    {
      pathname: 'whatever',
      label: 'Send us an email',
    },
    {
      pathname: 'whatever',
      label: 'Terms of Service',
    },
    {
      pathname: 'whatever',
      label: 'Privacy Policy',
    },
  ],
};

export const home_version = Template.bind({});
home_version.args = {
  ...routes,
  ...baseArgs,
  imgSrc: '/img/landing/hero.png',
  version: 'homepage',
};

export const short_version = Template.bind({});
short_version.args = {
  ...routes,
  ...baseArgs,
};
