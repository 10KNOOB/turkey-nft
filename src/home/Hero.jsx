import React from "react";
import { IoPlay } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import AidIgniteVideo from "../assets/home/AidIgnite_11.mp4";
// import Slider from "../components/Slider";

const Hero = () => {
  return (
    <div className="home-bg">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 pb-20 pt-20  md:pb-28 md:pt-36">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-barlow font-bold  text-white">
              HEAL THE WORLD OF EARTHQUAKE VICRIMS
            </h1>
            <p className="text-white mt-3">
              Explore our soul-stirring NFT collections and join a passionate
              community, united in our mission to support vital causes and
              transform lives through NFT.
            </p>
            <div className="flex gap-3 mt-6">
              <NavLink
                to="/learnmore"
                className="rounded-full border border-white bg-transparent hover:bg-[#ff3030] text-white px-6 py-2  duration-300"
              >
                Learn more
              </NavLink>
              <NavLink
                to="/videos"
                className="rounded-full border border-white hover:bg-transparent bg-[#ff3030]  text-white  px-6 py-2  duration-300"
              >
                <IoPlay className="inline-block" /> Watch video
              </NavLink>
            </div>
          </div>
          <div className="mt-10">
            <div>
              <video
                src={AidIgniteVideo}
                autoPlay
                loop
                muted
                className="rounded-lg max-w-lg"
              />
            </div>
          </div>
        </div>
        <div className="relative backdrop-blur-lg -mb-16 bg-[#5AA3D6] bg-opacity-90 shadow-xl w-[80%] mx-auto rounded-lg text-white">
          <div className=" flex py-4 px-8 justify-center items-center">
            <div>
              <h1 className="text-2xl md:text-4xl font-barlow font-bold">
                HELP THE EARTHQUAKE VICTIMS
              </h1>
              <div className="flex justify-between mt-3">
                <h6>5673$ Raised of 18000$</h6>
                <h6>30%</h6>
              </div>
              <div className="w-full rounded-full h-3 bg-black mt-1">
                <div
                  className="bg-[#ff3030] h-3 rounded-full"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>
            <div className="hidden lg:flex h-20 mx-5 rounded-full w-1 bg-red-50"></div>
            <div className="hidden lg:flex flex-col justify-center items-center">
              <h1 className="text-5xl font-bold">100+</h1>
              <h6 className="text-sm">NFT bought to Raise Funds</h6>
            </div>
          </div>
          <div className="absolute bg-[#ff3030] -top-8 md:-top-11 left-[30%] md:left-[35%] -z-10 tracking-widest px-5 pt-2 md:text-3xl rounded-t-3xl font-bold">
            Ignite Hope
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
