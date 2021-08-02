import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

export const FAQ = ({ question, answer, defaultOpen }) => (
  <Disclosure defaultOpen={defaultOpen}>
    {({ open }) => (
      <>
        <Disclosure.Button
          as="div"
          style={{ WebkitAppearance: 'none' }}
          className={`flex justify-between items-center pt-6 text-xl cursor-pointer ${
            open ? ' text-primary' : ''
          }`}
        >
          {question}
          {!open ? (
            <ChevronDownIcon className="flex-shrink-0 w-5 h-5" />
          ) : (
            <ChevronUpIcon className="flex-shrink-0 w-5 h-5" />
          )}
        </Disclosure.Button>
        <Disclosure.Panel as="p" className={`text-white text-md pt-2`}>
          {answer}
        </Disclosure.Panel>
        <div className="mt-6 border-b-1 border-gray-light"></div>
      </>
    )}
  </Disclosure>
);

export default ({ excerpt, title, faq }) => (
  <section className="text-white mx-auto px-8 pt-16 pb-32 grid md:grid-cols-2 max-w-4xl w-full gap-8">
    <div>
      <h2 className="text-4xl">{title}</h2>
      <p>{excerpt}</p>
    </div>
    <div>
      {faq.map((props, idx) => (
        <FAQ key={idx} {...props} />
      ))}
    </div>
  </section>
);
