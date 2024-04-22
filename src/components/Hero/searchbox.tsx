import React from "react";
import LocationBox from "@/components/Hero/Contents/locationbox";
import ActivityBox from "@/components/Hero/Contents/activitybox";
import DateBox from "@/components/Hero/Contents/datebox";
const page = () => {
  return (
    <div className='bg-white rounded-md p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-[2rem]'>
      <LocationBox />
      <ActivityBox />
      <DateBox />
    </div>
  );
};

export default page;
