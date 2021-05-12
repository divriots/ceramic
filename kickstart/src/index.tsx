import React from 'react';
import Menu from '../../dropdown/src/index';
import { ChevronDownIcon } from '@heroicons/react/solid';
import kits from '../../config/src/starter-kits';

const StarterKit = ({ name, href, imgSrc }) => (
  <Menu.Item
    as="a"
    href={href}
    key={name}
    className="text-primary inline-flex p-2 gap-2"
  >
    <img className="w-8 h-8" src={imgSrc} />
    <span>{name}</span>
  </Menu.Item>
);

export default () => (
  <section className="p-4 sm:p-10 justify-center items-center flex flex-col md:flex-row bg-black-default text-white gap-8 md:gap-16">
    <div className="max-w-md p-10 bg-primary rounded-lg flex-grow grid justify-center">
      <Menu>
        <Menu.Button className="inline-flex w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <ChevronDownIcon
            className="w-5 h-5 mr-2 -ml-1 text-violet-200"
            aria-hidden="true"
          />
          StarterKits
        </Menu.Button>
        <Menu.Items
          className="py-2 px-4 w-56 bg-black-default rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          static
        >
          {kits.map((s, index) => (
            <StarterKit key={index} {...s} />
          ))}
        </Menu.Items>
      </Menu>
    </div>
    <div className="max-w-md text-left p-4">
      <h2 className="font-semibold mx-auto text-3xl">
        Kickstart with one of our{' '}
        <span className="text-primary">stater-kits</span>
      </h2>
      <p className="mt-8 max-w-sm text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu velit eu
        tellus scelerisque porttitor. Nullam dictum finibus quam, in mollis nisi
        rhoncus at. Nulla lacinpsn
      </p>
      <div className="flex overflow-auto">
        <slot name="starterkit"></slot>
      </div>
    </div>
  </section>
);
