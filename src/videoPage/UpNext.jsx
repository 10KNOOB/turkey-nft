import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/css/grid";

SwiperCore.use([Navigation, Pagination]);

import CustomButton from "../components/CustomButton";
import { VideoNextData } from "../components/Data";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import UpNextCard from "../components/UpNextCard";

const UpNext = () => {
  let swiper_minting;

  const handleNext = () => {
    if (swiper_minting) {
      swiper_minting.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiper_minting) {
      swiper_minting.slidePrev();
    }
  };

  const slidesPerView = 2;
  const spaceBetween = 16;

  const swiperParams = {
    spaceBetween,
    slidesPerView,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      540: {
        slidesPerView: 3,
        spaceBetween: 8,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  };
  return (
    <div className="container">
      <div className="flex relative justify-between my-5">
        <h1 className="text-xl  uppercase font-barlow text-[#101317] font-bold ">
          Up Next
        </h1>

        <div className="absolute flex gap-2 right-0 top-0 transform translate-x-0 translate-y-0">
          {" "}
          <div className=" swiper-button-prev-mint" onClick={handlePrev}>
            <CustomButton>
              <MdOutlineArrowBackIos className=" text-black group-hover:text-white" />
            </CustomButton>
          </div>
          <div className=" swiper-button-next-mint " onClick={handleNext}>
            <CustomButton>
              <MdOutlineArrowForwardIos className=" text-black group-hover:text-white" />
            </CustomButton>
          </div>
        </div>
      </div>
      <div>
        <Swiper
          {...swiperParams}
          onSwiper={(s) => (swiper_minting = s)}
          navigation={{
            nextEl: ".swiper-button-next-mint",
            prevEl: ".swiper-button-prev-mint",
          }}
          className="flex justify-center items-center gap-4 h-auto w-full"
        >
          {VideoNextData.map((item, index) => {
            return (
              <SwiperSlide key={item.id}>
                <UpNextCard
                  key={item.name + index}
                  data={item}
                  idIndexObject={index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default UpNext;
