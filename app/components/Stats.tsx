import React from "react";

const Stats = () => {
  return (
    <>
      <section className="bg-black text-gray-400 font-mono pb-20">
        <div className="container p-6 grayscale mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
          <h2 className="text-3xl font-bold">accelerating developers at</h2>
          <div className="flex flex-wrap justify-center lg:justify-between">
            <img
              src="/Meta.png"
              alt=""
              className="h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
            />
            <img
              src="/espn.png"
              alt=""
              className="h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
            />
            <img
              src="/helicone.png"
              alt=""
              className="h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
            />
            <img
              src="/schneider.png"
              alt=""
              className="h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
            />
            <img
              src="/tesla.png"
              alt=""
              className="h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
            />
            <img
              src="/spotify.png"
              alt=""
              className="h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
            />
            <img
              src="/nordic.png"
              alt=""
              className="h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-20">
          <img src="soc.webp" alt="asd" className="h-8 " />

          <img src="y.webp" alt="asd" className="h-8 " />
        </div>
      </section>
    </>
  );
};

export default Stats;
