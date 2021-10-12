import React from 'react';

import Testimonial from '../src/index';
import '~/tailwind';

export const story1 = () => (
  <Testimonial
    title="Real Stories from Design System Enthusiats"
    subtitle="Get inspired by these stories."
    testimonials={[
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit nisl tortor, ac sodales justo pellentesque sed.',
        author: 'Lorem ipsum dolor',
        author_title: 'Lorem ipsum dolor sit amet',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit nisl tortor, ac sodales justo pellentesque sed. Integer efficitur viverra lacus, eget condimentum mauris dictum ut. Nulla a semper eros. Curabitur eget condimentum urna. Aliquam sit amet lectus vehicula, mattis nibh quis, vestibulum odio. Cras posuere sodales mauris, ac aliquam dui ornare et. Curabitur tincidunt elit a purus elementum iaculis. Cras egestas dictum orci vitae vestibulum. Sed quis lacus lectus.',
        author: 'Lorem ipsum dolor',
        author_title: 'Lorem ipsum dolor sit amet',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit nisl tortor, ac sodales justo pellentesque sed. Integer efficitur viverra lacus, eget condimentum mauris dictum ut. Nulla a semper eros. Curabitur eget condimentum urna. Aliquam sit amet lectus vehicula, mattis nibh quis, vestibulum odio. Cras posuere sodales mauris, ac aliquam dui ornare et. Curabitur tincidunt elit a purus elementum iaculis. Cras egestas dictum orci vitae vestibulum. Sed quis lacus lectus.',
        author: 'Lorem ipsum dolor',
        author_title: 'Lorem ipsum dolor sit amet',
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit nisl tortor, ac sodales justo pellentesque sed. Integer efficitur viverra lacus, eget condimentum mauris dictum ut.',
        author: 'Lorem ipsum dolor',
        author_title: 'Lorem ipsum dolor sit amet',
      },
    ]}
  ></Testimonial>
);
