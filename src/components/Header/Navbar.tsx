import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <section className='w-[100%] bg-white'>
      <div className='flex px-[75px] mx-auto items-center justify-between h-[90px]'>
        <div className='relative w-[70px] cursor-pointer py-[20px] h-[70px] lg:w-[150px] lg: object-contain'>
          <h1 className='font-semibold'>TravelAndTours</h1>
        </div>
        <div className='flex text-lg gap-[30px]'>
          <div className='flex mt-[10px] gap-[30px]'>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>Tour</Link>
            <Link href={"#"}>Hotel</Link>
            <Link href={"#"}>Review</Link>
            <Link href={"#"}>Contact</Link>
          </div>
          <div className='h-[45px]'>{/* {button} */}</div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
