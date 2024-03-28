import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightAltRounded } from "@mui/icons-material";

function Service() {
  const serviceFeatures = [
    {
      title: "Copy Write",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti excepturi iure!",
      image: "service-title.svg",
      icons: [
        {
          icon: "copy.svg",
          style: "outline-icon",
        },
        {
          icon: "copy-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti excepturi iure!",
      image: "service-title.svg",
      icons: [
        {
          icon: "graph.svg",
          style: "outline-icon",
        },
        {
          icon: "graph-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "SEO Specialist",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti excepturi iure!",
      image: "service-title.svg",
      icons: [
        {
          icon: "search.svg",
          style: "outline-icon",
        },
        {
          icon: "search-bold.svg",
          style: "bold-icon",
        },
      ],
    },
    {
      title: "Content Maker",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti excepturi iure!",
      image: "service-title.svg",
      icons: [
        {
          icon: "text.svg",
          style: "outline-icon",
        },
        {
          icon: "text-bold.svg",
          style: "bold-icon",
        },
      ],
    },
  ];

  const [isHovered, setIsHovered] = useState({
    hovered: false,
    indexedValue: "",
  });

  //  h-[1050px] sm:h-[1100px] md:h-[1200px]
  return (
    <div className="service w-[100%] h-[1300px] sm:h-[800px] md:h-[600px] py-10">
      <div className="service-content w-full h-full px-5 space-y-10 md:space-y-0 items-center md:space-x-16 flex flex-col md:flex-row">
        {/* service features */}
        <div className="features-card grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-[70%] md:h-full">
          {serviceFeatures.map((feature, index) => {
            // card bg-colors-digital-gray-2 bg-gradient-to-br h-full p-2 rounded-md flex flex-col gap-3 group ${
            //   isHovered.hovered &&
            //   isHovered.indexedValue === index &&
            //   "from-white/5 to-black/90"
            // } transition duration-500

            return (
              <div
                className={`
                card bg-colors-digital-gray-2 h-full p-2 rounded-md flex flex-col gap-3 group from-white/5 via-white/0 to-black/90 hover:bg-gradient-to-br transition-colors duration-500
                `}
                key={index}
                onMouseEnter={() =>
                  setIsHovered({
                    hovered: !isHovered.hovered,
                    indexedValue: index,
                  })
                }
                onMouseLeave={() =>
                  setIsHovered({ hovered: false, indexedValue: "" })
                }
              >
                <i className="icon bg-colors-digital-gray p-1 rounded w-14 h-14 items-center flex">
                  <img
                    src={`/assets/svg/service/${
                      isHovered.hovered && isHovered.indexedValue === index
                        ? feature.icons[1].icon
                        : feature.icons[0].icon
                    }`}
                    className=" group-hover:rotate-45 transition-all duration-500 mx-auto"
                    alt=""
                  />
                </i>
                <div className="feature-title flex flex-row items-center gap-3">
                  <span className="left-bracket">
                    <img src="/assets/svg/service-title.svg" alt="" />
                  </span>
                  <h1 className="font-semibold">{feature.title}</h1>
                </div>
                <p className="description text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* descriptions */}
        <div className="description-content w-full text-sm space-y-5">
          <div className="top-text space-y-2">
            <h1
              className="capitalize text-emerald-300 text-xl sm:text-3xl font-semibold"
              style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)" }}
            >
              For all kinds of creators!
            </h1>
            <p className="title-desc text-sm font-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <img src="/assets/svg/arrow.svg" className="w-20" alt="" />
          </div>

          <div className="middle-text">
            <p className="text-xs text-colors-quantum-silver">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              deserunt quisquam consequuntur id architecto quas modi? Odio quod
              fuga dolor!
            </p>
          </div>

          <div className="view-button">
            <Link to={"#"}>
              <div className="flex flex-row items-center gap-2 group font-semibold text-emerald-300">
                <div className="bg-colors-digital-gray p-1 border  rounded-full group-hover:rotate-90 transition-all duration-300">
                  <ArrowRightAltRounded />
                </div>
                <span>View all</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
