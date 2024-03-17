import React, { useState } from "react";
import { useStateContext } from "../../context/context";

function Setting() {
  const { DAPP_NAME } = useStateContext();
  console.log(DAPP_NAME);

  const PF = process.env.PUBLIC_URL;
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updating with:", formData);
    // Integration with update logic or API call goes here
  };

  const handleCancel = () => {
    setFormData({ firstName: "", lastName: "", email: "" });
  };

  return (
    <main
      className="pt-0 flex flex-col"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div
        aria-label="Setting Container"
        role="complementary"
        className="setting-container px-5 bg-colors-quantum-silver/20 rounded-t-lg flex flex-col overflow-y-auto"
        style={{ height: "100%" }}
      >
        <header className="top-element text-white text-sm sm:text-base">
          <div className="flex flex-row items-center justify-between py-5">
            <h1 className="font-bold text-sm sm:text-lg">My Account</h1>
          </div>
          <hr className="border-1 border-colors-quantum-silver w-full" />
        </header>

        <div className="bg-logo-container relative flex flex-row py-2">
          <img
            src={`${PF}/assets/images/info-bg.jpg`}
            className="h-[6rem] w-full object-cover rounded-md"
            alt=""
          />
          <div className="logo-container absolute w-full top-16">
            <img
              src={`${PF}/GridGPT-logo.png`}
              className=" w-[5rem] h-[5rem]  mx-auto"
              alt=""
            />
          </div>
        </div>

        <section
          aria-label=""
          className="body-element sm:px-5 py-10"
          style={{ flex: 1, height: "0px" }}
        >
          <form onSubmit={handleSubmit} className="account-update-form ">
            {/* input container */}
            <div className="form-inputs flex justify-center flex-wrap gap-4 border-b-1 border-colors-quantum-silver py-5 my-5">
              <div className="max-w-[30rem] w-full">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-[100%] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="max-w-[30rem] w-full">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-[100%] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="max-w-[30rem] w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-[100%] px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            {/* button container */}
            <div className="flex justify-between">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
              >
                Update
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Setting;
