import React, { useEffect } from 'react';
import TestimonialCard from '../../testimonial-card/src/index.tsx';
import './styles.scss';
import { setupScrollArrows } from '../../highlight/src/scroll-arrows.js';
import { setupDragHandling } from '../../highlight/src/drag-handling.js';

function Testimonial({ comments, featured }) {
  useEffect(() => {
    setupScrollArrows(
      'testimonial-left-paddle',
      'testimonial-right-paddle',
      'testimonial-container'
    );
    setupDragHandling('testimonial-container');
  }, []);
  return (
    <section className="top-box-shadow bg-black-divriots overflow-hidden text-white leading-normal text-base sm:text-lg py-12 -my-2">
      <div className="w-full">
        <div className="relative flex justify-center">
          {/*Title and subtitle*/}
          <div className="relative z-10 pt-16 px-8 text-center">
            <h2 className="text-5xl font-semibold">
              Don't take our <span className="text-primary">word</span> for
              it...
            </h2>
            <p className="my-4 text-lg font-light text-gray-light">
              Check out what our users think.
            </p>
          </div>
        </div>
        {/*Wrapper for horizontal scroll and scroll arrows*/}
        <div id="testimonial-wrapper">
          <svg
            id="testimonial-left-paddle"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.928 7.976l4.357 4.357-.618.62L5 8.284v-.618L9.667 3l.618.619-4.357 4.357z"
            />
          </svg>
          <article
            id="testimonial-container"
            className={`flex items-center max-w-full overflow-x-scroll pl-8 pr-4 ${
              comments.length <= 5 ? '2xl:justify-center' : ''
            }`}
          >
            {/*Testimonials*/}
            {comments.map((comment, index: number) => (
              <div key={index} className="w-64 mr-4 lg:mr-40">
                <TestimonialCard comment={comment} />
              </div>
            ))}
          </article>
          <svg
            id="testimonial-right-paddle"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
        {/*Featured in section*/}
        <div className="flex flex-col sm:flex-row justify-around items-center my-6 sm:my-12 sm:my-20 max-w-5xl m-auto">
          {featured.map((item, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center max-w-xs text-sm my-4 sm:my-0"
            >
              <img
                className="opacity-70 white"
                src={item.logo}
                alt={item.logo_alt}
              />
              <p className="opacity-50 font-light uppercase my-2">
                {item.featured_type}
              </p>
              <a
                className="text-primary font-light py-1.5 my-2"
                href={item.featured_url}
              >
                {item.link_text}{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--codicon inline"
                  width="14"
                  height="14"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619l4.357-4.357z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
