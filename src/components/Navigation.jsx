import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

// chat nav
import ChatNav from "./chat/ChatNav";

import Home from "../pages/home";
import Chat from "../pages/chat";
import Auth from "../pages/auth";

function Navigation() {
  const location = useLocation();
  const isChatRoute = location.pathname.startsWith("/chat");

  return (
    <>
      {isChatRoute ? (
        <ChatNav />
      ) : (
        <div>
          <div className="p-5 bg-gray-800 text-white">
            <nav className="flex gap-4">
              <Link to="/">Home</Link>
              <Link to="/auth">Auth</Link>
              <Link to="/chat">Chat</Link>
            </nav>
          </div>

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
