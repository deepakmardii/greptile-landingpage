"use client";
import React from "react";
import { IoIosPeople } from "react-icons/io";
import { IoBug } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsFillSkipForwardCircleFill } from "react-icons/bs";

const Feature0 = () => {
  return (
    <>
      <section className="bg-black text-white font-mono">
        <div className="container mx-auto p-4 space-y-2 text-center py-20">
          <h2 className="text-4xl lg:text-7xl font-bold">Goodbye, docs 👋</h2>
          <p className="lg:px-32 text-base lg:text-xl dark:text-gray-400 font-semibold text-neutral-300">
            Greptile can answer hard questions on complex codebases better than
            any other tool. Where we're going, we don't need docs.
          </p>
        </div>
        <div className="mx-auto flex flex-wrap gap-10 justify-center px-2">
          <button className="relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-emerald-800 bg-gradient-to-r from-emerald-900 to-emerald-950 px-6 font-medium text-emerald-300 shadow-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-50">
            <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300" />
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

          <button className="relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-emerald-800 bg-gradient-to-r from-emerald-900 to-emerald-950 px-6 font-medium text-emerald-300 shadow-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-50">
            <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300" />

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
          <button className="relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-emerald-800 bg-gradient-to-r from-emerald-900 to-emerald-950 px-6 font-medium text-emerald-300 shadow-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-50">
            <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300" />
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

          <button className="relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-emerald-800 bg-gradient-to-r from-emerald-900 to-emerald-950 px-6 font-medium text-emerald-300 shadow-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-50">
            <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300" />
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
