import React, { useState } from "react";
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
  const PF = process.env.PUBLIC_URL;

  const [currency, setCurrency] = useState("US DOLLAR");

  return (
    <main
      className="pt-0 flex flex-col"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div
        aria-label="Subscription Container"
        role="complementary"
        className="subscription-container px-5 bg-colors-quantum-silver/20 rounded-t-lg flex flex-col"
        style={{ height: "100%" }}
      >
        <header className="top-element text-white text-sm sm:text-base">
          <div className="flex flex-row items-center justify-between py-5">
            <h1 className="font-bold text-sm sm:text-lg">Subscriptions</h1>
            <div className="flex items-center space-x-2">
              <h4>Currency</h4>
              {/*TODO: select options is not working */}
              <select
                name=""
                value={currency}
                onChange={(evt) => setCurrency(evt.target.value)}
                className="p-1 bg-colors-digital-gray-2/60"
              >
                <option value="US Dollar">US Dollar</option>
                <option value="EURO">EURO</option>
                <option value="YUAN">YUAN</option>
              </select>
            </div>
          </div>
          <hr className="border-1 border-colors-quantum-silver w-full" />
        </header>

        <section
          aria-label=""
          className="body-element sm:px-5 overflow-y-auto"
          style={{ flex: 1, height: "0px" }}
        >
          <div className="sm:p-5">
            {/* lists */}
            <div className="py-3 flex gap-4 flex-wrap justify-center">
              {[1, 2, 3].map((membership, index) => {
                return (
                  <div
                    key={index + 1}
                    className="min-w-[15rem] w-[18rem] flex justify-center"
                  >
                    <Card
                      color="gray"
                      variant="gradient"
                      className="w-full h-full max-w-[18rem] p-4 backdrop-blur-lg border border-gray-200/50 shadow-lg rounded-lg transition duration-300 ease-in-out hover:border-blue-500/50"
                      style={{
                        background: `linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3))`,
                        backdropFilter: "blur(10px)",
                        transition: "all 0.3s ease-in-out",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backdropFilter = "blur(15px)";
                        e.currentTarget.style.background = `linear-gradient(145deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4))`; // Slightly more visible gradient on hover
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backdropFilter = "blur(10px)";
                        e.currentTarget.style.background = `linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3))`; // Original gradient
                      }}
                    >
                      {/* Your Card component here */}
                      <Card
                        color="gray"
                        variant="gradient"
                        className="w-full max-w-[20rem] p-4"
                      >
                        {/* card header */}
                        <CardHeader
                          floated={false}
                          shadow={false}
                          color="transparent"
                          className="m-0 mb-4 rounded-none border-b border-white/10 pb-4 text-center flex items-center justify-center space-x-2"
                        >
                          <img
                            src={`${PF}/assets/svg/pricing/yearly.svg`}
                            alt=""
                          />
                          <Typography
                            variant="small"
                            color="white"
                            className="font-normal uppercase"
                          >
                            standard
                          </Typography>
                        </CardHeader>

                        {/* card body */}
                        <CardBody className="p-0">
                          <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <PiSealCheckDuotone />
                              </span>
                              <Typography className="font-normal">
                                5 team members
                              </Typography>
                            </li>
                            <li className="flex items-center gap-4">
                              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <PiSealCheckDuotone />
                              </span>
                              <Typography className="font-normal">
                                200+ components
                              </Typography>
                            </li>
                            <li className="flex items-center gap-4">
                              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <PiSealCheckDuotone />
                              </span>
                              <Typography className="font-normal">
                                40+ built-in pages
                              </Typography>
                            </li>
                            <li className="flex items-center gap-4">
                              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <PiSealCheckDuotone />
                              </span>
                              <Typography className="font-normal">
                                1 year free updates
                              </Typography>
                            </li>
                            <li className="flex items-center gap-4">
                              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <PiSealCheckDuotone />
                              </span>
                              <Typography className="font-normal">
                                Life time technical support
                              </Typography>
                            </li>
                          </ul>
                        </CardBody>

                        {/* card footer */}
                        <CardFooter className="mt-12 p-0">
                          <Button
                            size="lg"
                            color="white"
                            className="p-2 hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-slate-600"
                            ripple={false}
                            fullWidth={true}
                          >
                            Buy Now
                          </Button>
                        </CardFooter>
                      </Card>
                    </Card>
                  </div>
                );
              })}
            </div>
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
