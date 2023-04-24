import React, { useState } from "react";
import ReactPlayer from "react-player";
import Video from "../assets/about/Video.mp4";
import { FaPlay } from "react-icons/fa";
import "./custom.css";

function CustomPlayIcon({ onClick }) {
  return (
    <div className="bg-[#ff3030] p-2 md:p-4 rounded-full cursor-pointer">
      <FaPlay className="md:text-2xl text-white" onClick={onClick} />
    </div>
  );
}

const Hero = () => {
  const [showCustomPlayIcon, setShowCustomPlayIcon] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setShowCustomPlayIcon(false);
    setIsPlaying(true);
  };

  return (
    <div className="container pt-28 pb-10">
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[520px] mx-auto bg-black">
        <ReactPlayer
          url={Video}
          controls={true}
          playing={isPlaying}
          playIcon={showCustomPlayIcon && <CustomPlayIcon />}
          onPlay={handlePlay}
          muted={false}
          width="100%"
          height="100%"
          className=""
        />
        {showCustomPlayIcon && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <CustomPlayIcon onClick={handlePlay} />
          </div>
        )}
        {showCustomPlayIcon && (
          <div className=" hidden md:flex flex-col absolute bottom-20 left-10 text-white">
            <h1 className=" md:text-4xl font-bold">
              HELP THE EARTHQUAKE VICTIMS
            </h1>
            <p className="max-w-lg text-sm leading-tight mt-2">
              Lorem ipsum dolor sit amet consectetur. Sed amet etiam eget in
              viverra. Magna lorem dolor at sit curabitur risus ut. Sed sapien
              id adipiscing mattis ut venenatis elementum. Arcu consectetur
              molestie parturient ut velit diam.
            </p>
          </div>
        )}
        {showCustomPlayIcon && (
          <div className="md:hidden flex flex-col absolute bottom-16 left-2 text-white">
            <h1 className="text-base font-bold">HELP THE EARTHQUAKE VICTIMS</h1>
            <p className="max-w-lg text-sm leading-tight">
              Lorem ipsum dolor sit amet consectetur. Sed amet....
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
