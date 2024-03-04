import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// POINT: Import context
import { useStateContext } from "../../context/context";
// POINT: Importing components
// import { Form } from "./z-index";

// POINT: React-Icons
// import { FaHandHoldingDollar } from "react-icons/fa6";




function Chatting() {
  const { DAPP_NAME, fetchData } = useStateContext();
  // POINT: State Variables
  const [activeComponent, setActiveComponent] = useState("Ask anything");
  const [proMember, setProMember] = useState("");
  const [FreeTrial, setFreeTrial] = useState();
  const [hide, setHide] = useState(true);

  const PF = process.env.PUBLIC_FOLDER;

  // POINT: State Management Context
  const { Free, address } = useStateContext();

  // console.log(Free);

  // NOTE: loading data from local storage
  const loadData = () => {
    // POINT: user credentials form local storage
    const UserCredentials = localStorage.getItem("UserCredentials");
    const member = JSON.parse(UserCredentials);
    setProMember(member);

    const freeTrail = localStorage.getItem("freeTrail");
    setFreeTrial(freeTrail);

    // LOGS:
    console.log(member);
    console.log(freeTrail);
  };

  useEffect(() => {
    loadData();
  }, []);

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

  // // const close = (e) => {};

  return <div className="main-wrapper flex">chat</div>;
}

export default Chatting;
