import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

// POINT: Importing react icons
import { MdCardMembership, MdOutlineHelpOutline } from "react-icons/md";
import { BsChatFill } from "react-icons/bs";
import { IoMdGitNetwork } from "react-icons/io";
import { GiUpgrade } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";

const LINKS = [
  {
    icon: <BsChatFill />,
    title: "Chat",
    route: "/chat/chatting",
  },
  {
    icon: <IoMdGitNetwork />,
    title: "History",
    route: "/chat/history",
  },
  {
    icon: <MdCardMembership />,
    title: "Subscription",
    route: "/chat/subscription",
  },
  {
    icon: <MdOutlineHelpOutline />,
    title: "Help",
    route: "/chat/help",
  },
  {
    icon: <GiUpgrade />,
    title: "Upgrade",
    route: "/chat/upgrade",
  },
  {
    icon: <IoMdSettings />,
    title: "Setting",
    route: "/chat/setting",
  },
];

// POINT: Components

function ChatNav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (route) => {
    navigate(route);
    setIsOpen(false); // Close the navigation menu when a link is clicked
  };

  // Toggle the isOpen state
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* Menu Icon */}
      <button
        className="text-3xl text-white p-2"
        onClick={toggleNav} // Toggle navigation visibility
        aria-label="Toggle navigation"
      >
        <RiMenu2Line />
      </button>

      <div
        className={`fixed top-0 ${
          isOpen ? "left-0" : "-left-full"
        } transition-left duration-300 z-50`}
      >
        <nav className="w-[70vw] h-[100vh] flex flex-col bg-secondary-heavy-dark-2 text-white">
          {/* Logo */}
          <div className="w-[40px] h-[40px] hidden">
            <Link to={"/"}>
              <img
                src={"/assets/svg/logo-icon.svg"}
                alt="GRID-GPT-BOT"
                className="w-[40px] h-[40px]"
              />
            </Link>
          </div>

          {/* Close || X mark button */}
          <div className="w-full flex flex-col items-end p-2 pb-5">
            <button className="text-3xl" onClick={toggleNav}>
              <IoCloseOutline />
            </button>
          </div>

          {/* link container */}
          <div className="flex flex-col px-3 gap-2">
            {LINKS.map((link, index) => {
              return (
                <div
                  className="group hover:bg-primary-dark-more hover:opacity-70 p-3 rounded hover:shadow-lg cursor-pointer transition-all duration-500"
                  key={index + 1}
                  onClick={() => handleNavigation(link.route)}
                >
                  <div className="flex flex-row gap-3  items-center">
                    <i className="text-2xl text-primary-dark">{link.icon}</i>
                    <span className="text-sm">{link.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
}

export default ChatNav;
