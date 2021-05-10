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
    className="text-left flex flex-col text-white rounded-lg gap-4 p-6"
    style={{ height: '420px', width: '280px', backgroundColor }}
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
    <h2 className="text-4xl">
      Kickstart with one of our{' '}
      <span className="text-primary">starter-kits</span>
    </h2>
    <p className="text-sm text-gray-mid">asdfasdfa sdfasdfasdfasf</p>
    <div className="bg-black-divriots py-48 mt-48 overflow-hidden">
      <div className="scrollable-horizontal max-w-full p-16 absolute bottom-0 gap-16">
        {kits
          .filter(({ highlight }) => !highlight)
          .map((kit, idx) => (
            <CardKit className="" key={idx} {...kit} />
          ))}
      </div>
    </div>
  </section>
);
