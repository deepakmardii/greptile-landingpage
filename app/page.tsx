import React from "react";
import Banner from "./components/Banner";
import greptile from "../public/greptile.webp";
import Stats from "./components/Stats";
import Testimonial from "./components/Testimonial";
import Feature from "./components/Feature";
import Feature0 from "./components/Feature0";
import Blog from "./components/Blog";

const page = () => {
  return (
    <div>
      <Banner />
      {/* <img src='/greptile.webp' alt="logo" /> */}
      <Stats />
      <Feature0 />
      <Feature />
      <Testimonial />
      <Blog />
    </div>
  );
};

export default page;
