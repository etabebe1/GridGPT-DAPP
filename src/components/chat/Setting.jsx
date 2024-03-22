import React, { useState, useEffect } from "react";
import { useStateContext } from "../../context/context";

// icons
import { CameraAltOutlined } from "@mui/icons-material";

function Setting() {
  const PF = process.env.PUBLIC_URL;
  const { DAPP_NAME, userMembership } = useStateContext();
  const [user, setUser] = useState();
  // TODO: old password will be fetched form db
  const [oldPass, setOldPass] = useState("");

  // console.log(oldPass);
  // Object.keys(userMembership).length > 0 && console.log(userMembership);

  const [newUser, setNewUser] = useState({
    name: user?.name || "",
    surname: user?.surname || "",
    email: user?.email || "",
    password: user?.password || "",
    passwordConfirm: user?.passwordConfirm || "",
  });

  // console.log(newUser.password === )

  // useEffect(() => {
  //   console.log(newUser);
  // }, [newUser]);

  useEffect(() => {
    const string = localStorage.getItem("userDetails");
    const parsedObject = JSON.parse(string);
    if (parsedObject?.name) {
      setUser(parsedObject);
      return;
    }
  }, []);

  const handleFormFieldChange = (fieldName, evt) => {
    evt.preventDefault();
    setNewUser({ ...newUser, [fieldName]: evt.target.value });
  };

  const updateUser = (evt) => {
    evt.preventDefault();
    const JSONObject = JSON.stringify(newUser);
    localStorage.setItem("userDetails", JSONObject);
    window.location.reload();
  };

  const updatePassword = (evt) => {
    evt.preventDefault();
    console.log(newUser.password === newUser.passwordConfirm);
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
        <div className="w-[90%] sm:w-full h-[42rem] sm:h-[90vh] bg-colors-digital-gray/50 rounded-lg mx-auto mt-2 sm:mt-0 px-5">
          <header className="top-element text-white text-sm sm:text-base">
            <div className="flex flex-row items-center justify-between py-5">
              <h1 className="font-bold text-sm sm:text-lg">My Account</h1>
            </div>
            <hr className="border-1 border-colors-quantum-silver w-full" />
          </header>
          <div className="bg-logo-container relative flex flex-col py-2">
            <img
              src={`${PF}/assets/images/info-bg.jpg`}
              className="h-[6rem] w-full object-cover rounded-md"
              alt=""
            />

            <div className="profile-container mx-auto w-full -top-8 relative flex justify-center">
              <div className="relative inline-block bg-colors-digital-gray border rounded-full">
                <img
                  src={`${PF}/GridGPT-logo.png`}
                  className="w-[5rem] h-[5rem]"
                  alt=""
                />
                {/* Camera Icon Positioned on top right of the Profile Image */}
                <div className="absolute top-0 right-0 transform translate-x-1 translate-y-12">
                  <label htmlFor="profile">
                    <i className="text-white cursor-pointer">
                      <CameraAltOutlined />
                    </i>
                  </label>
                  <input type="file" id="profile" className="hidden" />
                </div>
              </div>

              <div className="text-center text-white">
                <h4>{user?.name}</h4>
                <p>{user?.email}</p>
              </div>
            </div>
          </div>

          <section
            aria-label=""
            className="body-element sm:px-5 relative -top-16"
            style={{ flex: 1, height: "0px" }}
          >
            <form className="account-update-form ">
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
                      placeholder={user?.name}
                      onChange={(evt) => handleFormFieldChange("name", evt)}
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
                      placeholder={user?.lastName}
                      onChange={(evt) => handleFormFieldChange("surname", evt)}
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
                      placeholder={user?.email}
                      onChange={(evt) => handleFormFieldChange("email", evt)}
                      className="mt-1 block w-[100%] px-3 py-2 bg-colors-quantum-silver/60 text-white/85 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>

              {/* button container */}
              <div className="flex gap-4 justify-between sm:justify-start px-4">
                <button
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                  onClick={() => updateUser()}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        </div>

        {/* second form container */}
        <div className="w-[90%] sm:w-[100%] h-[40rem] sm:h-[80vh] bg-colors-digital-gray/50 px-5 rounded-lg mx-auto my-5 sm:mt-0">
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
            <form className="account-update-form ">
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
                      placeholder={
                        userMembership.membershipId === 1
                          ? "One Month"
                          : userMembership.membershipId === 2
                          ? "Three Months"
                          : userMembership.membershipId === 3
                          ? "Six Months"
                          : userMembership.membershipId === 4
                          ? "One Year"
                          : "No membership"
                      }
                      className="mt-1 block w-[100%] px-3 py-2 bg-colors-quantum-silver/60 text-white/85 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="min-w-[15rem] sm:w-[48%]">
                    <label
                      htmlFor="membershipCost"
                      className="block text-sm font-medium text-white"
                    >
                      Membership Cost
                    </label>
                    <input
                      type="text"
                      id="membershipCost"
                      name="Membership Cost"
                      placeholder={
                        userMembership.membershipId === 1
                          ? "1 MATIC"
                          : userMembership.membershipId === 2
                          ? "2.5 MATIC"
                          : userMembership.membershipId === 3
                          ? "3.5 MATIC"
                          : userMembership.membershipId === 4
                          ? "5 MATIC"
                          : "6"
                      }
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
                      placeholder={userMembership.id}
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
                      placeholder={userMembership.expiredDate || ""}
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
                      placeholder={userMembership.addressUser}
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
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        </div>

        {/* third form container */}
        <div className="w-[90%] sm:w-[100%] h-[31rem] sm:h-[63vh] bg-colors-digital-gray/50 px-5 rounded-lg mx-auto my-5 sm:mt-0">
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
            <form className="account-update-form ">
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
                      placeholder="Old password"
                      required={true}
                      onChange={(e) => setOldPass(e.target.value)}
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
                      placeholder="New password"
                      required={true}
                      onChange={(evt) => handleFormFieldChange("password", evt)}
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
                      placeholder="Confirm Password"
                      required={true}
                      onChange={(evt) =>
                        handleFormFieldChange("passwordConfirm", evt)
                      }
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
                  onClick={(e) => updatePassword(e)} // to prevent
                >
                  Update
                </button>
                <button
                  type="button"
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
