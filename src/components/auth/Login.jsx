import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState();

  console.log(user);

  useEffect(() => {
    const objectString = localStorage.getItem("userDetails");
    const parseObject = JSON.parse(objectString);

    if (parseObject.name) {
      setUser(parseObject);
    }
  }, []);

  return (
    <section className="form-container">
      <form className="login-form">
        {user ? (
          ""
        ) : (
          <div className="space-y-3">
            <div className="email flex flex-col gap-1">
              <label htmlFor="email" className="text-white/50">
                Email
              </label>
              <input
                type="email"
                className="bg-colors-digital-gray/50 p-1 rounded text-white outline-none border"
                placeholder="Enter your email"
                name="email"
                id="email"
              />
            </div>

            <div className="password flex flex-col gap-1">
              <label htmlFor="password" className="text-white/50">
                Password
              </label>
              <input
                type="password"
                className="bg-colors-digital-gray/50 p-1 rounded text-white outline-none border"
                placeholder="Enter your password"
                name="password"
                id="password"
              />
            </div>
          </div>
        )}

        <Link to={user ? "/chat/chatting" : ""}>
          <h4 className="border-emerald-400 rounded border p-1 mt-3 text-center text-white hover:bg-emerald-400 hover:text-white/50 transition duration-500">
            {user ? "Start Chatting" : "Log me in"}
          </h4>
        </Link>
      </form>
    </section>
  );
}

export default Login;
