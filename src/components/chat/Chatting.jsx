import React, { useEffect, useState } from "react";

function Chatting({ currentChat }) {
  useEffect(() => {
    currentChat && console.log(currentChat);
  }, [currentChat]);

  return (
    <div className="flex flex-col h-full">
      {currentChat && (
        <div className="conversation">
          {`The current chat is ${currentChat}`}
        </div>
      )}
    </div>
  );
}

export default Chatting;
