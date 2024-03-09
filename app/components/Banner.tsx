import React from "react";

const Banner = () => {
  return (
    <section>
      <div className="bg-black text-white font-mono">
        <div className="container flex flex-col items-center px-4 py-16 mx-auto text-center md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="bg-gradient-to-t from-[#c7d2fe] to-[#00cc55] bg-clip-text text-5xl font-bold sm:text-7xl xl:max-w-3xl text-transparent">
            Ship more features, faster.
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-10 xl:max-w-3xl dark:text-gray-900">
            Spend less time wrangling the codebase and more time shipping.
            Greptile answers your hardest questions about any codebase in plain
            English.
          </p>
          <img
            src="greptile.webp"
            alt="asssd"
            className="w-28 mx-auto rounded-lg shadow-md dark:bg-gray-500 h-28 mb-10"
          />
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-emerald-700 text-white"
            >
              Get started
            </button>
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg border rounded border-emerald-700"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
