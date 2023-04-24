import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import BIGTREE from "../assets/account/signupImg.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Signup = () => {
  const [open, setOpen] = useState(false);

  //handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className=" py-28 max-w-4xl mx-auto">
      <div className="relative bg-[#ff3030]/20 backdrop-blur-xl shadow-lg ring-1 ring-gray-900/5 sm:mx-auto md:max-w-6xl sm:rounded-lg ">
        <div className="flex flex-row justify-center md:justify-between ">
          <div className="h-[560px] w-1/2  rounded-l-lg overflow-hidden hidden md:flex">
            <img
              src={BIGTREE}
              alt="SIGNIN TREE"
              srcSet=""
              className="   h-full object-cover hover:grayscale-0 grayscale duration-300"
            />
          </div>
          <div className="flex flex-col py-4 px-10 w-full md:w-1/2">
            <form action="">
              <div className="flex flex-col font-popins">
                <span className="text-xl font-bold pb-1 text-center min-w-[300px]">
                  Sign Up
                </span>
              </div>
              <div className="from pt-6">
                <div className="flex flex-col ">
                  <label
                    htmlFor=""
                    className="text-xs pb-1 font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="p-2 text-xs rounded border-[1px] border-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="from pt-2">
                <div className="flex flex-col ">
                  <label
                    htmlFor=""
                    className="text-xs pb-1 font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="p-2 text-xs rounded border-[1px] border-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="from pt-2">
                <div className="flex flex-col ">
                  <label
                    htmlFor=""
                    className="text-xs pb-1 font-medium text-gray-700"
                  >
                    E-mail or phone numbers
                  </label>
                  <input
                    type="text"
                    placeholder="example@example.com"
                    className="p-2 text-xs rounded border-[1px] border-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="from pt-2">
                <div className="flex flex-col ">
                  <label
                    htmlFor=""
                    className="text-xs pb-1 font-medium text-gray-700"
                  >
                    Wallet No.
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your wallet no."
                    className="p-2 text-xs rounded border-[1px] border-gray-400"
                    required
                  />
                </div>
              </div>

              <div className="flex pt-2 gap-2">
                <div className="from w-full">
                  <div className="flex flex-col relative">
                    <label
                      htmlFor=""
                      className="text-xs pb-1 font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="w-full">
                      <input
                        type={open === false ? "password" : "text"}
                        placeholder="Enter password"
                        className="p-2 text-xs rounded border-[1px] border-gray-400 w-full"
                        required
                      />
                    </div>

                    <div className="text-sm absolute top-[1.9rem] right-2">
                      {open === false ? (
                        <AiOutlineEye
                          onClick={toggle}
                          className="text-gray-700"
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          onClick={toggle}
                          className="text-gray-700"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="from relative w-full">
                  <div className="flex flex-col ">
                    <label
                      htmlFor=""
                      className="text-xs pb-1 font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <div className="w-full">
                      <input
                        type={open === false ? "password" : "text"}
                        placeholder="Confirm password"
                        className="p-2 text-xs rounded border-[1px] border-gray-400 w-full"
                        required
                      />
                    </div>

                    <div className="text-sm absolute top-[1.9rem] right-2">
                      {open === false ? (
                        <AiOutlineEye
                          onClick={toggle}
                          className="text-gray-700"
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          onClick={toggle}
                          className="text-gray-700"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="button flex flex-col justify-center pt-6">
                <button className="bg-[#ff3030] hover:bg-[#c42424] duration-300 w-full rounded text-sm font-medium py-2 text-white text-center">
                  <p className="w-full text-center">Sign Up</p>
                </button>
              </div>
            </form>

            <div className="button flex justify-center pt-6">
              <button className="border-[1px] flex flex-row border-gray-300 bg-white w-fit rounded font-medium text-sm py-2 text-black  buttonColor">
                <FcGoogle className="h-[20px] w-[20px] ml-2" />
                <span className="px-2">Sign up with Google</span>
              </button>
            </div>
            <div className="flex flex-row gap-x-2 justify-center pt-4 items-center">
              <span className="text-sm">Already have an account?</span>
              <Link to="/signin">
                <span className="text-[#ff3030] text-sm">Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
