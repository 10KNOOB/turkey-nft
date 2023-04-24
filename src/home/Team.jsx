import React from "react";
import { TeamData } from "../components/Data";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Team = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="container py-28">
        <div className="flex items-center flex-col">
          <h6 className="sm:-ml-24 -mb-2">Meet Our Passionate and Talented</h6>
          <h1 className=" text-center font-bold text-6xl animate-text bg-gradient-to-r from-[#F67280] to-[#7C5CFC] bg-clip-text text-transparent">
            Team
          </h1>
          <p className="text-center max-w-lg mx-auto text-gray-500">
            At Aid Ignite, we believe in the power of collaboration and the
            importance of bringing together people with diverse skills,
            backgrounds, and visions to make a real difference
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center mt-20 gap-20">
          {TeamData.map((item) => {
            return (
              <div
                className=" border border-black rounded-2xl p-3 w-full scale-100 hover:scale-105 transition-all duration-300"
                key={item.id}
              >
                <div className="flex items-center flex-col">
                  <img
                    src={item.img}
                    alt=""
                    className="h-24 w-24 rounded-full -mt-16 shadow-2xl object-cover"
                  />
                  <h1 className="text-2xl font-semibold mt-5">{item.name}</h1>
                  <h6 className="text-lg font-medium">{item.position}</h6>
                </div>

                <div className="flex gap-3 text-xl justify-center mt-3">
                  <a href={item.facebook} target="_blank">
                    <FaFacebook />
                  </a>
                  <a href={item.twitter} target="_blank">
                    <FaTwitter />
                  </a>
                  <a href={item.linkedin} target="_blank">
                    <FaLinkedin />
                  </a>
                  <a href={item.instagram} target="_blank">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
