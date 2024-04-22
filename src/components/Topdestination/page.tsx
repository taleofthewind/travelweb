"use client";
import image1 from "@public/images/destinations/paris.jpg";
import image2 from "@public/images/destinations/borabora.jpg";
import image3 from "@public/images/destinations/glacierpark.jpg";

import React from "react";
import DestinationSlider from "./Slider/DestinationSlider";

const page = () => {
  return (
    <div className='mt-[6rem] mb-[4rem] '>
      <h1 className='heading text-center text-[22px] sm:text-[32px] md:text-[38px] font bold capitalize'>
        Top Destination
      </h1>
      <div className=''>
        <DestinationSlider />
      </div>
    </div>
  );
};

export default page;
