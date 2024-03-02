import React from "react";

// POINT: Import style components
import "../styles/pages/_chat.css";

// POINT: Import chat components
import { Chatting, Modal } from "../components/chat/z-index";

function Chat() {
  return (
    <div className="chat-container">
      <Chatting />
      {/* <Modal /> */}
    </div>
  );
}

export default Chat;
