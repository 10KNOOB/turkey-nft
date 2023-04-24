import React from "react";
import VideoCollectionNavbar from "../components/VideoCollectionNavbar";
import { VideoNextData } from "../components/Data";

const VideoCollection = () => {
  return (
    <div className="container py-28">
      <VideoCollectionNavbar />
      <div className="py-10 grid grid-cols-2 md:grid-cols-3 gap-5">
        {VideoNextData.map((item) => {
          return (
            <div className="relative bg-white rounded-[3px] overflow-hidden ">
              <img src={item.img} alt="" className="h-36 sm:h-56 w-full" />
              <div className="absolute top-0 -right-0 transform -translate-x-6 translate-y-2">
                <div className="text-white bg-black px-2 py-0.5 text-sm rounded-full">
                  {item.time}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center ">
        <button className="rounded-full border border-black hover:text-white hover:border-white bg-transparent hover:bg-[#ff3030] px-6 py-2  duration-300 ">
          Show More
        </button>
      </div>
    </div>
  );
};

export default VideoCollection;
