import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Subscription() {
  const navigate = useNavigate();

  // Function to handle click
  const handleCloseClick = () => {
    navigate(-1); // Navigate back to the previous route
  };

  return (
    <div
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
    </div>
  );
}

export default Subscription;
