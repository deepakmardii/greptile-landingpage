import React from "react";

const FeatureItem = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="pt-6 pb-4 space-y-2 flex items-center gap-4">
      <div>
        <img src={imageSrc} alt={altText} className=" w-40" />
      </div>
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-neutral-300">
          {title}
        </h1>
        <p className="text-neutral-500 text-xs lg:text-base">{description}</p>
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <section className="bg-black text-white font-mono dark:bg-gray-800 dark:text-gray-50">
      <div className="container grid grid-cols-12 mx-auto">
        <div className="flex flex-col justify-center col-span-12 bg-no-repeat bg-cover lg:col-span-5 lg:h-auto dark:bg-gray-700">
          <div className="flex flex-col items-center p-4 py-12 text-center">
            <h1 className="py-4 text-3xl lg:text-5xl font-bold">
              24/7 Subject-matter expert.
            </h1>
            <p className="pb-6">
              Greptile answers questions like that one 100X dev on your team
              who's been around for years and knows the codebase cold.
            </p>
          </div>
        </div>
        <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-7 lg:p-10 dark:divide-gray-700">
          <FeatureItem
            imageSrc="lock.webp"
            altText="lock"
            title="Security First"
            description="Use our SOC2 Type II compliant cloud, or deploy to your own AWS account with an air-gapped VPC!"
          />
          <FeatureItem
            imageSrc="repo.webp"
            altText="repo"
            title="Multiple repos"
            description="Search across multiple branches of multiple repos all at once. Multi-repo codebases, open-source dependencies, and more!"
          />
          <FeatureItem
            imageSrc="code.webp"
            altText="code"
            title="Navigate code 10X faster."
            description="Locate code deeply hidden in messy, legacy codebases by simply describing it in plain English."
          />
          <FeatureItem
            imageSrc="lang.webp"
            altText="lang"
            title="100+ Supported Languages"
            description="Thanks to our semantic abstraction layer, Greptile works with most public programming languages."
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;
