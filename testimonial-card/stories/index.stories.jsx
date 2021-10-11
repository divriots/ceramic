import React from 'react';

import TestimonialCard from '../src/index';
import '~/tailwind';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

export const story1 = () => (
  <TestimonialCard
    text="The next generation of tooling to help teams build, ship, and evolve design systems."
    author="Kaelig Deloumeau-Prigent"
    author_title="Developer tooling at Shopify, and co-chair of the Design Tokens W3C Community Group"
  ></TestimonialCard>
);
