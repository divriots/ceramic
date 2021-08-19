import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'black' },
  },
};

export const simple_title = () =>
  /*html*/ `<h1 class="title text-primary whitespace-nowrap">Design Systems</h1>`;

export const double_title = () => /*html*/ `
  <h1 class="title">
    <span class="text-primary whitespace-nowrap">Design Systems,</span>
    <span class="text-white">Code-side</span>
  </h1>`;

export const double_title_multiline = () => /*html*/ `
  <h1 class="title">
    <span class="text-primary whitespace-nowrap">Design Systems,</span>
    <span class="block text-white">Code-side</span>
  </h1>`;
