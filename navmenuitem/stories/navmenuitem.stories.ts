import { NavMenuItem } from '~/navmenuitem';
import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const nav_menu_item_inactive = () => ({
  components: { NavMenuItem },
  data: () => ({
    route: {
      pathname: '#',
      label: 'Pricing',
    },
  }),
  template: `<NavMenuItem :route="route" />`,
});

export const nav_menu_item_active = () => ({
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

export const nav_menu_item_inactive_mobile = () => ({
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

export const nav_menu_item_active_mobile = () => ({
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
