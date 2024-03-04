import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

// Navigation Components
import ChatNav from "./chat/ChatNav";
import BaseNav from "./BaseNav";

import Home from "../pages/home";
import Chat from "../pages/chat";
import Auth from "../pages/auth";

// POINT: Import chat components
import {
  Chatting,
  History,
  Subscription,
  Help,
  Upgrade,
  Setting,
} from "../components/chat/z-index";

function Navigation() {
  const location = useLocation();
  const isChatRoute = location.pathname.startsWith("/chat");

  return (
    <>
      {isChatRoute ? (
        <div>
          <div>
            {/* REMARK: Navigation for chat  */}
            <ChatNav />

            <Routes>
              <Route path="/chatting" element={<Chatting />} />
              <Route path="/history" element={<History />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/help" element={<Help />} />
              <Route path="/upgrade" element={<Upgrade />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/chat/*" element={<Chat />} />
          </Routes>
        </div>
      ) : (
        <div>
          {/* REMARK: Navigation for the entire application*/}
          <BaseNav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/chat/*" element={<Chat />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default Navigation;
