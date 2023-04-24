import React, { useState, useRef } from "react";
import { NftData } from "../components/Data";

const NftCollection = () => {
  const [isHovered, setIsHovered] = useState({});
  const videoRefs = useRef([]);

  const handleMouseEnter = (id) => {
    setIsHovered((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setIsHovered((prev) => ({ ...prev, [id]: false }));
  };

  const playVideo = (id) => {
    videoRefs.current[id].play();
  };

  const stopVideo = (id) => {
    videoRefs.current[id].pause();
    videoRefs.current[id].currentTime = 0;
  };

  return (
    <div className="container my-28">
      <h1 className="text-4xl font-bold">
        <span className="text-[#ff3030]">Aid Ignite</span> NFT Collections
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 ">
        {NftData.map((item) => {
          return (
            <div className="group" key={item.id}>
              <div className=" bg-white/40 p-3 rounded-lg shadow hover:shadow-xl backdrop-blur-lg">
                <div
                  className="relative rounded-lg overflow-hidden"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={() => handleMouseLeave(item.id)}
                >
                  <img
                    src={item.img}
                    alt="Video thumbnail"
                    className="w-full h-auto"
                  />
                  {isHovered[item.id] && (
                    <video
                      src={item.nftv}
                      type="video/mp4"
                      autoPlay
                      loop
                      className="absolute inset-0 w-full h-full object-cover"
                    ></video>
                  )}
                  {/* {!isHovered && (
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                      <svg
                        className="h-16 w-16 text-white opacity-50"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 12L5 5.5V18.5L18 12Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )} */}
                </div>

                <div className="flex justify-between mt-3  mb-1 font-bold text-lg">
                  <h5 className="uppercase">{item.title}</h5>
                  <h5>{item.price}</h5>
                </div>
                <div className="flex justify-between mb-1 text-sm">
                  <h5 className="uppercase">$4500 Raised</h5>
                  <h5>
                    {item.sold}/{item.total}
                  </h5>
                </div>
                <div className="w-full rounded-full h-2.5 bg-black ">
                  <div
                    className="bg-[#ff3030] h-2.5 rounded-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
              <button className="w-full bg-[#ff3030] text-white hover:bg-[#c42424] duration-100 py-1.5 rounded mt-3">
                Buy Now
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-16 max-w-4xl text-center mx-auto md:text-lg">
        <p>
          When you purchase from <b>Aid Ignite NFT Collections</b> , you're not
          only acquiring digital art but also directly contributing to the
          betterment of lives affected by the devastating earthquake in Turkey.
        </p>
        <p className="my-3">
          Each NFT is specifically designed to address a vital aspect of
          humanitarian relief: <b>aid, food, and shelter</b>. Your support will
          bring hope, healing, and a brighter future to those in need, while you
          <span className="font-bold text-[#ff3030]">
            {" "}
            enjoy exclusive access to immersive 360 VR experiences
          </span>{" "}
          and{" "}
          <span className="font-bold text-[#ff3030]">
            {" "}
            a chance to win stunning physical NFT artworks{" "}
          </span>
          that will be mailed directly to your doorstep.
        </p>
        <p className="text-sky-500 font-bold">
          “Together, we can transform lives, one NFT at a time”
        </p>
      </div>
    </div>
  );
};

export default NftCollection;

{
  /* <div className="my-16 max-w-4xl text-center mx-auto md:text-lg">
        <p>
          When you purchase from <b>Aid Ignite NFT Collections</b> , you're not
          only acquiring digital art but also directly contributing to the
          betterment of lives affected by the devastating earthquake in Turkey.
        </p>
        <p className="my-3">
          Each NFT is specifically designed to address a vital aspect of
          humanitarian relief: <b>aid, food, and shelter</b>. Your support will
          bring hope, healing, and a brighter future to those in need, while you
          <span className="font-bold text-[#ff3030]">
            {" "}
            enjoy exclusive access to immersive 360 VR experiences
          </span>{" "}
          and{" "}
          <span className="font-bold text-[#ff3030]">
            {" "}
            a chance to win stunning physical NFT artworks{" "}
          </span>
          that will be mailed directly to your doorstep.
        </p>
        <p className="text-sky-500 font-bold">
          “Together, we can transform lives, one NFT at a time”
        </p>
      </div> */
}
