import React from "react";
import { FiEdit } from "react-icons/fi";
import Person from "../assets/about/creator.jpg";
import MyCollection from "./MyCollection";

const Dashboard = () => {
  return (
    <div className="container pb-28 pt-36">
      <form className="dashboard-bg  w-full p-4 rounded-lg">
        <div className="text-white flex justify-end sm:hidden ">
          <FiEdit className="cursor-pointer  text-lg" />
        </div>
        <div className="flex py-10">
          <img
            src={Person}
            alt=""
            className="h-28 w-28 rounded-full p-2 border-8 border-white"
          />
        </div>

        <div className=" flex justify-between ">
          <div className="bg-white p-2 rounded-lg ">
            <div className="flex justify-center items-center mb-2 gap-2 flex-wrap">
              <div className="flex justify-center items-center border-r border-black px-2">
                <FiEdit className="cursor-pointer mr-2" />
                Mohammad Anas
              </div>
              <div className="flex justify-center items-center border-r border-black px-2">
                <FiEdit className="cursor-pointer mr-2" />
                clinxter@gmail.com
              </div>
              <div className="flex justify-center items-center ">
                <FiEdit className="cursor-pointer mr-2" />
                Instagram <span className="text-blue-500 pl-2"> clinxter</span>
              </div>
            </div>
            <div>
              <input
                type="text"
                id="first_name"
                className="border border-black rounded-full text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
          </div>
          <div className="text-white hidden sm:flex items-end ">
            <FiEdit className="cursor-pointer text-lg" />
          </div>
        </div>
      </form>
      <div className="my-5">
        <a href="" className="border py-2 px-4 rounded-full">
          Reset Password
        </a>
         <div className="flex justify-center items-center">
          <FiEdit className="cursor-pointer mr-2" /> Bio: Hi, I am Mohammad
          Anas.
        </div>
      </div>

      <MyCollection />
    </div>
  );
};

export default Dashboard;
