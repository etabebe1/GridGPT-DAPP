import React from "react";

// importing icons
import { Height, VideocamTwoTone } from "@mui/icons-material";
import { LuDot } from "react-icons/lu";
import { Star } from "@mui/icons-material";

function HeroSection() {
  return (
    <div className="hero flex justify-center overflow-x-hidden overflow-y-hidden h-[1050px] sm:h-[1100px] md:h-[1200px]">
      <section className="hero-container max-w-4xl w-[80vw] h-full flex justify-center items-center">
        <div className="home-content w-full h-full relative">
          <div className="bg-effect z-0">
            <img
              src="/assets/images/home/home-bg.gif"
              className="opacity-[0.02] w-full object-cover bg-center bg-repeat-none"
              alt=""
            />
          </div>
          <div className="content-layer absolute top-10 z-20 flex flex-col justify-center w-full px-2 gap-10 ">
            {/* text */}
            <div className="text-layer flex flex-col justify-center items-center text-center">
              <h1 className="flex flex-wrap justify-center items-center text-4xl font-semibold mb-10">
                <span>USE MEGABOT TO</span>
                <div className="relative">
                  <img
                    src="/assets/images/title-effect.png"
                    className="h-[80px] w-[256px]"
                    alt=""
                  />
                  <span className="absolute top-[25%] right-[6.5%] bg-gray-600/50 backdrop-blur-2xl  shadow-lg px-4 text-colors-black-hole">
                    SIMPLIFY
                  </span>
                </div>
                <span>YOUR LIFE.</span>
              </h1>

              <p className="text-sm mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                perferendis quidem harum voluptates natus ex possimus, similique
                recusandae reiciendis eum doloribus libero quasi eius,
                perferendis quidem harum voluptates natus ex possimus.
              </p>

              <div className=" text-colors-black-hole border border-colors-quantum-silver rounded-md">
                <div className="px-1 flex flex-row items-center justify-center space-x-1 text-lg m-1 bg-colors-cloud-compute-white hover:bg-colors-cloud-compute-white/55 transition-colors duration-300 cursor-pointer">
                  <VideocamTwoTone />
                  <span>Start free trial</span>
                </div>
              </div>
            </div>

            {/* image */}
            <div className="laptop-layer max-w-4xl">
              <div className="hand-container relative">
                <img
                  src="/assets/images/home/laptop1.png"
                  className="laptop w-full border-8 border-gray-600/70 shadow-md shadow-gray-600/70 rounded-2xl z-40"
                  alt=""
                />

                <img
                  src="/assets/images/home/hand.png"
                  className="left-hand absolute -bottom-[25rem] -left-36 -z-10 hidden sm:block"
                  alt=""
                />

                <img
                  src="/assets/images/home/hand.png"
                  className="right-hand absolute -bottom-[25rem] -right-36 -z-10 transform -scale-x-100 hidden sm:block"
                  alt=""
                />

                <img
                  src="/assets/images/home/finger.png"
                  className="absolute -bottom-10 -left-10 hidden sm:block"
                  alt=""
                />

                <img
                  src="/assets/images/home/finger.png"
                  className="absolute -bottom-10 -right-10 -scale-x-100 hidden sm:block"
                  alt=""
                />
              </div>
            </div>

            {/* rating */}
            <div className="rating-container max-w-2xl sm:w-2/3  md:3/4 lg:w-full mx-auto flex flex-col justify-center items-center mt-5 sm:mt-10">
              {/* features */}
              <div className="ai-features flex flex-wrap text-center items-center justify-center border-b-2 border-colors-ai-blue pb-5">
                <p className="uppercase font-semibold flex flex-row items-center shadow-2xl">
                  <LuDot className="text-2xl" /> <span>Ask Anything</span>
                </p>
                <p className="uppercase font-semibold flex flex-row items-center shadow-2xl">
                  <LuDot className="text-2xl" /> <span>Generate Anything</span>
                </p>
                <p className="uppercase font-semibold flex flex-row items-center shadow-2xl">
                  <LuDot className="text-2xl" /> <span>Translate Anything</span>
                </p>
              </div>

              {/* rating-star */}
              <div className="star-rating-container flex flex-col justify-center items-center text-center">
                <div className="star-container">
                  {[1, 2, 3, 4, 5].map((star, index) => {
                    return (
                      <Star className="text-colors-innovation-gold mt-5" />
                    );
                  })}
                </div>
                <span className="rating-text text-sm mt-2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                  dolorum cupiditate,
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
