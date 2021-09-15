import React from 'react';
import './style.css';

function ProductHuntBar() {
  return (
    <div className="flex justify-center items-center text-black-default relative">
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle" id="testLabel" className="absolute right-2">
        <svg
          id="closeBanner"
          width="1.25rem"
          height="1.25rem"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"
          />
        </svg>
      </label>

      <a
        href="https://www.producthunt.com/posts/backlight?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-backlight"
        id="banner"
        target="_blank"
        rel="noopener"
        className="flex justify-center items-center flex-grow bg-primary h-16 controlled"
      >
        <p className="text-lg md:text-xl font-semibold mx-6">
          <span className="md:mx-4">🎉</span>We are live on{' '}
          <span className="underline">Product Hunt</span>!
          <span className="md:mx-4">🎉</span>
        </p>
      </a>
    </div>
  );
}

export default ProductHuntBar;
