import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'black' },
  },
};

export const href_primary_button = () =>
  /*html*/ `<a class="btn-primary" href="#">Request early access</a>`;

export const click_primary_button = () =>
  /*html*/ `<button class="btn-primary" onclick="alert('clicked')">Request early access</button>`;

export const href_secondary_button = () =>
  /*html*/ `<a class="btn-secondary" href="#">Request early access</a>`;

export const click_secondary_button = () =>
  /*html*/ `<button class="btn-secondary" onclick="alert('clicked')">Request early access</button>`;

export const href_text_button = () =>
  /*html*/ `<a class="btn-text" href="#">Book a demo</button>`;

export const click_text_button = () =>
  /*html*/ `<button class="btn-text" onclick="alert('clicked')">Book a demo</button>`;
