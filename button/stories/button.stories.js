import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'black' },
  },
};

export const btn_primary = () => /*html*/ `
  <div>
    <a class="btn-primary" href="#">This is an anchor</a>
    <button class="btn-primary" onclick="alert('clicked')">This is a button</button>
  </div>
`;

export const btn_secondary = () => /*html*/ `
  <div>
    <a class="btn-secondary" href="#">This is an anchor</a>
    <button class="btn-secondary" onclick="alert('clicked')">This is a button</button>
  </div>
`;

export const btn_text = () => /*html*/ `
  <div>
    <a class="btn-text" href="#">This is an anchor</a>
    <button class="btn-text" onclick="alert('clicked')">This is a button</button>
  </div>
`;
