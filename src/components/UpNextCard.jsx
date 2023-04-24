import React from "react";

const UpNextCard = ({ data, idIndexObject }) => {
  return (
    <>
      <div className="relative bg-white rounded-[3px] overflow-hidden ">
        <img src={data.img} alt="" className="h-36 sm:h-48 w-full" />
        <div className="absolute top-0 -right-0 transform -translate-x-6 translate-y-2">
          <div className="text-white bg-black px-2 py-0.5 text-sm rounded-full">
            {data.time}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpNextCard;
