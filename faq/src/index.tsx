import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import faq, { excerpt, title } from '../../config/src/faq';

export const FAQ = ({ question, answer, defaultOpen }) => (
  <Disclosure defaultOpen={defaultOpen}>
    {({ open }) => (
      <>
        <Disclosure.Button
          as="div"
          className={`flex items-center py-2 text-xl ${
            open ? ' text-primary' : ''
          }`}
        >
          {question}{' '}
          {!open ? (
            <ChevronDownIcon className="ml-2 w-5 h-5" />
          ) : (
            <ChevronUpIcon className="ml-2 w-5 h-5" />
          )}
        </Disclosure.Button>
        <Disclosure.Panel as="p" className="text-gray-mid text-md py-4">
          {answer}
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);

export default () => (
  <section className="mx-auto p-4 grid md:grid-cols-2 max-w-4xl w-full gap-8">
    <div>
      <h2 className="text-4xl">{title}</h2>
      <p>{excerpt}</p>
    </div>
    <div>
      {faq.map((props, idx) => (
        <FAQ key={idx} defaultOpen={idx === 0} {...props} />
      ))}
    </div>
  </section>
);
