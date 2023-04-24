import React from "react";
import { NftData } from "../components/Data";

const MyCollection = () => {
  return (
    <div className="mt-28">
      <h1 className="text-4xl font-bold">My Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 ">
        {NftData.map((item) => {
          return (
            <div className="group" key={item.id}>
              <div className=" bg-white/40 p-3 rounded-lg shadow hover:shadow-xl backdrop-blur-lg">
                <div className="h-80 w-full overflow-hidden rounded-lg">
                  <img
                    src={item.img}
                    alt=""
                    className="object-cover h-80 w-full scale-100 group-hover:scale-110 duration-300 rounded-lg"
                  />
                </div>
                <div className="flex justify-between mt-3 mb-1 font-bold text-lg">
                  <h5 className="uppercase">{item.title}</h5>
                  <h5>{item.price}</h5>
                </div>
                <div className="flex justify-between mb-1 text-sm">
                  <h5 className="uppercase">$4500 Raised</h5>
                  <h5>
                    {" "}
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
    </div>
  );
};

export default MyCollection;
