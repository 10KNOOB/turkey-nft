import React from "react";
import { RoadmapData } from "../components/Data";

const Roadmap = () => {
  return (
    <div className="container my-28 ">
      <h1 className="text-center font-bold text-6xl animate-text bg-gradient-to-r from-[#F67280] to-[#7C5CFC] bg-clip-text text-transparent ">
        Roadmap
      </h1>
      <p className="text-center max-w-lg mx-auto text-gray-500">
        Join AidIgnite on our thrilling roadmap, where we'll unveil innovative
        developments that revolutionize humanitarian aid. Get ready for a
        transformative journey and discover our bright future ahead!
      </p>
      <div className="mt-16">
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-10 md:gap-5 ">
          {RoadmapData.map((item) => {
            return (
              <div
                className="flex flex-col border-2 md:border-0 p-5 md:p-0 rounded-lg items-center"
                key={item.id}
              >
                <div className=" bg-[#ff3030] bg-opacity-80 backdrop-blur-2xl shadow-2xl rounded-full p-5">
                  <img src={item.img} alt="" className="h-16  w-16 " />
                </div>
                <div className="flex justify-start items-center flex-col md:h-48">
                  <h5 className="mt-3 text-lg text-center font-bold">
                    {item.title}
                  </h5>
                  <p className="text-gray-500 mt-2 text-center leading-tight">
                    {item.discription}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="absolute hidden md:flex  top-0 left-0 transform translate-x-28  translate-y-12 w-[80%] h-0.5 border-t-2 border-black border-dashed -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
