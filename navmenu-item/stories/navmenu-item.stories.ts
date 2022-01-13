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
      pathname: '#',
      label: 'Pricing',
      external: true,
    },
  }),
  template: `<NavMenuItem :route="route" :external=true />`,
});
