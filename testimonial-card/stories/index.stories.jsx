import React from 'react';

import TestimonialCard from '../src/index';
import '~/tailwind';

const comment = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit nisl tortor, ac sodales justo pellentesque sed.',
  author: 'Lorem ipsum dolor',
  author_title: 'Lorem ipsum dolor sit amet',
  author_logo: 'https://backlight.dev/assets/lib-white/sass.svg',
  author_logo_alt: 'test',
};

export const story1 = () => (
  <TestimonialCard comment={comment}></TestimonialCard>
);
