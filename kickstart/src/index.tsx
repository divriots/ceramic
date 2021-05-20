import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import kits from '../../config/src/starter-kits';

const StarterKit = ({ name, href, imgSrc }) => (
  <a href={href} key={name} className="inline-flex items-center p-2 gap-2">
    <img className="w-8 h-8" src={imgSrc} />
    <span>{name}</span>
  </a>
);

export default () => (
  <section className="p-4 sm:p-10 justify-center items-center flex flex-col md:flex-row bg-black-default text-white gap-8 md:gap-16">
    <div className="max-w-md p-10 bg-primary rounded-lg flex-grow grid justify-center">
      <span className="inline-flex w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        <ChevronDownIcon
          className="w-5 h-5 mr-2 -ml-1 text-violet-200"
          aria-hidden="true"
        />
        StarterKits
      </span>
      <div className="py-2 px-4 w-56 bg-black-default rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {kits.map((s, index) => (
          <StarterKit key={index} {...s} />
        ))}
      </div>
    </div>
    <div className="max-w-md text-left p-4">
      <h2 className="font-semibold mx-auto text-3xl">
        Kickstart your{' '}
        <span className="text-primary whitespace-nowrap">design system</span> in
        one click with one of our starter-kits
      </h2>
      <div className="flex mt-8 gap-2">
        <a href="#" className="btn-primary">
          Start now
        </a>
        <a href="https://calendly.com/gg_/backlight" className="btn">
          Ask a Demo
        </a>
      </div>
    </div>
  </section>
);
