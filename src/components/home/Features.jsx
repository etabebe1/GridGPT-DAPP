import React from "react";
import { Link } from "react-router-dom";

import { PlayArrowTwoTone } from "@mui/icons-material";

function Features() {
  const featuredItem = [
    {
      title: "Code Generator",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti excepturi iure!",
      icons: {
        icon: "code.svg",
        iconBold: "code-bold.svg",
      },
    },
    {
      title: "ASO Expert",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti excepturi iure!",
      icons: {
        icon: "play.svg",
        iconBold: "play-bold.svg",
      },
    },
    {
      title: "Insta Caption",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti excepturi iure!",
      icons: {
        icon: "insta.svg",
        iconBold: "insta-bold.svg",
      },
    },
    {
      title: "Email Generator",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti excepturi iure!",
      icons: {
        icon: "mail.svg",
        iconBold: "mail-bold.svg",
      },
    },
    {
      title: "Hashtag Writer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti excepturi iure!",
      icons: {
        icon: "hashtag.svg",
        iconBold: "hashtag-bold.svg",
      },
    },
    {
      title: "E-Commerce",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti excepturi iure!",
      icons: {
        icon: "box.svg",
        iconBold: "box-bold.svg",
      },
    },
    {
      title: "Ads & Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti excepturi iure!",
      icons: {
        icon: "marketing.svg",
        iconBold: "marketing-bold.svg",
      },
    },
    {
      title: "YouTube",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti excepturi iure!",
      icons: {
        icon: "marketing.svg",
        iconBold: "marketing-bold.svg",
      },
    },
  ];

  return (
    <section className="features h-[1610px] sm:h-[1000px] lg:h-[700px]">
      <div className="features-container h-full relative">
        {/* features-background */}
        <div className="bg-container h-full flex flex-col justify-between">
          <img
            src="/assets/images/feature.gif"
            className="h-[15%] md:h-[21%] opacity-[0.1] w-full object-cover bg-center bg-repeat-none"
            alt=""
          />
          <img
            src="/assets/images/feature-bg.png"
            className="w-full opacity-[0.2]"
            alt=""
          />
        </div>

        {/* features-content */}
        <div className="card-container absolute top-10 px-3 sm:px-10 flex flex-col gap-5 sm:gap-10 justify-center w-full">
          {/* head */}
          <div className="header max-w-lg mx-auto">
            <h2 className="text-base sm:text-2xl font-semibold text-center text-emerald-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h2>
          </div>

          {/* cards */}
          <div className="card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredItem.map((item, index) => {
              return (
                <div
                  className="card w-full h-[160px] bg-gradient-to-bl from-black via-black/15 to-black rounded-lg shadow-md shadow-white/1 backdrop-blur-2xl p-2 space-y-4 group cursor-pointer"
                  key={index + 1}
                >
                  <div className="top flex flex-row items-center gap-3 relative">
                    <img
                      src={`/assets/svg/feature/${item.icons.icon}`}
                      className="w-12 border-r-1 group-hover:opacity-0 group-hover:-scale-x-100 transition-all duration-500 border-emerald-400 pr-4 "
                      alt=""
                    />
                    <img
                      src={`/assets/svg/feature/${item.icons.iconBold}`}
                      className="w-12 border-l-1 absolute opacity-0 group-hover:opacity-100 group-hover:-scale-x-100 transition-all duration-500 pl-4 border-emerald-400"
                      alt=""
                    />
                    <h2>{item.title}</h2>
                  </div>

                  <p className="text-sm text-colors-quantum-silver">
                    {item.description}
                  </p>

                  <Link to={"#"}>
                    <div className="read-more flex flex-row items-center w-[110px] text-sm overflow-x-hidden pt-4">
                      <span className="-translate-x-20 group-hover:translate-x-0 group-hover:text-emerald-400 transition-all duration-500 border-l pl-1">
                        Read More
                        <PlayArrowTwoTone />
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
