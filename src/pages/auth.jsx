import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Login, Signup } from "../components/auth/z-index";

function Auth() {
  const [auth, setAuth] = useState("login");

  return (
    <main className="auth">
      <div className="base-component-container">
        <header className="h-[64px] w-full bg-colors-digital-gray-2/75 flex items-center px-2">
          <div className="logo-container sm:w-[70vw] mx-auto">
            <Link to={"/"}>
              <img src={`/assets/images/logo.svg`} alt="" />
            </Link>
          </div>
        </header>
        <section
          className="flex flex-row justify-around items-center"
          style={{ height: "calc(100vh - 64px)" }}
        >
          {/* left side */}
          <div className="graphics-container h-full w-[50%] hidden lg:block relative">
            <div>
              <img
                src="/assets/svg/auth/1.svg"
                className="absolute bottom-0 w-[40rem] left-[0rem]"
                alt=""
              />
              <img
                src="/assets/svg/auth/2.svg"
                className="absolute bottom-2 w-[40rem] left-[0rem]"
                alt=""
              />
              <img
                src="/assets/svg/auth/3.svg"
                className="neural-head absolute w-[25rem] bottom-28 left-[8rem] animate-spinY"
                alt=""
              />
            </div>
          </div>

          {/* auth card */}
          <div className="card-container px-3 py-6 border bg-colors-quantum-silver/20 backdrop-blur-md rounded-md max-w-[300px] sm:max-w-[400px]">
            <div className="card flex flex-col gap-5 justify-center">
              <h1 className="header text-center text-2xl text-white font-medium">
                Welcome to <span className="text-emerald-400">Megabot!</span>
              </h1>
              <div className="switcher flex flex-row justify-center items-center">
                <button
                  className={`text-center text-lg pb-1 px-10 sm:px-14 ${
                    auth === "login"
                      ? "text-emerald-400 border-emerald-400 border-b-2"
                      : "text-white/65 border-white/65 border-b"
                  } transition-all duration-1000`}
                  onClick={() => setAuth("login")}
                >
                  Login
                </button>
                <button
                  className={`text-center text-lg pb-1 px-10 sm:px-14 ${
                    auth === "signup"
                      ? "text-emerald-400 border-emerald-400 border-b-2"
                      : "text-white/65 border-white/65 border-b"
                  } transition-all duration-300`}
                  onClick={() => setAuth("signup")}
                >
                  SignUp
                </button>
              </div>

              {/* conditional rendered component here */}
              <div className="form-container">
                {auth === "login" ? <Login /> : <Signup />}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Auth;
