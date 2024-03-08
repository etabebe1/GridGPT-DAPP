import React, { useEffect, useState } from "react";

function Chatting({ currentChat }) {
  useEffect(() => {
    // console.log(currentChat);
  }, [currentChat]);
  return (
    <div className="flex flex-col h-full">
      {currentChat && <div className="conversation"></div>}
    </div>
  );
}

export default Chatting;
