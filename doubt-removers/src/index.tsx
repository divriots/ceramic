import React from 'react';
import content from './content';

function DoubtRemovers() {
  return (
    <section className="bg-black-divriots text-white px-4 py-12 -my-2">
      <article className="overflow-hidden">
        <h3
          data-aos="fade-left"
          className="main-title text-center my-10 sm:my-20"
          dangerouslySetInnerHTML={{ __html: content.data.title }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 py-24 px-12 gap-24">
          {content.data.promises.map((promise, index: number) => (
            <div
              key={index}
              data-aos="fade-up"
              className="min-w-full mx-auto md:flex"
            >
              <div className=" w-16 h-16 md:w-20 md:h-20 md:mx-4 mb-8 md:mb-0">
                <div
                  className="w-16 h-16 md:w-20 md:h-20"
                  dangerouslySetInnerHTML={{ __html: promise.img.src }}
                ></div>
              </div>

              <div className="text-lg text-gray-divriots flex-col">
                <span className="text-3xl font-semibold ">{promise.title}</span>
                <p className="py-8"> {promise.description}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default DoubtRemovers;
