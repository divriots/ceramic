import '../index';
import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'black' },
  },
};

export const double_cta = () => /*html*/ `<double-cta
  primaryText="Request early access"
  primaryHref="/request-earlyaccess"
  secondaryText="Book a demo"
  secondaryHref="https://calendly.com/gg_/backlight"
></double-cta>`;
