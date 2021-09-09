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
    primaryText="Get started"
    primaryHref="/get-started"
    secondaryText="Book a demo"
    secondaryHref="https://calendly.com/gg_/backlight"
  ></double-cta>`;

export const vue = () => ({
  components: { DoubleCtaVue },
  data: () => ({
    primaryText: 'Get started',
    primaryHref: '/get-started',
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
    primaryText="Get started"
    primaryHref="/get-started"
    secondaryText="Book a demo"
    secondaryHref="https://calendly.com/gg_/backlight"
  />
);

export const svelte = () => ({
  Component: DoubleCtaSvelte,
  props: {
    primaryText: 'Get started',
    primaryHref: '/get-started',
    secondaryText: 'Book a demo',
    secondaryHref: 'https://calendly.com/gg_/backlight',
  },
});
