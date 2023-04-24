import React from "react";
import LogoWhite from "../assets/Aid-Ignite-Trans-White.png";
import { FaDiscord, FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#0D0D0D]">
      <div className="container pt-24">
        <div className="flex justify-between gap-20 px-4 flex-col sm:flex-row items-center sm:items-start">
          <div className="flex text-white gap-10 flex-col">
            <img src={LogoWhite} alt="" className="w-28" />
            <div>
              <p className="my-3">Changing lives through NFT</p>
              <a href="mailto:salam@aidignite.com">salam@aidignite.com</a>
            </div>
          </div>
          <div className="flex text-white gap-5 sm:gap-28 flex-row pl-5 sm:pl-0 font-bold">
            <div>
              <span className="">Social</span>
              <ul className="flex flex-col gap-1 pt-3 ">
                <li className="text-gray-400 hover:text-white duration-300">
                  Twitter
                </li>
                <li className="text-gray-400 hover:text-white duration-300">
                  Facebook
                </li>
                <li className="text-gray-400 hover:text-white duration-300">
                  Instagram
                </li>
                <li className="text-gray-400 hover:text-white duration-300">
                  Yotube
                </li>
                <li className="text-gray-400 hover:text-white duration-300">
                  Blog
                </li>
                <li className="text-gray-400 hover:text-white duration-300">
                  Discord
                </li>
              </ul>
            </div>
            <div>
              <span className="">Company</span>
              <ul className="flex flex-col gap-1 pt-3 ">
                <li className="text-gray-400 hover:text-white duration-300">
                  About us
                </li>
                <li className="text-gray-400 hover:text-white duration-300">
                  Contact us
                </li>
                <li className="text-gray-400 hover:text-white duration-300">
                  Term and Conditions
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-white  text-center pt-24 pb-10">
          2023 Aid Ignite. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
