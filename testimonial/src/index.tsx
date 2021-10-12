import React, { useEffect } from 'react';
import TestimonialCard from '../../testimonial-card/src/index';
import './styles.scss';
import { setupScrollArrows } from './scroll-arrows.js';
import { setupDragHandling } from './drag-handling.js';

function Testimonial({ title, subtitle, testimonials }) {
  useEffect(() => {
    setupScrollArrows();
    setupDragHandling();
  }, []);
  return (
    <section className="bg-black-divriots overflow-hidden text-white leading-normal text-base sm:text-lg px-8 py-12 -my-2 flex justify-center">
      <div className="w-full lg:w-auto">
        <div className="relative lg:w-920">
          {/*Big quote mark*/}
          <svg
            width="143"
            height="120"
            viewBox="0 0 143 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute"
          >
            <g opacity="0.3" clipPath="url(#clip0)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M142.373 18.7419C121.049 29.1541 110.387 41.3882 110.387 55.4447C119.476 56.4859 126.992 60.1735 132.934 66.5076C138.877 72.8417 141.849 80.1735 141.849 88.5033C141.849 97.3536 138.965 104.816 133.197 110.889C127.428 116.963 120.175 120 111.435 120C101.647 120 93.1701 116.052 86.0037 108.156C78.8374 100.26 75.2542 90.6725 75.2542 79.3926C75.2542 45.553 94.306 19.089 132.41 0L142.373 18.7419ZM67.1186 18.7419C45.6196 29.1541 34.8702 41.3882 34.8702 55.4447C44.134 56.4859 51.7373 60.1735 57.6801 66.5076C63.6229 72.8417 66.5943 80.1735 66.5943 88.5033C66.5943 97.3536 63.6666 104.816 57.8112 110.889C51.9557 116.963 44.6584 120 35.919 120C26.1308 120 17.6973 116.052 10.6184 108.156C3.53942 100.26 0 90.6725 0 79.3926C0 45.553 18.9643 19.089 56.8935 0L67.1186 18.7419Z"
                fill="#008594"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="143" height="120" fill="white" />
              </clipPath>
            </defs>
          </svg>

          {/*Title and subtitle*/}
          <div className="relative z-10 pt-16 max-w-96 sm:w-96 lg:ml-24">
            <h1 className="text-4xl sm:text-5xl">{title}</h1>
            <p className="my-4">{subtitle}</p>
          </div>
        </div>

        <div className="wrapper">
          <svg
            className="left-paddle lg:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.928 7.976l4.357 4.357-.618.62L5 8.284v-.618L9.667 3l.618.619-4.357 4.357z"
            />
          </svg>
          <article className="flex lg:grid lg:grid-cols-2 lg:w-920 overflow-x-scroll lg:overflow-visible">
            {/*Column 1*/}
            <div className="flex lg:block lg:ml-24">
              {/*Testimonial 1*/}
              <div className="w-64">
                <TestimonialCard
                  text={testimonials[0].text}
                  author={testimonials[0].author}
                  author_title={testimonials[0].author_title}
                />
              </div>
              {/*Testimonial 2*/}
              <div className="mx-4 lg:mx-0 w-64">
                <TestimonialCard
                  text={testimonials[1].text}
                  author={testimonials[1].author}
                  author_title={testimonials[1].author_title}
                />
              </div>
            </div>
            {/*Column 2*/}
            <div className="flex lg:block lg:-mt-48 lg:ml-12">
              {/*Testimonial 3*/}
              <div className="mr-4 lg:mr-0 w-64">
                <TestimonialCard
                  text={testimonials[2].text}
                  author={testimonials[2].author}
                  author_title={testimonials[2].author_title}
                />
              </div>
              {/*Testimonial 4*/}
              <div className="w-64">
                <TestimonialCard
                  text={testimonials[3].text}
                  author={testimonials[3].author}
                  author_title={testimonials[3].author_title}
                />
              </div>
            </div>
          </article>
          <svg
            className="right-paddle lg:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
