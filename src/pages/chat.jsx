import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// POINT: Importing react icons
import { MdCardMembership, MdOutlineHelpOutline } from "react-icons/md";
import { BsChatFill } from "react-icons/bs";
import { IoMdGitNetwork } from "react-icons/io";
import { GiUpgrade } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { HiCurrencyDollar } from "react-icons/hi";
import { useStateContext } from "../context/context";

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

function Chat() {
  //POINT: Default conversation list
  const productList = [
    "Ask anything",
    "Content writing",
    "Code generator",
    "Translate anything",
    "Social media",
    "Email generator",
    "Personal advice",
    "Password generator",
    "Travel/handout",
    "Essay writer",
  ];

  const { DAPP_NAME, fetchData } = useStateContext();
  const navigate = useNavigate();
  // POINT: State Variables
  const [currentTab, setCurrentTab] = useState("Chat");
  const [currentChat, setCurrentChat] = useState(productList[0]);
  const [display, setDisplay] = useState("");
  const [FreeTrial, setFreeTrial] = useState();
  const [isOpen, setIsOpen] = useState(false);

  // POINT: State Management Context
  const { Free, address } = useStateContext();

  // LOGS: State variable logs
  // console.log(currentTab);
  // console.log(currentChat);

  // NOTE: loading data from local storage
  const loadData = () => {
    // POINT: user credentials form local storage
    const UserCredentials = localStorage.getItem("UserCredentials");
    const member = JSON.parse(UserCredentials);
    //TODO: Before setting display => member check if user is registered for premium
    setDisplay(member);

    const freeTrail = localStorage.getItem("freeTrail");
    setFreeTrial(freeTrail);

    // LOGS:
    // console.log(member);
    // console.log(freeTrail);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleNavigation = (route, activeTab) => {
    navigate(route);
    setIsOpen(false); // Close the navigation menu when a link is clicked
    console.log(activeTab);
    setCurrentTab(activeTab);
  };

  return (
    <div>
      {/* NAV START */}
      <div
        className={`sm:left-0 fixed top-0 sm:w-[10vw] ${
          isOpen ? "left-0" : "-left-full"
        } transition-left duration-300 z-50`}
      >
        <nav className="w-[70vw] sm:w-[7vw] h-[100vh] sm:fixed flex flex-col bg-secondary-heavy-dark-2 text-white ">
          {/* Logo */}

          {/* Close || X mark button */}
          <div className="w-full flex flex-col items-end p-2 py-3 sm:hidden">
            <button className="text-3xl" onClick={() => setIsOpen(!isOpen)}>
              <IoCloseOutline />
            </button>
          </div>

          {/* link container */}
          <div className="flex flex-col sm:items-center gap-2">
            <div className="home-route hidden sm:flex border-b-1 py-4 w-full justify-center">
              <Link to={"/"}>
                <img
                  src={"/assets/svg/logo-icon.svg"}
                  alt="GRID-GPT-BOT"
                  className="w-[40px] h-[40px]"
                />
              </Link>
            </div>

            {LINKS.map((link, index) => {
              return (
                <div
                  className="group hover:bg-primary-dark-more hover:opacity-70 p-3 mx-3 rounded hover:shadow-lg cursor-pointer transition-all duration-500"
                  key={index + 1}
                  onClick={() => handleNavigation(link.route, link.title)}
                >
                  <div className="flex flex-row gap-3  items-center">
                    <i className="text-2xl text-primary-dark sm:text-lg group-hover:rotate-45 transition-all duration-150">
                      {link.icon}
                    </i>
                    <span className="text-sm sm:hidden">{link.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
      {/* NAV END */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* Header start */}
      {/* MENU START */}

      <div className="header w-[100vw] sm:w-[93vw] h-[100vh] sm:fixed right-0">
        {/* mobile version header*/}
        <div className="flex py-3 gap-4 shadow-2xl backdrop-blur-2xl sm:shadow-none sm:backdrop-blur-none sm:hidden">
          <button
            className="text-2xl text-white p-2 sm:hidden"
            onClick={() => setIsOpen(!isOpen)} // Toggle navigation visibility
            aria-label="Toggle navigation"
          >
            <RiMenu2Line />
          </button>

          <div className="flex flex-row justify-center items-center gap-2">
            <Link to={"/"}>
              <img
                src={"/assets/svg/logo-icon.svg"}
                alt="GRID-GPT-BOT"
                className="w-[30px] h-[30px]"
              />
            </Link>
            {
              <div className="">
                <span className="text-white text-lg">Ask anything</span>
              </div>
            }
          </div>
        </div>

        {/* big screen header  */}
        <div className="flex">
          {currentTab === "Chat" && (
            <div className="product hidden sm:flex flex-col px-3 py-5 gap-4 bg-secondary-dark h-[100vh] w-[21vw] min-w-[15rem]">
              <input
                type="text"
                className="bg-primary-dark-more p-2 rounded"
                placeholder="Search here..."
              />

              <ul
                className="px-4 flex flex-col text-white gap-5 overflow-scroll
                "
              >
                {productList.map((list, index) => {
                  return (
                    <li
                      key={index + 1}
                      onClick={() => setCurrentChat(list)}
                      className={`cursor-pointer hover:bg-primary-dark-more p-2 rounded ${
                        currentChat === list ? "text-primary-dark-more" : ""
                      }`}
                    >
                      {list}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <div className="body w-full hidden sm:block">
            <div className="header-top bg-secondary-heavy-dark-2 shadow-lg p-5 w-full">
              {currentTab === "Chat" ? (
                <div className="flex flex-row justify-around items-center md:font-medium md:text-base text-white">
                  <h3>{currentChat}</h3>
                  <div className="flex flex-row gap-3 items-center">
                    {display === "Pro Member" ? (
                      <Link to={"#"}>{display}</Link>
                    ) : (
                      <Link>
                        Free Left (<span>{Free || 0}</span>/9)
                      </Link>
                    )}

                    {/* premium button */}
                    <Link to={"#"}>
                      <button className="bg-gold-500 hover:bg-gold-600 text-white font-semibold p-1 shadow-lg transform transition-all duration-150 ease-in-out animate-shine rounded flex items-center gap-2">
                        <span className="text-primary-dark-more text-lg">
                          <HiCurrencyDollar />
                        </span>
                        Get Premium
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="">
                  <div className="flex flex-row justify-between px-6 items-center md:font-medium md:text-base text-white">
                    <h3 className="text-lg">{currentTab}</h3>
                    <div className="flex flex-row gap-3 items-center">
                      {/* premium button */}
                      <Link to={"#"}>
                        <button className="bg-gold-500 hover:bg-gold-600 text-white font-semibold p-1 shadow-lg transform transition-all duration-150 ease-in-out animate-shine rounded flex items-center gap-2">
                          <span className="text-primary-dark-more text-lg">
                            <HiCurrencyDollar />
                          </span>
                          Get Premium
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Conditional rendered  component */}

            <div className="header-body"></div>
            <div className="header-form"></div>
          </div>
        </div>
      </div>
      {/* MENU END */}

      {/* Header End */}
    </div>
  );
}

export default Chat;
