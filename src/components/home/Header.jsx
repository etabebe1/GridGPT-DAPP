import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

// Importing React Icons
import { RiMenu4Line } from "react-icons/ri";
import { ArrowForward } from "@mui/icons-material";
import { LuDot } from "react-icons/lu";

//  <Link to="/chat/chatting">Chat</Link>
//  <Link to="/service">Service</Link>
//  <Link to="/price">Price</Link>
//  <Link to="/contact">Contact</Link>
//  <Link to="/">Home</Link>
//  <Link to="/auth">Auth</Link>

function Header() {
  const menuList = [
    {
      name: "Home",
      path: "/",
      style: "Active",
    },

    {
      name: "Chat",
      path: "/chat/chatting",
      style: "",
    },
    {
      name: "About",
      path: "#",
      style: "",
    },
    {
      name: "Service",
      path: "#",
      style: "",
    },
    {
      name: "Price",
      path: "#",
      style: "",
    },
    {
      name: "Contact",
      path: "#",
      style: "",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="z-50">
        {/* navigation */}
        <nav className="app-navigation w-screen">
          {/* slider nav component */}
          <div
            className={`slider-component sm:hidden block w-[70vw] sm:w-full h-[100vh] sm:h-[64px] bg-colors-digital-gray-2/75 absolute ${
              isOpen ? " right-0" : "-right-full"
            } z-50 transition-all duration-300 pt-4`}
          >
            <button
              className="close-btn bg-colors-deep-space-blue p-1 mx-2 rounded-md hover:border border-colors-quantum-silver"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>
                <ArrowForward />
              </span>
            </button>
          </div>

          {/* mobile version header */}
          <div className="flex gap-4 shadow-lg backdrop-blur-2xl sm:shadow-none sm:backdrop-blur-none fixed w-full h-16 border-b-colors-digital-gray-2 bg-colors-digital-gray-2/75 border-b-1 z-30">
            <div className="max-w-7xl w-full flex flex-row-reverse sm:flex-row justify-between px-3 items-center mx-auto">
              <button
                className=" text-white text-2xl bg-colors-deep-space-blue rounded-md p-1 sm:hidden hover:border border-colors-quantum-silver"
                onClick={() => setIsOpen(!isOpen)}
              >
                <RiMenu4Line />
              </button>

              <Link to={"/"}>
                <div className="logo-image-container flex gap-1 items-center">
                  <img src={"/assets/images/logo.svg"} alt="" className="" />
                </div>
              </Link>

              {/* nav link container */}
              <div className="link-container hidden sm:block">
                <ul className="space-x-2 md:space-x-5 lg:space-x-16 flex justify-center items-center">
                  {menuList.map((link, index) => {
                    return (
                      <Link to={`${link.path}`} key={index}>
                        <button className="text-lg">
                          <span
                            className={`flex flex-row items-center text-sm md:text-base hover:text-white/50 ${
                              location.pathname === link.path
                                ? "text-lg p-1 bg-colors-quantum-silver rounded"
                                : ""
                            } transition-all duration-300`}
                          >
                            <p>{link.name}</p>
                          </span>
                        </button>
                      </Link>
                    );
                  })}
                </ul>
              </div>

              {/* auth button container */}
              <div className="auth-buttons hidden sm:flex flex-row items-center gap-2">
                <Link to={"#"}>
                  <button className="flex space-x-1 h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 font-medium text-slate-400 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Login
                  </button>
                </Link>

                <Link to={"#"}>
                  <button className="flex space-x-1 h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 font-medium text-slate-400 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Connect
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
