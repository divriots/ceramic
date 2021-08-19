import React from 'react';
import { DoubleCtaVue, DoubleCtaReact, DoubleCtaSvelte } from '~/double-cta';
import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'black' },
  },
};

export const webcomponent = () => /*html*/ `
  <double-cta
    primaryText="Request early access"
    primaryHref="/request-earlyaccess"
    secondaryText="Book a demo"
    secondaryHref="https://calendly.com/gg_/backlight"
  ></double-cta>`;

export const vue = () => ({
  components: { DoubleCtaVue },
  data: () => ({
    primaryText: 'Request early access',
    primaryHref: '/request-earlyaccess',
    secondaryText: 'Book a demo',
    secondaryHref: 'https://calendly.com/gg_/backlight',
  }),
  template: `
    <DoubleCtaVue
      :primaryText="primaryText"
      :primaryHref="primaryHref"
      :secondaryText="secondaryText"
      :secondaryHref="secondaryHref"/>
  `,
});

export const react = () => (
  <DoubleCtaReact
    primaryText="Request early access"
    primaryHref="/request-earlyaccess"
    secondaryText="Book a demo"
    secondaryHref="https://calendly.com/gg_/backlight"
  />
);

export const svelte = () => ({
  Component: DoubleCtaSvelte,
  props: {
    primaryText: 'Request early access',
    primaryHref: '/request-earlyaccess',
    secondaryText: 'Book a demo',
    secondaryHref: 'https://calendly.com/gg_/backlight',
  },
});
