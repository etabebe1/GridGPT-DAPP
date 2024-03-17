import React from "react";
import { Helmet } from "react-helmet";

// Importing react icon
import { LuDot } from "react-icons/lu";

function History() {
  const historyArray = [
    {
      id: 1,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 2,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 3,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 4,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 5,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 6,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 7,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 8,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 9,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 10,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 11,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 12,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 13,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 14,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 15,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 16,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 17,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 18,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 19,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 20,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
    {
      id: 21,
      time: "2 min ago",
      chatTitle: "Chat with Mr. Smith",
      chatType: "chat",
    },
  ];

  return (
    <>
      {/* Assuming you're using react-helmet for SEO improvements */}
      <Helmet>
        <title>Detailed History</title>
        <meta
          name="description"
          content="View your detailed chat history and explore past conversations."
        />
      </Helmet>
      {/* Main content starts here */}
      <main
        className="bg-colors-digital-gray-2/10 pt-0 flex flex-col"
        style={{ maxHeight: "calc(100vh - 64px)" }}
      >
        <div
          aria-label="History Container"
          role="complementary"
          className="history-container px-5 bg-colors-quantum-silver/20 rounded-t-lg flex flex-col flex-1 min-h-0"
        >
          <header className="top-element text-white text-sm sm:text-base flex flex-row items-center justify-between p-3 py-5">
            <h1 className="font-bold text-sm sm:text-lg">Detailed History</h1>
            <div>
              <input
                type="search"
                placeholder="Search here"
                aria-label="Search through history"
                className="p-2 w-40 md:w-64 lg:w-80 bg-colors-digital-gray-2 text-white/65 outline-none rounded-md"
              />
            </div>
          </header>
          {/* Content area */}
          <section
            aria-label="Chat history"
            className="body-element px-0 sm:px-5 flex-grow overflow-y-auto"
          >
            {historyArray.map(({ id, time, chatTitle, chatType }) => (
              <article
                className="container flex flex-col sm:flex-row justify-between p-3 my-2 bg-colors-digital-gray-2/25 rounded-lg hover:bg-colors-digital-gray-2/50 transition duration-200 ease-in-out text-white/65 cursor-pointer"
                key={id}
              >
                <h3 className="text-sm sm:text-base font-semibold text-center sm:text-left pb-2 sm:pb-0">
                  {chatTitle}
                </h3>
                <div className="details flex justify-between items-center text-sm sm:text-base mt-1 space-x-3">
                  <div className="chat-type flex items-center space-x-1 sm:space-x-2 text-blue-500">
                    <i className="text-xl" aria-hidden="true">
                      {/* Assuming LuDot is purely decorative */}
                      <LuDot />
                    </i>
                    <span className="capitalize font-medium text-xs sm:text-base">
                      {chatType}
                    </span>
                  </div>
                  <time className="time text-right text-xs sm:text-base min-w-24 sm:border-l-1 border-colors-cloud-compute-white">
                    {time}
                  </time>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

export default History;
