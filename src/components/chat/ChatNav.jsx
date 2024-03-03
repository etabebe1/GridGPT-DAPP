import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// POINT: Components

import Home from "../../pages/home";
import Chat from "../../pages/chat";
import Auth from "../../pages/auth";

function ChatNav() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/chat/*" element={<Chat />} />
      </Routes>
    </>
  );
}

export default ChatNav;
