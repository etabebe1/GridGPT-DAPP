import React from "react";

// importing icons
import { VideocamTwoTone } from "@mui/icons-material";

function HeroSection() {
  return (
    <div
      className="hero flex justify-center"
      style={{
        height: "calc(200vh - 64px)",
      }}
    >
      <section className="hero-container max-w-4xl w-[80vw] h-full flex justify-center">
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
            <div className="laptop-layer">
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
            <div className="bottom"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
