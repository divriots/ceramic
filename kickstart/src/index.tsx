import React from 'react';


const StarterKit = ({ name, href, imgSrc }) => (
  <a href={href} key={name} className="inline-flex items-center p-2 space-x-2">
    <img className="w-8 h-8" src={imgSrc} />
    <span>{name}</span>
  </a>
);

export default () => (
  <section className="bg-black-default text-white">
    <div className="mx-auto max-w-5xl px-8 py-20 grid md:grid-cols-2 place-items-center items-center gap-4 ">
      <div
        className="h-64 w-64 sm:w-80 sm:h-80 xl:h-96 xl:w-96 bg-no-repeat bg-contain rounded-lg"
        style={{ backgroundImage: 'url("https://backlight.dev/assets/icons/rocket.svg")' }}
      ></div>
      <div className="w-64 sm:w-80 xl:w-96 text-left">
        <h2 className="font-semibold mx-auto text-3xl">
          Kickstart your{' '}
          <span className="text-secondary whitespace-nowrap">
            Design System
          </span>{' '}
          in one click with one of our starter-kits
        </h2>
        <div className="flex mt-8 space-x-4">
          <a href="https://divriots.typeform.com/to/h3dOxxEz" className="btn-secondary" target="_blank">
            Request early access
          </a>
          <a
            href="https://calendly.com/gg_/backlight"
            className="btn text-secondary"
            target="_blank"
          >
            Book a demo
          </a>
        </div>
      </div>
    </div>
  </section>
);
