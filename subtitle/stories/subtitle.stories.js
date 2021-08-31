import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  decorators: [(story) => `<div class="hero">${story()}</div>`],
};

export const subtitle = () => /*html*/ `
  <p class="subtitle">
    All-in-one Design System platform.<br/>
    Build components and reference site.<br/>
    Developers and Designers together.
  </p>
`;
