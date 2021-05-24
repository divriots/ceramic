import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

const StarterKit = ({ name, href, imgSrc }) => (
  <a href={href} key={name} className="inline-flex items-center p-2 gap-2">
    <img className="w-8 h-8" src={imgSrc} />
    <span>{name}</span>
  </a>
);

export default () => (
  <section className="p-4 sm:p-10 justify-center items-center flex flex-col md:flex-row bg-black-default text-white gap-8 md:gap-16">
    <div className="max-w-md p-10 bg-secondary rounded-lg flex-grow grid justify-center"></div>
    <div className="max-w-md text-left p-4">
      <h2 className="font-semibold mx-auto text-3xl">
        Kickstart your{' '}
        <span className="text-secondary whitespace-nowrap">Design System</span>{' '}
        in one click with one of our starter-kits
      </h2>
      <div className="flex mt-8 gap-2">
        <a href="#" className="btn-secondary">
          Start now
        </a>
        <a
          href="https://calendly.com/gg_/backlight"
          className="btn text-secondary"
        >
          Ask a Demo
        </a>
      </div>
    </div>
  </section>
);
