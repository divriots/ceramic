import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import './scrollable.css';
import kits from '../../config/src/starter-kits';

const CardKit = ({
  name,
  description,
  href,
  imgSrc,
  thumbSrc,
  backgroundColor,
}) => (
  <div
    className="text-left flex flex-col text-white rounded-lg gap-4 p-6 w-64 sm:w-80"
    style={{ height: '420px', backgroundColor }}
  >
    <img className="h-40 w-full" src={thumbSrc} />
    <img className="h-8 w-8" src={imgSrc} />
    <header className="text-bold text-xl">{name}</header>
    <p className="flex-grow">{description || 'ad'}</p>
    <a href={href} className="flex items-center">
      Discover
      <ChevronRightIcon className="w-8 h-8" aria-hidden="true" />
    </a>
  </div>
);

export default () => (
  <section className="text-center grid gap-8 md:gap-4 relative">
    <h2 className="text-4xl sm:text-5xl lg:text-6xl">
      Start your{' '}
      <span className="text-primary whitespace-nowrap">design system</span> in
      one-click
    </h2>
    <p className="text-lg text-gray-mid">
      Kickstart with one of our starter-kits. Most popular technologies
      supported.
      <br />
      Spend time building amazing products, not maintaining your Design System.
    </p>
    <div className="bg-black-divriots py-48 mt-48 overflow-hidden">
      <div className="scrollable-horizontal max-w-full px-8 py-16 sm:px-16 absolute bottom-0 gap-16">
        {kits
          .filter(({ highlight }) => !highlight)
          .map((kit, idx) => (
            <CardKit className="" key={idx} {...kit} />
          ))}
      </div>
    </div>
  </section>
);
