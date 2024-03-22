import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function Chatting({ currentChat }) {
  // useEffect(() => {
  //   currentChat && console.log(currentChat);
  // }, [currentChat]);

  return (
    <>
      {/* Assuming you're using react-helmet for SEO improvements */}
      <Helmet>
        <title>Chat AI</title>
        <meta
          name="description"
          content="Ask AI anything! how why, what, when and where ask anything about anything."
        />
      </Helmet>

      <div className="flex flex-col h-full">
        {currentChat && (
          <div className="conversation">
            {`The current chat is ${currentChat}`}
          </div>
        )}
      </div>
    </>
  );
}

export default Chatting;
