import React from 'react';

import Testimonial from '../src/index';
import '~/tailwind';
import comments from './comments';
import featured from './featured';

export const story1 = () => (
  <Testimonial comments={comments} featured={featured}></Testimonial>
);
