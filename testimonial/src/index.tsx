import React from 'react';

function Testimonial() {
  return (
    <section className="bg-black-divriots text-white leading-normal text-base sm:text-lg px-8 py-12 -my-2">
      <article className="place-items-center lg:grid lg:grid-cols-2 lg:w-920 m-auto">
        {/*Column 1*/}
        <div className="col-auto">
          <div className="relative">
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
            <div className="relative z-10 pt-16 lg:ml-24 lg:w-96">
              <h1 className="text-4xl sm:text-5xl">
                Real Stories from Real Users
              </h1>
              <p className="my-4">Get inspired by these stories.</p>
            </div>
          </div>
          {/*Testimonial 1*/}
          <div className="bg-black-default lg:ml-24 rounded-lg px-4 lg:px-8 py-5 flex flex-col lg:flex-row my-6 lg:w-96">
            <svg
              width="18"
              height="18"
              viewBox="0 0 143 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
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
            <div className="flex-col mt-2 mb-4 mx-3 max-w-3/4 sm:leading-relaxed sm:tracking-wide">
              <p>
                The next generation of tooling to help teams build, ship, and
                evolve design systems.
              </p>
              <p className="mt-6 font-semibold">Kaelig Deloumeau-Prigent</p>
              <p className="text-sm text-gray-light">
                Developer tooling at Shopify, and co-chair of the Design Tokens
                W3C Community Group
              </p>
            </div>
          </div>
          {/*Testimonial 2*/}
          <div className="bg-black-default lg:ml-24 rounded-lg px-4 lg:px-8 py-5 flex flex-col lg:flex-row my-6 lg:w-96">
            <svg
              width="18"
              height="18"
              viewBox="0 0 143 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
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
            <div className="flex-col mt-2 mb-4 mx-3 max-w-3/4 sm:leading-relaxed sm:tracking-wide">
              <p>
                I have been following what those guys are doing since the early
                days, and the promise of Backlight completely sells me. [...]
                Thanks to Backlight for easing our product team collaboration at
                Qovery. Backlight is a must-have for all product-driven
                companies and teams. I recommend.
              </p>
              <p className="mt-6 font-semibold">Romaric Philogène</p>
              <p className="text-sm text-gray-light">
                CEO, co-founder and product developer of Qovery
              </p>
            </div>
          </div>
        </div>
        {/*Column 2*/}
        <div className="col-auto ">
          {/*Testimonial 3*/}
          <div className="bg-black-default rounded-lg px-4 lg:px-8 py-5 flex flex-col lg:flex-row lg:w-96 lg:m-6">
            <svg
              width="18"
              height="18"
              viewBox="0 0 143 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
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
            <div className="flex-col mt-2 mb-4 mx-3 sm:leading-relaxed sm:tracking-wide">
              <p>
                Woow. As a seasoned frontend engineer I really liked it. Design
                System is essential and had to be put from the start. Later on
                the development it is really hard to adopt one. I will keep
                looking after Backlight. Good job team!
              </p>
              <p className="mt-6 font-semibold">Mustafa Ilker Sarac</p>
              <p className="text-sm text-gray-light">Engineer, Thundraio</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Testimonial;
