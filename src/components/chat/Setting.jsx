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
    <main className="pt-0" style={{ height: "calc(100vh - 64px)" }}>
      <div
        aria-label="Setting Container"
        role="complementary"
        className="setting-container space-y-5 overflow-y-auto mb-20 pb-[3rem]"
        style={{ height: "100%" }}
      >
        {/* initial  form container */}
        <div className="w-[90%] sm:w-full h-[35rem] sm:h-[80vh] bg-colors-digital-gray/50 px-5 rounded-lg mx-auto mt-2 sm:mt-0">
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
            className="body-element sm:px-5"
            style={{ flex: 1, height: "0px" }}
          >
            <form onSubmit={handleSubmit} className="account-update-form ">
              {/* input container */}
              <div className="form-inputs flex border-b-1 border-colors-quantum-silver py-5 my-5">
                <div className="w-full flex flex-wrap gap-4 justify-center sm:justify-start">
                  <div className="min-w-[15rem] sm:w-[48%]">
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
                      className="mt-1 block w-[100%] px-3 py-2 bg-colors-quantum-silver/60 text-white/85 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="min-w-[15rem] sm:w-[48%]">
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
                      className="mt-1 block w-[100%] px-3 py-2 bg-colors-quantum-silver/60 text-white/85 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="min-w-[15rem] sm:w-[48%]">
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
                      className="mt-1 block w-[100%] px-3 py-2 bg-colors-quantum-silver/60 text-white/85 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* button container */}
              <div className="flex gap-4 justify-between sm:justify-start px-4">
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

        {/* second form container */}
        <div className="w-[90%] sm:w-full h-[37rem] sm:h-[80vh] bg-colors-digital-gray/50 px-5 rounded-lg mx-auto my-5 sm:mt-0">
          <header className="top-element text-white text-sm sm:text-base">
            <div className="flex flex-row items-center justify-between py-5">
              <h1 className="font-bold text-sm sm:text-lg">Membership</h1>
            </div>
            <hr className="border-1 border-colors-quantum-silver w-full" />
          </header>

          <section
            aria-label=""
            className="body-element sm:px-5"
            style={{ flex: 1, height: "0px" }}
          >
            <form onSubmit={handleSubmit} className="account-update-form ">
              {/* input container */}
              <div className="form-inputs flex border-b-1 border-colors-quantum-silver py-5 my-5">
                <div className="w-full flex flex-wrap gap-4 justify-center sm:justify-start">
                  <div className="min-w-[15rem] sm:w-[48%]">
                    <label
                      htmlFor="membershipPlan"
                      className="block text-sm font-medium text-white"
                    >
                      Membership Plan
                    </label>
                    <input
                      type="text"
                      id="membershipPlan"
                      name="membershipPlan"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 block w-[100%] px-3 py-2 bg-colors-quantum-silver/60 text-white/85 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="min-w-[15rem] sm:w-[48%]">
                    <label
                      htmlFor="Membership Cost"
                      className="block text-sm font-medium text-white"
                    >
                      Membership Cost
                    </label>
                    <input
                      type="text"
                      id="Membership Cost"
                      name="Membership Cost"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 block w-[100%] px-3 py-2 bg-colors-quantum-silver/60 text-white/85 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="min-w-[15rem] sm:w-[48%]">
                    <label
                      htmlFor="emailId"
                      className="block text-sm font-medium text-white"
                    >
                      EmailID
                    </label>
                    <input
                      type="emailId"
                      id="emailId"
                      name="emailId"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-[100%] px-3 py-2 bg-colors-quantum-silver/60 text-white/85 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="min-w-[15rem] sm:w-[48%]">
                    <label
                      htmlFor="membershipExpired"
                      className="block text-sm font-medium text-white"
                    >
                      Membership Expired
                    </label>
                    <input
                      type="membershipExpired"
                      id="membershipExpired"
                      name="membershipExpired"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-[100%] px-3 py-2 bg-colors-quantum-silver/60 text-white/85 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="min-w-[15rem] sm:w-[48%]">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-white"
                    >
                      Address
                    </label>
                    <input
                      type="address"
                      id="address"
                      name="address"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-[100%] px-3 py-2 bg-colors-quantum-silver/60 text-white/85 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* button container */}
              <div className="flex gap-4 justify-between sm:justify-start px-4">
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

        {/* third form container */}
        <div className="w-[90%] sm:w-full h-[30rem] sm:h-[63vh] bg-colors-digital-gray/50 px-5 rounded-lg mx-auto my-5 sm:mt-0">
          <header className="top-element text-white text-sm sm:text-base">
            <div className="flex flex-row items-center justify-between py-5">
              <h1 className="font-bold text-sm sm:text-lg">Change Password</h1>
            </div>
            <hr className="border-1 border-colors-quantum-silver w-full" />
          </header>

          <section
            aria-label=""
            className="body-element sm:px-5"
            style={{ flex: 1, height: "0px" }}
          >
            <form onSubmit={handleSubmit} className="account-update-form ">
              {/* input container */}
              <div className="form-inputs flex border-b-1 border-colors-quantum-silver py-5 my-5">
                <div className="w-full flex flex-wrap gap-4 justify-center sm:justify-start">
                  <div className="min-w-[15rem] sm:w-[48%]">
                    <label
                      htmlFor="oldPassword"
                      className="block text-sm font-medium text-white"
                    >
                      Old Password
                    </label>
                    <input
                      type="password"
                      id="oldPassword"
                      name="oldPassword"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 block w-[100%] px-3 py-2 bg-colors-quantum-silver/60 text-white/85 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="min-w-[15rem] sm:w-[48%]">
                    <label
                      htmlFor="newPassword"
                      className="block text-sm font-medium text-white"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 block w-[100%] px-3 py-2 bg-colors-quantum-silver/60 text-white/85 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="min-w-[15rem] sm:w-[48%]">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-white"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 block w-[100%] px-3 py-2 bg-colors-quantum-silver/60 text-white/85 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* button container */}
              <div className="flex gap-4 justify-between sm:justify-start px-4">
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
      </div>
    </main>
  );
}

export default Setting;
