import React from "react";

function About() {
  const listData = [
    {
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
  ];

  // h-[1050px] sm:h-[1100px] md:h-[1200px]

  return (
    <section
      className="about overflow-x-hidden overflow-y-hidden h-[950px] sm:h-[700px] md:h-[650px]"
      style={{ width: "100vw" }}
    >
      <div className="about-container ml-3 sm:ml-10 w-full h-full bg-gradient-to-br from-white/5 via-black/20 to-black/60 bg-colors-quantum-silver/25 flex items-center rounded-l-lg shadow-sm sm:drop-shadow-lg border shadow-white/50 backdrop-blur-lg">
        <div className="content max-w-[80rem] w-full flex flex-col sm:flex-row-reverse gap-5 sm:gap-10 px-3 sm:px-14 items-center justify-center">
          <div className="img-container sm:w-[50%] pr-2">
            <img src="/assets/svg/character/1.svg" alt="" className="" />
          </div>
          <div className="text-container sm:w-[50%] space-y-3 sm:space-y-8 pr-2">
            <h1
              className="top text-3xl sm:text-5xl font-semibold text-colors-black-hole/80 opacity-50"
              style={{ textShadow: "1px 1px 2px rgba(255, 253, 253, 0.3)" }}
            >
              01.
            </h1>

            <div className="middle space-y-4 sm:space-y-5">
              <p className="font-semibold text-lg sm:text-2xl">
                Lorem ipsum dolor sit amet conse adipisicing elit.
              </p>
              <img src="/assets/svg/arrow.svg" className="w-20" alt="" />
              <p className="narration text-sm text-colors-quantum-silver">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                porro blanditiis odio, dignissimos eligendi repudiandae
                suscipit. Maiores ab magni sapiente voluptate cum asperiores
                corrupti minima, nemo modi error alias ullam rerum perferendis
                facilis suscipit commodi ex in quidem blanditiis a?
              </p>
            </div>

            <div className="space-y-2">
              {listData.map((list, index) => {
                return (
                  <div
                    className="description-container flex flex-row gap-3 items-start"
                    key={index + 1}
                  >
                    <img src="/assets/svg/tick.svg" className="w-5" alt="" />
                    <p className="text-[0.9rem]">{list.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
