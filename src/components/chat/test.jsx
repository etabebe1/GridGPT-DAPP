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
  const [currentChat, setCurrentChat] = useState(null);
  const [display, setDisplay] = useState("");
  const [FreeTrail, setFreeTrial] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeOptionsId, setActiveOptionsId] = useState(null);

  // POINT: State Management Context
  const { Free, address } = useStateContext();

  // LOGS: State variable logs
  // console.log(currentTab);
  console.log(FreeTrail);
  // console.log(currentChat);
  // console.log(showModal);
  // console.log(currentChat);

  // useEffect(() => {
  //   console.log(`FreeTrail updated to: ${FreeTrail}`);
  // }, [FreeTrail]);

  useEffect(() => {
    productList.length > 0 && setCurrentChat(productList[0]);
  }, []);

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
      <div className="header w-[100vw] sm:w-[93vw] h-[100vh] sm:fixed right-0 ">
        {/* mobile version header*/}

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
            {/* Conditional rendered  component */}
            <div className="body h-full w-full relative bg-colors-digital-gray-2/30">
              <div
                className={`header-body flex flex-col ${
                  currentTab === "Chat" && "h-[75vh]"
                } `}
                style={{ minHeight: "calc(100vh - 64px)" }}
              >
                {currentChat ? (
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
                      {currentTab === "Chat" && <Form />}
                    </div>
                  </div>
                ) : (
                  <div className="container flex items-center justify-center flex-1 h-full">
                    <img
                      src={"/assets/svg/character/1.svg"}
                      alt=""
                      className="w-72 mx-auto"
                    />
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

export default Chat;
