import React from "react";
import Findbox from "@/components/Hero/searchbox";
const page = () => {
  return (
    <section>
      <div className='relative w-[100%] h-[88vh]'>
        <div className='absolute top-0 left-0 w-[100%] h-[100%] bg-blue-800 opacity-100'>
          <video
            src='/images/bghd.mp4'
            autoPlay
            muted
            loop
            preload='metadata'
            className='w-[100%] h-[100%] object-cover'
          />
          <div className='absolute z-[100] w-[100%] h-[100%] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] '>
            <div className='flex items-center justify-center flex-col w-[100%] h-[100%] gap-[10px]'>
              <div>
                <h1 className='text-[25px] mb-[1rem] md:mb-[0] text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-slate-100 font-bold uppercase'>
                  Find Your Best Holiday
                </h1>
                <h3 className='text-[20px] text-wrap text-slate-100'>
                  Book your dream holiday vacation tours and activities at
                  affordable rates! Explore the world with us!
                </h3>
              </div>
              <Findbox />
              {/* <a
                href='#'
                className='relative rounded md:px-28 mt-[-1.4rem] py-2.5 overflow-hidden group bg-red-500 hover:bg-gradient-to-r hover:from-red-500 
                  text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-linear'
              >
                <span
                  className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10
                rotate-12 group-hover:-translate-x-40 ease-linear'
                ></span>
                <span className='relative font-bold'>Search</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
