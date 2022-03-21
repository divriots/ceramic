import React, { useEffect } from 'react';
import TestimonialCard from '../../testimonial-card/src/index';
import './styles.scss';
import { setupScrollArrows } from '../../highlight/src/scroll-arrows';
import { setupDragHandling } from '../../highlight/src/drag-handling';

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
              Real <span className="text-primary">people</span>, great feedback
            </h2>
            <p className="my-4 text-lg font-light text-gray-light">
              This is what our users think
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
            viewBox="0 0 20 20"
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
              <div className="w-64 mr-4 lg:mr-40">
                <TestimonialCard comment={comment} />
              </div>
            ))}
          </article>
          <svg
            id="testimonial-right-paddle"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
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
            <div className="flex flex-col items-center max-w-xs text-sm my-4 sm:my-0">
              <img className="opacity-70 white" src={item.logo} />
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
                  <g fill="currentColor">
                    <path d="m8.08 5.369l2.14 2.14H4.468v1h5.68L8.08 10.574l.707.707l2.956-2.957v-.707L8.788 4.662l-.707.707Z"></path>
                    <path d="M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12Zm0-1A5 5 0 1 0 8 3a5 5 0 0 0 0 10Z"></path>
                  </g>
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
