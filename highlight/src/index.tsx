import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import kits from './data';

const CardKit = ({ name, desc, href, hero_img, bg_img, backgroundColor }) => (
  <div
    className="relative overflow-hidden text-left flex flex-col text-white rounded-lg space-y-4 p-6 w-64 sm:w-80"
    style={{ height: '420px', backgroundColor }}
  >
    <img className="h-32 w-full" src={hero_img} />
    <header className="text-bold text-xl">{name}</header>
    <p className="flex-grow">{desc}</p>
    <a href={href} className="flex items-center">
      Discover
      <ChevronRightIcon className="w-6 h-6" aria-hidden="true" />
    </a>
    {bg_img && (
      <img
        className="absolute h-48 w-auto right-0 bottom-0 opacity-watermark transform -rotate-12 translate-x-8 translate-y-8"
        src={bg_img}
      />
    )}
  </div>
);

export default () => (
  <section className="text-center grid gap-8 md:gap-4 relative mt-20">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl px-4">
      Be a <span className="text-primary whitespace-nowrap">Design System</span>{' '}
      hero!
    </h2>
    <p className="text-lg text-gray-mid px-4">
      Select the Starter-kits with the right technology for you.<br/>
      You are not far from releasing your first Design System.
    </p>
    <div className="bg-black-divriots py-48 mt-48 overflow-hidden flex justify-center">
      <div className="scrollable-horizontal max-w-full px-8 py-16 sm:px-16 absolute bottom-0 space-x-16">
        {kits
          .filter(({ highlight }) => !highlight)
          .map((kit, idx) => (
            <CardKit className="" key={idx} {...kit} />
          ))}
        <a
          href="/starterkits"
          className="bg-secondary relative overflow-hidden grid items-center text-4xl text-bold text-center text-black-default rounded-lg gap-4 p-6 w-64 sm:w-80"
          style={{ height: '420px' }}
        >
          Explore all Starter-kits
        </a>
      </div>
    </div>
  </section>
);
