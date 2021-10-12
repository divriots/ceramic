import React from 'react';

import TestimonialCard from '../src/index';
import '~/tailwind';
import comments from '~/testimonial/stories/content.js';

const comment = comments[0];

export const story1 = () => (
  <TestimonialCard comment={comment}></TestimonialCard>
);
