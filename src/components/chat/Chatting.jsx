import React, { useState } from "react";

// POINT: Import context
import { useStateContext } from "../../context/context";
// POINT: Importing components
import { Form } from "./z-index";
// POINT: Importing style components
import "../../styles/components/_chatting.css";

// POINT: React-Icons
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FiAlignCenter } from "react-icons/fi";
import { FiMaximize2 } from "react-icons/fi";
import { FcSearch } from "react-icons/fc";

function Chatting() {
  // const { DAPP_NAME, fetchData } = useStateContext();
  // POINT: State Variables
  const [activeComponent, setActiveComponent] = useState("Ask anything");

  //POINT: Product list
  const productList = [
    "Ask anything",
    "Content writing",
    "Code generator",
    "Translate anything",
    "Social media",
    "Email generator",
    "Personal advice",
    "Password generator",
    "Travel/handout",
    "Essay writer",
  ];

  const close = (e) => {};

  return (
    // <div className="wrapper">
    <div className="main-wrapper">
      
      {/* Nav Start */}
      <nav className="navbar">
        <button className="nav-toggle">
          <FiAlignCenter />
        </button>

        <div className="navbar-collapse">
          <div className="inner-menu-panel">
            <button className="nav-close">
              <FiMaximize2 />
            </button>

            {/* search box */}
            <div className="search-box-wrapper">
              <div className="search-box">
                <label for="form-control">
                  <FcSearch className="search-icon"></FcSearch>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="form-control"
                  placeholder="Search here..."
                />
              </div>
            </div>

            {/* product links */}
            <ul className="inner-links">
              {productList.map((product, index) => {
                return (
                  <li
                    key={index + 1}
                    onClick={() => setActiveComponent(product)}
                    className={product === activeComponent ? "active" : ""}
                  >
                    {product}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      {/* Nav End */}
    
    {/* Header Start */}
    {/* Header End */}
    </div>
    // </div>
  );
}

export default Chatting;
