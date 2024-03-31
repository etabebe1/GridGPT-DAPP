import React from "react";
import { Link } from "react-router-dom";

import { ArrowUpwardTwoTone } from "@mui/icons-material";

function Info() {
  const infoList = [
    {
      icon: "tick.svg",
      text: "Free image for life time",
    },
    {
      icon: "tick.svg",
      text: "Get details on any topic",
    },
    {
      icon: "tick.svg",
      text: "Quick advice to help you",
    },
    {
      icon: "tick.svg",
      text: "15+ category to explore",
    },
  ];

  return (
    <section className="h-[550px] overflow-hidden relative flex items-center">
      {/* info content */}
      <div className="info w-[90vw] my-10 mx-auto border rounded-md py-4 relative">
        {/* info content */}
        <div className="info-container h-full flex flex-col justify-center gap-10">
          <div className="header relative my-3">
            <h1 className="uppercase text-xl sm:text-3xl text-center font-semibold">
              <span className="text-emerald-400">read to </span>move ahead?
            </h1>
            <img
              src="/assets/svg/title-effect.svg"
              className="title-effect absolute"
              alt=""
            />
          </div>

          <div className="info-desc px-3">
            <p className="text-sm text-center text-colors-cloud-compute-white/75 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis earum, illo aut labore recusandae vel architecto neque
              voluptates quos et tempore possimus ex, enim unde odio placeat
              aspernatur delectus debitis! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Fuga, vel!
            </p>
          </div>

          <div className="info-list flex flex-wrap items-center justify-center gap-4">
            {infoList.map((list, index) => {
              return (
                <div
                  className="list flex flex-row items-center justify-start gap-1 w-[13rem]"
                  key={index + 1}
                >
                  <img
                    src={`/assets/svg/${list.icon}`}
                    className="w-4 sm:w-5"
                    alt=""
                  />
                  <h3 className="text-sm">{list.text}</h3>
                </div>
              );
            })}
          </div>

          <div className="contact-btn flex flex-row items-center justify-center gap-2">
            <Link
              to={"#"}
              className="group shadow-colors-quantum-silver shadow-md rounded-full"
            >
              <button className="w-9 h-9 rounded-full bg-emerald-400 group-hover:rotate-90 transition-transform duration-500">
                <ArrowUpwardTwoTone />
              </button>
            </Link>
            <h4 className="text-lg text-emerald-400">Contact us now</h4>
          </div>
        </div>
      </div>

      {/* info layer */}
      <div className="absolute top-0 h-full w-full">
        <div className="hand-container relative h-full w-full ">
          <img
            src="/assets/svg/hand.svg"
            className="absolute bottom-7 -left-[9.1rem] md:-left-[11.9rem] lg:-left-[10.3rem] hidden sm:block sm:w-[18rem] md:w-[23rem]"
            alt=""
          />

          <img
            src="/assets/svg/hand.svg"
            className="absolute top-7 -right-[9.1rem] md:-right-[11.9rem] lg:-right-[10.3rem] hidden sm:block sm:w-[18rem] md:w-[23rem] -scale-x-100 -scale-y-100"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Info;
