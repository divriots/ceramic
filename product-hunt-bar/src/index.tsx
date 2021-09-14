import React from 'react';

function ProductHuntBar() {
  const [isVisible, setIsVisible] = React.useState(true);

  function hideBar() {
    setIsVisible(false);
  }

  if (isVisible) {
    return (
      <a
        href="https://www.producthunt.com/posts/backlight?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-backlight"
        className="bg-primary text-white h-16 text-black-default flex justify-center items-center relative"
      >
        <p className="text-lg md:text-xl font-semibold mx-6">
          <span className="md:mx-4">🎉</span>We are live on{' '}
          <span className="underline">Product Hunt</span>!
          <span className="md:mx-4">🎉</span>
        </p>
        <svg
          onClick={(event) => {
            event.preventDefault();
            hideBar();
          }}
          className="absolute right-2"
          width="1.25rem"
          height="1.25rem"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"
          />
        </svg>
      </a>
    );
  } else {
    return null;
  }
}

export default ProductHuntBar;
