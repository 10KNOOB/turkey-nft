import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import LogoBlack from "../assets/Aid-Ignite-Trans-Black.png";
import LogoWhite from "../assets/Aid-Ignite-Trans-White.png";

// import { HashLink } from "react-router-hash-link";

const Transbar = (props) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
 

  const links = [
    {
      id: 1,
      link: "story",
    },
    {
      id: 2,
      link: "Blog",
    },
    {
      id: 3,
      link: "Top Donor's",
    },
    {
      id: 4,
      link: "Exclusive Content",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10 ? setShadow(true) : setShadow(false);
    });
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const location = useLocation();
  const [navbarClass, setNavbarClass] = useState("");
  const [logo, setLogo] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setNavbarClass("text-white");
        setLogo(LogoWhite);

        break;
      case "/videos":
        setNavbarClass("text-black ");
        setLogo(LogoBlack);
        break;
      default:
        setNavbarClass("text-black");
        setLogo(LogoBlack);
    }
  }, [location.pathname]);

  return (
    <div>
      <div
        className={
          shadow
            ? `fixed w-full h-[90px] py-1 duration-100 z-[10] font-bold shadow-2xl bg-[#ff3030] text-white bg-opacity-70 backdrop-blur-lg rounded-b-3xl`
            : `fixed w-full h-[90px] py-1 duration-100 z-[10] font-bold ${navbarClass} `
        }
      >
        {/* this is for large screen devices */}
        <div className="flex justify-between items-center h-[70px] container px-2 md:px-0">
          <div className="mt-2 ml-4 sm:ml-0 ">
            <img
              src={shadow ? `${LogoWhite}` : `${logo}`}
              alt=""
              className="h-14 "
            />
          </div>
          <h1 className="text-base lg:text-2xl  font-bold">
            Changing lives through NFT
          </h1>
          <ul className="hidden md:flex justify-around items-center">
            <NavLink
              to="/"
              className="cursor-pointer capitalize duration-200 px-4 lg:px-4  font-popins scale-100 hover:scale-110"
            >
              Home
            </NavLink>
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="cursor-pointer capitalize duration-200 px-4 lg:px-4 font-popins scale-100 hover:scale-110"
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}       
            
              <NavLink
                to="signup"
                className="animate-text bg-gradient-to-r from-[#ff3030] to-[#7C5CFC] px-4 py-1.5 rounded-full text-white"
              >
                Sign Up
              </NavLink>
           
          </ul>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
      {/* this is for small screen devices */}

      <div
        className={
          nav
            ? "fixed h-screen left-0 top-0 w-[80%] text-white ease-in duration-300 backdrop-blur-lg z-50 bg-[#ff3030] bg-opacity-50 flex md:hidden"
            : "fixed h-screen left-[-100%] w-[80%] top-0 ease-in duration-300 backdrop-blur-lg z-50 "
        }
      >
        <ul>
          <div className="flex justify-center items-center p-4">
            <img src={LogoWhite} alt="" className="h-14" />
          </div>
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-4">
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
          <button className="ml-4 mt-4 animate-text bg-gradient-to-r from-[#ff3030] to-[#7C5CFC] px-4 py-1.5 rounded-full">
            Connect Wallet
          </button>
        </ul>
      </div>
    </div>
  );
};


export default Transbar;
