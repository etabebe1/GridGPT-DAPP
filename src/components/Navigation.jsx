import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

// Navigation Components
// import ChatNav from "./chat/ChatNav";

import Home from "../pages/home";
import Chat from "../pages/chat";
import Auth from "../pages/auth";

function Navigation() {
  const location = useLocation();
  const isChatRoute = location.pathname.startsWith("/chat");

  return (
    <>
      {isChatRoute ? (
        <div>
          <Chat />
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat/*" element={<Chat />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default Navigation;
