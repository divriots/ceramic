import React from 'react';
import FAQ from '../src/FAQ';
import '~/tailwind/src/styles.css';
import { pricingFAQ } from '../../config/src/faq';

export default {
  parameters: {
    backgrounds: { default: 'black' },
  },
};

export const q_and_a = () => (
  <FAQ
    className="bg-gray-divriots"
    title="F.A.Q."
    excerpt="Lorem ipsum"
    faq={pricingFAQ}
  />
);
