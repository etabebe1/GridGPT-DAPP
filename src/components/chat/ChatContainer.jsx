import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

// POINT: Importing react icons
import { MdCardMembership, MdOutlineHelpOutline } from "react-icons/md";
import { BsChatFill } from "react-icons/bs";
import { IoMdGitNetwork } from "react-icons/io";
import { GiUpgrade } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { HiCurrencyDollar } from "react-icons/hi";
import { FaGreaterThan } from "react-icons/fa6";
import { useStateContext } from "../../context/context";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

/* POINT: Importing chat components */
import {
  Chatting,
  Form,
  Help,
  History,
  Modal,
  Setting,
  SideBar,
  Subscription,
  Upgrade,
} from "./z-index";

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

// Assuming currentChat is available in this scope. If it comes from props or state, adjust accordingly.

function ChatContainer() {
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

  // const chatComponentArray = {
  //   "/chat/chatting": () => <Chatting currentChat={currentChat} />,
  //   "/chat/history": History,
  //   "/chat/subscription": Subscription,
  //   "/chat/help": Help,
  //   "/chat/upgrade": Upgrade,
  //   "/chat/setting": Setting,
  // };

  const { DAPP_NAME, fetchData } = useStateContext();
  const navigate = useNavigate();
  const location = useLocation();
  const routePath = location.pathname;

  // POINT: State Variables
  const [currentTab, setCurrentTab] = useState("Chat");
  const [currentChat, setCurrentChat] = useState(null);
  const [display, setDisplay] = useState("");
  const [FreeTrail, setFreeTrial] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeOptionsId, setActiveOptionsId] = useState(null);

  // Assuming currentChat is available in this scope. If it comes from props or state, adjust accordingly.
  const chatComponentConfig = {
    "/chat/chatting": Chatting,
    "/chat/help": Help,
    "/chat/history": History,
    "/chat/modal": Modal,
    "/chat/setting": Setting,
    "/chat/sidebar": SideBar,
    "/chat/subscription": Subscription,
    "/chat/upgrade": Upgrade,
  };

  const ChatComponent = chatComponentConfig[routePath];

  // POINT: State Management Context
  const { Free, address } = useStateContext();

  // LOGS: State variable logs
  // console.log(currentTab);
  // console.log(FreeTrail);
  // console.log(currentChat);
  // console.log(showModal);
  // console.log(currentChat);
  // useEffect(() => {
  //   console.log(`FreeTrail updated to: ${FreeTrail}`);
  // }, [FreeTrail]);
  // console.log(ChatComponent);

  // NOTE: loading data from local storage
  useEffect(() => {
    // POINT: user credentials form local storage
    const UserCredentials = localStorage.getItem("UserCredentials");
    const member = JSON.parse(UserCredentials);
    setDisplay(member);

    //TODO: Before setting display => member check if user is registered for premium
    const freeTrailStr = localStorage.getItem("freeTrail"); // Retrieving as string
    const freeTrail = freeTrailStr ? parseInt(freeTrailStr, 10) : 0; // Convert to number

    setFreeTrial(freeTrail); // Update state

    // setCurrentChat(productList[0]);
    // LOGS:
    // console.log(member);
    // console.log(freeTrail);
  }, []);

  const close = (e) => {
    e.preventDefault();
  };

  const handleNavigation = useCallback(
    (route, activeTab) => {
      navigate(route);
      setIsOpen(false);
      // console.log(activeTab);
      setCurrentTab(activeTab);
    },
    [navigate]
  );

  const toggleNav = useCallback(() => {
    setIsOpen(!isOpen);
    setShowModal(false);
  }, [isOpen]);

  const handleShowModal = useCallback(() => {
    setShowModal(!showModal);
    setIsOpen(false);
  }, [showModal]);

  return (
    <div>
      {/* NAV START */}
      <div
        className={`sm:left-0 fixed top-0 sm:w-[10vw] ${
          isOpen ? "left-0" : "-left-full"
        } transition-left duration-300 z-50`}
      >
        <nav className="w-[70vw] sm:w-[7vw] h-[100vh] sm:fixed fixed flex flex-col bg-colors-digital-gray-2/75 text-white ">
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
              // console.log(link.title === currentTab);

              return (
                <div
                  className={`group ${
                    currentTab === link.title && "bg-colors-quantum-silver"
                  } hover:bg-colors-quantum-silver hover:opacity-60 p-3 mx-3 rounded hover:shadow-xl cursor-pointer transition-all duration-500`}
                  key={index + 1}
                  onClick={() => handleNavigation(link.route, link.title)}
                >
                  <div className="flex flex-row gap-3  items-center">
                    <i className="text-2xl text-colors-cloud-compute-white   sm:text-lg group-hover:rotate-45 transition-all duration-150 ">
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

      <div className="header w-[100vw] sm:w-[93vw] h-[100vh] sm:fixed right-0 ">
        {/* mobile version header*/}
        <div className="flex gap-4 shadow-lg backdrop-blur-2xl sm:shadow-none sm:backdrop-blur-none sm:hidden fixed w-full h-16 border-b-colors-digital-gray-2 bg-colors-digital-gray-2/75 border-b-1">
          <button
            className="text-2xl text-white p-2 sm:hidden"
            onClick={() => toggleNav()} // Toggle navigation visibility
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

            <div onClick={() => handleShowModal()} className="cursor-pointer">
              <span className="text-white text-sm flex flex-row justify-center items-center gap-2">
                {currentChat || "Start new chat"}
                {productList.length > 0 && (
                  <i
                    className={`transition-all duration-500 ${
                      showModal && "rotate-90"
                    }`}
                  >
                    <FaGreaterThan />
                  </i>
                )}
              </span>
            </div>

            {showModal && (
              <ul className="overflow-y-auto flex-1 h-[78vh] text-white bg-colors-quantum-silver/35 absolute top-16 px-2 right-0 flex flex-col gap-5 z-30">
                {productList.map((list, index) => {
                  return (
                    <li
                      key={index + 1}
                      onClick={() => setCurrentChat(list)}
                      className={`cursor-pointer hover:bg-colors-digital-gray-2 p-2 rounded flex flex-row items-center justify-between gap-5 ${
                        currentChat === list ? "text-primary-dark" : ""
                      }`}
                    >
                      <div className="flex flex-row items-center gap-1 text-sm">
                        <span
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent onClick of the li from being called
                            setActiveOptionsId(
                              activeOptionsId === index ? null : index
                            ); // Toggle visibility or close if already open
                          }}
                        >
                          <PiDotsThreeVerticalBold />
                        </span>
                        <h3>{list}</h3>
                      </div>
                      {activeOptionsId === index && (
                        <div className="flex flex-row items-center gap-3">
                          <span className="text-green-500">
                            <MdOutlineModeEditOutline />
                          </span>
                          <span className="text-red-500">
                            <RiDeleteBin5Line />
                          </span>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* Conditional rendered  component */}
          <div
            className="flex flex-col w-full absolute top-16"
            style={{ minHeight: "calc(100vh - 64px)" }}
          >
            {/* small screen chatting component */}
            <div className="flex-1 overflow-auto">
              {/* Assuming Chatting component should fill available space and allow scrolling if content overflows */}
              <ChatComponent currentChat={currentChat} />
            </div>
            <div
              className={`w-full ${currentTab === "Chat" ? "block" : "hidden"}`}
              style={{ maxHeight: "calc(100vh - 64px)" }}
            >
              {currentTab === "Chat" && FreeTrail && (
                <Form
                  close={close}
                  proMember={display}
                  address={address}
                  freeTrail={FreeTrail}
                />
              )}
            </div>
          </div>
        </div>

        {/* big screen header  */}
        {/* Middle component on big screen */}
        <div className="flex">
          {currentTab === "Chat" && (
            <div className="product hidden sm:flex flex-col px-3 py-5 gap-4 h-[100vh] w-[21vw] min-w-[15rem] bg-colors-digital-gray/35">
              <input
                type="text"
                className="bg-colors-digital-gray-2 p-2 rounded outline-none text-white"
                placeholder="Search here..."
              />

              <ul
                className="px-4 flex flex-col text-white gap-5 overflow-scroll
                "
              >
                {/* here we will be using fetched data  */}
                {productList.map((list, index) => {
                  return (
                    <li
                      key={index + 1}
                      onClick={() => setCurrentChat(list)}
                      className={`cursor-pointer  transition-all hover:bg-colors-ai-blue p-2 rounded ${
                        currentChat === list
                          ? "text-colors-quantum-silver bg-opacity-75"
                          : ""
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
            <div className="header-top bg-colors-digital-gray-2/70 rounded-b-sm shadow-lg py-5 w-full">
              {currentTab === "Chat" ? (
                <div className="flex flex-row justify-around items-center md:font-medium md:text-base text-white">
                  <h3>{currentChat || "Start new chat"}</h3>
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
                        <span className="text-colors-deep-space-blue text-lg">
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
                          <span className="text-colors-ai-blue text-lg">
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
            <div className="body h-full w-full relative bg-colors-digital-gray-2/30">
              <div
                className={`header-body flex flex-col ${
                  currentTab === "Chat" && "h-[75vh]"
                } `}
                style={{ minHeight: "calc(100vh - 64px)" }}
              >
                {currentTab === "Chat" && (
                  <div className="flex flex-col flex-1">
                    {currentChat ? (
                      <div className="flex flex-col flex-1">
                        <div className="flex-1 overflow-y-auto bg-red-500">
                          {/* Large screen chatting component */}
                          {/* Chatting content, allowed to grow and scroll */}
                          <ChatComponent currentChat={currentChat} />
                        </div>
                        <div
                          className={`header-form mt-auto my-3 ${
                            currentTab === "Chat" ? "block" : "hidden"
                          }`}
                        >
                          {/* Form component, assumed to be at the bottom */}
                          {currentTab === "Chat" && (
                            <Form
                              close={close}
                              proMember={display}
                              address={address}
                              freeTrail={FreeTrail}
                            />
                          )}
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="container flex items-center justify-center flex-1 h-full">
                          <img
                            src={"/assets/svg/character/1.svg"}
                            alt=""
                            className="w-72 mx-auto"
                          />
                        </div>
                        <div className="flex flex-col flex-1">
                          <div className="flex-1 overflow-y-auto">
                            {/* Chatting content, allowed to grow and scroll */}
                            <Chatting currentChat={currentChat} />
                          </div>
                          <div
                            className={`header-form mt-auto my-3 ${
                              currentTab === "Chat" ? "block" : "hidden"
                            }`}
                          >
                            {/* Form component, assumed to be at the bottom */}
                            {currentTab === "Chat" && (
                              <Form
                                close={close}
                                proMember={display}
                                address={address}
                                freeTrail={FreeTrail}
                              />
                            )}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MENU END */}

      {/* Header End */}
    </div>
  );
}

export default ChatContainer;
