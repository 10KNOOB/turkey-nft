import React from "react";
import Hero from "./Hero";
import NftCollection from "./NftCollection";
import About from "./About";
import Roadmap from "./Roadmap";
import Team from "./Team";
import NFTDiscription from "./NFTDiscription";

const HomeIndex = () => {
  return (
    <div>
      <Hero />
      <NftCollection />
      <About />
      <Roadmap />
      <Team />
      <NFTDiscription />
    </div>
  );
};

export default HomeIndex;
