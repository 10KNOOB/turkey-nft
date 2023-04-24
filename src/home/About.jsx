import React from "react";
import HatayImg from "../assets/about/skewImg.png";
import Creator from "../assets/about/Bon Artist.png";
import V from "../assets/about/Video.mp4";

const About = () => {
  return (
    <div className="section-2">
      <video autoPlay loop muted className="w-full h-full">
        <source src={V} type="video/mp4" />
      </video>
      <div className="max-w-[1200px] w-full h-full mx-auto px-5 pt-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="w-full md:w-1/2 md:py-28">
            <div>
              <img src={HatayImg} alt="" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-white md:mt-28">
              DISCOVER <span className="text-5xl">BON</span>{" "}
            </h1>
            <div>
              <p className=" text-white mt-5 custom-h">
                Bonaventura I Komang Surya Angga Raditya, known simply as Bon,
                is a deeply passionate artist hailing from the beautiful island
                of Bali, Indonesia. He began his artistic journey at a young
                age, immersing himself in the rich cultural heritage of his
                homeland.
                <br />
                <br />
                Bon's deep connection to traditional Balinese art, combined with
                his enthusiasm for modern styles, allows him to seamlessly blend
                the two resulting in captivating and unique creations. His work
                reflects the soul of Bali and the colorful tapestry of its
                artistic traditions.
              </p>
              <br />
              <p className="text-white">
                In addition to his personal artistic pursuits, Bon is dedicated
                to giving back to his community. He owns multiple clothing
                brands and a studio gallery,"22 Art Studio Bali," which serves
                as a platform for his creative endeavors and supports the local
                artistic community.
                <img src={Creator} alt="" className="h-60 about_side mt-10" />
                As a mural artist, Bon's breathtaking murals can be found
                adorning the walls of buildings across Bali, leaving a lasting
                impression on those who see them.
                <br />
                <br />
                Today, Bon's collaboration with Aid Ignite is yet another
                example of his dedication to using his artistic gifts for the
                greater good. By creating exclusive NFT artworks for the
                humanitarian project, he is not only sharing his incredible
                talent but also amplifying the mission of Aid Ignite to bring
                hope and support to those in need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
