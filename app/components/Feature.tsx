import React from "react";

const Feature = () => {
  return (
    <section className="bg-black text-white font-mono">
      <div className="dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-12 mx-auto">
          <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover dark:bg-gray-700 lg:col-span-5 lg:h-auto">
            <div className="flex flex-col items-center p-8 py-12 text-center">
              <h1 className="py-4 text-5xl font-bold">
                24/7 Subject-matter expert.
              </h1>
              <p className="pb-6">
                Greptile answers questions like that one 100X dev on your team
                who's been around for years and knows the codebase cold.
              </p>
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-7 lg:p-10 dark:divide-gray-700">
            <div className="pt-6 pb-4 space-y-2 flex items-center gap-4">
              <div>
                <img src="lock.webp" alt="lock" className="w-40 " />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-neutral-300">
                  Security First
                </h1>
                <p className="text-neutral-500">
                  Use our SOC2 Type II compliant cloud, or deploy to your own
                  AWS account with an air-gapped VPC!
                </p>
              </div>
            </div>
            <div className="pt-6 pb-4 space-y-2 flex items-center gap-4">
              <div>
                <img src="repo.webp" alt="lock" className="w-40 " />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-neutral-300">
                  Multiple repos
                </h1>
                <p className="text-neutral-500">
                  Search across multiple branches of multiple repos all at once.
                  Multi-repo codebases, open source dependencies and more!
                </p>
              </div>
            </div>
            <div className="pt-6 pb-4 space-y-2 flex items-center gap-4">
              <div>
                <img src="code.webp" alt="lock" className="w-40 " />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-neutral-300">
                  Find and understand code 10X faster.
                </h1>
                <p className="text-neutral-500">
                  Locate code deeply hidden in messy, legacy codebases by simply
                  describing it in plain English.
                </p>
              </div>
            </div>
            <div className="pt-6 pb-4 space-y-2 flex items-center gap-4">
              <div>
                <img src="lang.webp" alt="lock" className="w-40 " />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-neutral-300">
                  100+ Supported Languages
                </h1>
                <p className="text-neutral-500">
                  Thanks to our semantic abstraction layer, Greptile works with
                  most public programming languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
