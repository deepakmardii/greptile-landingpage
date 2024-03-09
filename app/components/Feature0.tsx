"use client";
import React from "react";
import { IoIosPeople } from "react-icons/io";
import { IoBug } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsFillSkipForwardCircleFill } from "react-icons/bs";
import { useRef, useState } from "react";

const Feature0 = () => {
  const divRef = useRef<HTMLButtonElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  return (
    <>
      {/* <section className="p-4 lg:p-8 bg-black text-white">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://source.unsplash.com/640x480/?1"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <span className="text-xs uppercase dark:text-gray-400">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src="https://source.unsplash.com/640x480/?2"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <span className="text-xs uppercase dark:text-gray-400">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://source.unsplash.com/640x480/?3"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <span className="text-xs uppercase dark:text-gray-400">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">
                We're not reinventing the wheel
              </h3>
              <p className="my-6 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start">
                Action
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-black text-white font-mono">
        <div className="container mx-auto p-4 space-y-2 text-center py-20">
          <h2 className="text-4xl lg:text-7xl font-bold">Goodbye, docs 👋</h2>
          <p className="px-32 text-base lg:text-xl dark:text-gray-400 font-semibold text-neutral-300">
            Greptile can answer hard questions on complex codebases better than
            any other tool. Where we're going, we don't need docs.
          </p>
        </div>
        <div className="mx-auto flex flex-wrap gap-10 justify-center">
          <button
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-emerald-800 bg-gradient-to-r from-emerald-900 to-emerald-950 px-6 font-medium text-emerald-300 shadow-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-50"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity,
                background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), #0000000f)`,
              }}
            />
            <div className="flex flex-col items-center p-4">
              <IoIosPeople className="h-20 w-20 lg:h-36 lg:w-36" />
              <h3 className="my-3 text-3xl font-semibold">
                Onboard Developers
              </h3>
              <div className="space-y-1 leadi text-white font-semibold">
                <p>
                  Ramp up new engineers to your <br /> codebase 10x faster!
                </p>
              </div>
            </div>
          </button>

          <button
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-emerald-800 bg-gradient-to-r from-emerald-900 to-emerald-950 px-6 font-medium text-emerald-300 shadow-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-50"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity,
                background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), #0000000f)`,
              }}
            />

            <div className="flex flex-col items-center p-4">
              <IoBug className="h-20 w-20 lg:h-36 lg:w-36" />
              <h3 className="my-3 text-3xl font-semibold">Debug 10X Faster</h3>
              <div className="space-y-1 leadi text-white font-semibold">
                <p>
                  Paste-in an error message and let <br /> Greptile diagnose it!
                </p>
              </div>
            </div>
          </button>
          <button
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-emerald-800 bg-gradient-to-r from-emerald-900 to-emerald-950 px-6 font-medium text-emerald-300 shadow-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-50"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity,
                background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), #0000000f)`,
              }}
            />
            <div className="flex flex-col items-center p-4">
              <IoDocumentTextOutline className="h-20 w-20 lg:h-36 lg:w-36" />
              <h3 className="my-3 text-3xl font-semibold">Replace your docs</h3>
              <div className="space-y-1 leadi text-white font-semibold">
                <p>
                  Developers don't like writing <br /> docs. Now, they don't
                  have to!
                </p>
              </div>
            </div>
          </button>

          <button
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-emerald-800 bg-gradient-to-r from-emerald-900 to-emerald-950 px-6 font-medium text-emerald-300 shadow-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-50"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity,
                background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), #0000000f)`,
              }}
            />
            <div className="flex flex-col items-center p-4">
              <BsFillSkipForwardCircleFill className="h-20 w-20 lg:h-36 lg:w-36" />
              <h3 className="my-3 text-3xl font-semibold">Crush Tech Debt</h3>
              <div className="space-y-1 leadi text-white font-semibold">
                <p>
                  Parse legacy code with ease, so <br /> you can focus on
                  shipping.
                </p>
              </div>
            </div>
          </button>
        </div>
      </section>
    </>
  );
};

export default Feature0;
