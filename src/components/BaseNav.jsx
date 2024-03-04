import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

function BaseNav() {
  return (
    <>
      <div className="p-5 bg-gray-800 text-white">
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/auth">Auth</Link>
          <Link to="/chat">Chat</Link>
        </nav>
      </div>
    </>
  );
}

export default BaseNav;
