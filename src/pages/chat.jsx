import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// POINT: Import style components
import "../styles/pages/_chat.css";

// POINT: Import chat components
import {
  Chatting,
  History,
  Subscription,
  Help,
  Upgrade,
  Setting,
} from "../components/chat/z-index";

function Chat() {
  return (
    <div className="chat-container">
      <div className="p-4 bg-blue-500 text-white">
        <nav className="flex gap-4">
          <Link to="chatting">Chat</Link>
          <Link to="history">History</Link>
          <Link to="subscription">Subscription</Link>
          <Link to="help">Help</Link>
          <Link to="upgrade">Upgrade</Link>
          <Link to="setting">Setting</Link>
        </nav>
      </div>

      <Routes>
        <Route path="chatting" element={<Chatting />} />
        <Route path="history" element={<History />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="help" element={<Help />} />
        <Route path="upgrade" element={<Upgrade />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default Chat;
