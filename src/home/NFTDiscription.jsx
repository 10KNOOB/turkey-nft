import React from "react";
import PolyImg from "../assets/moreinfo/Polygon.png";
import Logo from "../assets/moreinfo/Aid-Ignite-Trans-Black.png";

const NFTDiscription = () => {
  return (
    <div className="container my-28 ">
      <div className="flex items-center gap-20 justify-center">
        <img src={PolyImg} alt="" className="w-28  sm:w-40" />
        <img src={Logo} alt="" className="w-20 sm:w-28" />
      </div>
      <div className="mt-10 flex justify-center items-center flex-col">
        <div className=" max-w-4xl text-center md:text-lg">
          <p>
            At Aid Ignite, we prioritize environmental sustainability, which is
            why we've chosen to build our NFT project on{" "}
            <span className="text-purple-500">Polygon</span>, a "green" Ethereum
            side-chain. Polygon employs proof-of-stake validation, significantly
            reducing energy consumption compared to traditional proof-of-work
            blockchain.
          </p>
          <p>
            As a result, our NFTs are eco-friendly, aligning with our commitment
            to protect the environment.
          </p>
          <p className="my-3">
            The Polygon ecosystem is continuously evolving to minimize its
            carbon footprint, with annual CO2 emissions at a mere{" "}
            <span className="text-[#ff3030]"> 0.01 Mt</span>. Experts like Mark
            Cuban believe that Polygon's advances may lead to one of the most
            significant reductions in tech's carbon emissions.
          </p>
        </div>
        <p className=" md:text-lg">
          Join us in making a positive impact, both socially and
          environmentally, with our NFT project on the Polygon blockchain.
        </p>
      </div>
    </div>
  );
};

export default NFTDiscription;
