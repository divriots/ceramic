import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import kits from '../../config/src/starter-kits';
import { dropbox } from '../../config/src/commons';

const StarterKit = ({ name, href, imgSrc }) => (
  <a href={href} key={name} className="inline-flex items-center p-2 space-x-2">
    <img className="w-8 h-8" src={imgSrc} />
    <span>{name}</span>
  </a>
);

export default () => (
  <section className="p-4 sm:p-10 justify-center items-center flex flex-col md:flex-row bg-black-default text-white space-y-8 md:space-x-16">
    <div className="max-w-md p-10 bg-secondary rounded-lg flex-grow grid justify-center">
      <img src={dropbox('kickstart.png')} />
    </div>
    <div className="max-w-md text-left p-4">
      <h2 className="font-semibold mx-auto text-3xl">
        Kickstart your{' '}
        <span className="text-secondary whitespace-nowrap">Design System</span>{' '}
        in one click with one of our starter-kits
      </h2>
      <div className="flex mt-8 space-2">
        <a href="/get-started" className="btn-secondary">
          Start now
        </a>
        <a
          href="https://calendly.com/gg_/backlight"
          className="btn text-secondary"
          target="_blank"
        >
          Ask a Demo
        </a>
      </div>
    </div>
  </section>
);
