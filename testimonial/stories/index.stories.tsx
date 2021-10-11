import React from 'react';

import Testimonial from '../src/index';
import '~/tailwind';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

export const story1 = () => (
  <Testimonial
    title="Real Stories from Design System Enthusiats"
    subtitle="Get inspired by these stories."
    testimonials={[
      {
        text: 'The next generation of tooling to help teams build, ship, and evolve design systems.',
        author: 'Kaelig Deloumeau-Prigent',
        author_title:
          'Developer tooling at Shopify, and co-chair of the Design Tokens W3C Community Group',
      },
      {
        text: 'I have been following what those guys are doing since the early days, and the promise of Backlight completely sells me. [...] Thanks to Backlight for easing our product team collaboration at Qovery. Backlight is a must-have for all product-driven companies and teams. I recommend.',
        author: 'Romaric Philogène',
        author_title: 'CEO, co-founder and product developer of Qovery',
      },
      {
        text: 'We’ve had the privilege to deep dive into <div>Riots’ Backlight in private beta for the past 6 months. Not only does the platform save our teams a crucial time in terms of Design System development, but this best-in-class solution enables designers and developers to smoothly collaborate. Collaboration in web design has been a pain point for many years and we are excited to see innovation in the space.',
        author: 'Olivier Grandhomme',
        author_title: 'CTO at Saqara',
      },
      {
        text: 'Woow. As a seasoned frontend engineer I really liked it. Design System is essential and had to be put from the start. Later on the development it is really hard to adopt one. I will keep looking after Backlight. Good job team!',
        author: 'Mustafa Ilker Sarac',
        author_title: 'Engineer, Thundraio',
      },
    ]}
  ></Testimonial>
);

