import React from 'react';

import Testimonial from '../src/index';
import '~/tailwind';
import comments from './content';

export const story1 = () => (
  <Testimonial
    title="Real Stories from Design System Enthusiats"
    subtitle="Get inspired by these stories."
    comments={comments}
  ></Testimonial>
);
