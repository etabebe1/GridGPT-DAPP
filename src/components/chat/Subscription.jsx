import React from "react";
import { useNavigate } from "react-router-dom";

function Subscription() {
  const navigate = useNavigate();

  return (
    <main
      className="bg-colors-digital-gray-2/10 pt-0 sm:pt-16 flex flex-col"
      style={{ maxHeight: "calc(100vh - 64px)" }}
    >
      <div
        aria-label="History Container"
        role="complementary"
        className="history-container px-5 bg-colors-quantum-silver/20 rounded-t-lg flex flex-col flex-1 min-h-0"
      >
        <header className="top-element text-white text-sm sm:text-base ">
          <div className="flex flex-row items-center justify-between py-5">
            <h1 className="font-bold text-sm sm:text-lg">Detailed History</h1>

            <div className="flex items-center space-x-2">
              <h4>Currency</h4>
              <select
                name=""
                id="currency"
                className="p-1 bg-colors-digital-gray-2/60"
              >
                <option selected>US Dollar</option>
                <option value="1">EURO</option>
                <option value="2">YUAN</option>
              </select>
            </div>
          </div>
          <hr className="border-1 border-colors-quantum-silver w-full" />
        </header>

        {/* Content area */}
        {/* flex-grow overflow-y-auto */}
        <section aria-label="" className="body-element px-0 sm:px-5 ">
          <div className="option-list-container">
            <div className="list-container">
              {[1, 2, 3].map((membership, index) => {
                // console.log(membership);
                return <div className=""></div>;
              })}
            </div>
            <div className="option-container flex flex-row items-center space-x-1">
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                  <span>Continue</span>
                  <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
              <h3>Continue with limited version</h3>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Subscription;

{
  /* <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50"
      style={{ minHeight: "100vh" }}
    >
      <div className="bg-white rounded-lg shadow-lg p-8 m-4 max-w-sm max-h-full overflow-auto">
        <button
          onClick={() => handleCloseClick()}
          className="float-right text-gray-700 hover:text-gray-900"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="mt-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Upgrade to Pro Membership
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Get access to all our features with a Pro membership.
          </p>
        </div>
        <div className="mt-5">
          <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700">
            Upgrade Now
          </button>
        </div>
      </div>
    </div> */
}
