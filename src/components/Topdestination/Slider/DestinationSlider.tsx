import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const DestinationSlider = () => {
  return (
    <div className='p-[40px]'>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='grid justify-center'>
            <img
              src='/images/destinations/paris.jpg'
              alt='destination'
              className=''
              width={300}
              height={300}
            />
            <p className='text-center'>Paris</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='grid justify-center'>
            <img
              src='/images/destinations/paris.jpg'
              alt='destination'
              className=''
              width={300}
              height={300}
            />
            <p className='text-center'>Paris</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='grid justify-center'>
            <img
              src='/images/destinations/paris.jpg'
              alt='destination'
              className=''
              width={300}
              height={300}
            />
            <p className='text-center'>Paris</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='grid justify-center'>
            <img
              src='/images/destinations/paris.jpg'
              alt='destination'
              className=''
              width={300}
              height={300}
            />
            <p className='text-center'>Paris</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='grid justify-center'>
            <img
              src='/images/destinations/paris.jpg'
              alt='destination'
              className=''
              width={300}
              height={300}
            />
            <p className='text-center'>Paris</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='grid justify-center'>
            <img
              src='/images/destinations/paris.jpg'
              alt='destination'
              className=''
              width={300}
              height={300}
            />
            <p className='text-center'>Paris</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DestinationSlider;
