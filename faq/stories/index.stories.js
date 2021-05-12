import React from 'react';
import FAQ from '../src/FAQ';
import '~/tailwind/src/styles.css';
import { landingFAQ } from '../../config/src/faq';

export const q_and_a = () => (
  <FAQ title="F.A.Q." excerpt="Lorem ipsum" faq={landingFAQ} />
);
