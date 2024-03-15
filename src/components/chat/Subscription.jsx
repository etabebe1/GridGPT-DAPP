import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { PiSealCheckDuotone } from "react-icons/pi";

function Subscription() {
  const navigate = useNavigate();

  return (
    <main
      className="pt-0 flex flex-col"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div
        aria-label="History Container"
        role="complementary"
        className="history-container px-5 bg-colors-quantum-silver/20 rounded-t-lg flex flex-col"
        style={{ height: "100%" }}
      >
        <header className="top-element text-white text-sm sm:text-base">
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

        <section
          aria-label=""
          className="body-element sm:px-5 overflow-y-auto  bg-green-500"
          style={{ flex: 1, height: "0px" }}
        >
          <div className="bg-gray-500 sm:p-5">
            {/* lists */}
            <div className="py-3 bg-blue-500"></div>
            {/* options */}
            <div className="py-5 flex items-center gap-1 flex-col sm:flex-row justify-center text-center">
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block ">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center justify-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 ">
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
              <span className="text-white text-sm sm:text-base">
                Continue with limited access.
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Subscription;
