import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="pt-28 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold text-center">
          What are NTFs?
        </h1>
        <p className="mt-10  text-center ">
          <span className="font-bold">NFTs</span> are a collection of 10,000
          unique digital collectibles that are minted on the Ethereum
          blockchain. Each NFT is a unique piece of art that is generated
          randomly using a combination of 3 different algorithms. The algorithms
          are designed to create a unique piece of art that is never repeated.
          The NFTs are generated using a combination of different algorithms
          that are designed to create a unique piece of art that is never
          repeated.
        </p>
        <div class="aspect-w-16 aspect-h-9 my-10">
          <iframe
            src="https://www.youtube.com/embed/Oz9zw7-_vhM"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <hr />
      <div className="bg-gray-200">
        <div className="py-10  max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold text-center">
            How to buys NFT
          </h1>
          <p className="mt-10  text-center ">
            <span className="font-bold">NFTs</span> are a collection of 10,000
            unique digital collectibles that are minted on the Ethereum
            blockchain. Each NFT is a unique piece of art that is generated
            randomly using a combination of 3 different algorithms. The
            algorithms are designed to create a unique piece of art that is
            never repeated. The NFTs are generated using a combination of
            different algorithms that are designed to create a unique piece of
            art that is never repeated.
          </p>
          <div class="aspect-w-16 aspect-h-9 my-10">
            <iframe
              src="https://www.youtube.com/embed/rylhU4Fe74Y"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
