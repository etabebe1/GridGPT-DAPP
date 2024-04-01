import React, { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { ApiSharp } from "@mui/icons-material";

const AccordionItem = ({ link }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="cursor-pointer relative">
      <div
        className="flex flex-row justify-between items-center px-1 bg-gradient-to-r from-colors-quantum-silver/20 via-colors-quantum-silver/45 to-colors-quantum-silver/20 border-b border-colors-quantum-silver/50 py-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-row items-center gap-1">
          <i>
            <img src={`/assets/svg/${link.icon}`} alt="" />
          </i>
          <h3 className="text-lg">{link.title}</h3>
        </div>
        <i>
          <ApiSharp />
        </i>
      </div>

      <ul
        className={`bg-gradient-to-r from-colors-quantum-silver/15 via-colors-quantum-silver/25 to-colors-quantum-silver/15 px-2 transition-max-height duration-500 ${
          isOpen ? "max-h-96 py-2" : "max-h-0"
        }`}
        style={{ overflow: "hidden" }}
      >
        {link.subLinks.map((link, index) => {
          // console.log(link.subLink);
          return (
            <div key={index + 1}>
              <Link to={`${link.subLink}`}>
                <li>{link.name}</li>
              </Link>
            </div>
          );
        })}
      </ul>
    </li>
  );
};

function Footer() {
  const socialLinks = [
    {
      name: "Github",
      icon: <SiGithub />,
      link: "https://github.com/etabebe1",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/jeremiaht_a/",
    },
    {
      name: "Linked-in",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/ermias-abebe-4699322a8/",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/ermias.tamirat.90",
    },
  ];

  const topLinks = [
    {
      title: "Quick Link",
      icon: "star.svg",
      subLinks: [
        { subLink: "/", name: "Home" },
        { subLink: "/service", name: "Service" },
        { subLink: "/pricing", name: "Pricing" },
        { subLink: "/contact", name: "Contact us" },
      ],
    },
    {
      title: "Our Service",
      icon: "star.svg",
      subLinks: [
        { subLink: "https://versegrid.netlify.app/", name: "Blockchain dev" },
        { subLink: "https://versegrid.netlify.app/", name: "Full-Stack dev" },
        { subLink: "https://versegrid.netlify.app/", name: "MERN-Stack dev" },
        { subLink: "https://versegrid.netlify.app/contact", name: "Contact" },
      ],
    },
    {
      title: "Our Company",
      icon: "star.svg",
      subLinks: [
        { subLink: "/Login", name: "Login" },
        { subLink: "/Signup", name: "Signup" },
        { subLink: "/Blog", name: "Blog" },
        { subLink: "https://versegrid.netlify.app/", name: "Contract" },
      ],
    },
  ];

  return (
    <section className="">
      <div className="footer-container px-2 sm:px-10 ">
        {/* content container */}
        <div className="top flex flex-col md:flex-row py-6 gap-5 border-b">
          {/* first-content */}
          <div className="first md:w-[50%] space-y-4 my-6 py-3">
            {/* logo */}
            <div className="logo-container">
              <img src="/assets/images/logo.svg" className="mx-auto" alt="" />
            </div>
            {/* form */}
            <div className="form space-y-2">
              <div className="header">
                <h3 className="uppercase text-colors-cloud-compute-white/80 text-center sm:text-start">
                  Subscribe to our newsletter
                </h3>
              </div>
              <div className="form-input-container space-y-2 flex flex-col sm:flex-col">
                <input
                  type="email"
                  placeholder="Enter you email"
                  className="p-[5px] rounded-md bg-colors-digital-gray/25 outline-none border border-emerald-400"
                />
                <button className="border mx-auto rounded bg-colors-digital-gray/25 px-2 focus:bg-colors-cloud-compute-white/45 transition duration-500">
                  Subscribe
                </button>
              </div>
            </div>
            {/* socials */}
            <div className="social-link flex flex-row gap-5 justify-center">
              {socialLinks.map((item, index) => {
                const { icon, link } = item;
                return (
                  <div
                    className="text-white text-base sm:text-lg xl:text-2xl hover:text-sky-700 border hover:border-sky-700 hover:bg-white/10 p-1 xl:rounded-lg rounded-md transition duration-500 cursor-pointer"
                    onClick={() => window.open(link, "_blank")}
                    key={index + 1}
                  >
                    {icon}
                  </div>
                );
              })}
            </div>
          </div>

          {/* second-content */}
          <div className="second md:w-[50%] flex items-center">
            {
              <ul className="list-container flex flex-col gap-2 w-full">
                {topLinks.map((link, index) => {
                  return <AccordionItem link={link} key={index + 1} />;
                })}
              </ul>
            }
          </div>
        </div>
        {/* copy right container */}
        <div className="bottom flex flex-col-reverse md:flex-row justify-between py-5 text-center">
          <h1 className="text-base sm:text-xl md:text-3xl lg:text-4xl">
            @2024 All the Copyright reserved
          </h1>
          <div className="terms flex flex-row gap-2 text-sm items-center justify-center">
            <p className="px-2 border-r">Privacy Policy</p>
            <p>terms & conditions</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
