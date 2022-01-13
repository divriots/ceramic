import { NavMenuItem } from '~/navmenu-item';
import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const inactive = () => ({
  components: { NavMenuItem },
  data: () => ({
    route: {
      pathname: '#',
      label: 'Pricing',
    },
  }),
  template: `<NavMenuItem :route="route" />`,
});

export const active = () => ({
  components: { NavMenuItem },
  data: () => ({
    route: {
      pathname: '#',
      label: 'Pricing',
    },
    isActive: true,
  }),
  template: `<NavMenuItem :route="route" :isActive="isActive"/>`,
});

export const inactive_mobile = () => ({
  components: { NavMenuItem },
  data: () => ({
    route: {
      pathname: '#',
      label: 'Pricing',
    },
    isMobile: true,
  }),
  template: `<NavMenuItem :route="route" />`,
});

export const active_mobile = () => ({
  components: { NavMenuItem },
  data: () => ({
    route: {
      pathname: '#',
      label: 'Pricing',
    },
    isActive: true,
    isMobile: true,
  }),
  template: `<NavMenuItem :route="route" :isActive="isActive"/>`,
});

export const external_link = () => ({
  components: { NavMenuItem },
  data: () => ({
    route: {
      pathname: 'https://google.com',
      label: 'Google',
    },
  }),
  template: `<NavMenuItem :route="route" />`,
});

export const external_link_in_current_tab = () => ({
  components: { NavMenuItem },
  data: () => ({
    route: {
      pathname: 'https://google.com',
      label: 'Google',
      external: false,
    },
  }),
  template: `<NavMenuItem :route="route" />`,
});
