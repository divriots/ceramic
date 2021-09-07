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
        ></h3>

        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {content.data.promises.map((promise, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="max-w-6xl mx-auto grid grid-cols-1 place-items-stretch py-20 gap-12 justify-items-center"
            >
              <span className="text-3xl font-semibold text-center">
                {promise.title}
              </span>
              <div className="max-w-xs">
                {
                  <img
                    src={promise.img.src}
                    loading="lazy"
                    className=" object-contain overflow-hidden w-full h-full"
                  />
                }
                {/*<video v-if="video" className="h-80 w-80 sm:w-96 sm:h-96 xl:h-128 xl:w-128" autoplay muted loop>
                <source src={promise.video.src} type="video/mp4"/>
                </video>*/}
              </div>

              <div
                className="text-lg grid text-gray-divriots gap-4 max-w-xs"
                dangerouslySetInnerHTML={{ __html: promise.description }}
              ></div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default DoubtRemovers;
