// src/context/StateContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

// Importing functions from apiFeatures file
import {
  checkIfWalletConnected,
  connectWallet,
  connectingWithContract,
} from "../Utils/apiFeatures";

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

export const ContextProvider = ({ children }) => {
  const DAPP_NAME = "GPT_MEMBERSHIP";

  // STATE VARIABLES
  const [address, setAddress] = useState("");
  const [contractMembership, setContractMembership] = useState([]);
  const [Free, setFree] = useState();
  const [userMembership, setUserMembership] = useState({});

  // POINT: FETCHING CONTRACT DATA
  const fetchData = async () => {
    try {
      // LOAD DATA FROM LOCAL STORAGE
      const freeTrail = localStorage.getItem("free-trail");
      const FREE_TRIAL = JSON.parse(freeTrail);
      setFree(freeTrail);

      // GET THE CONTRACT DATA
      const contract = await connectingWithContract();
      // LOGS: LOGGING CONTRACT TO CONSOLE
      console.log(contract);

    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <StateContext.Provider value={{ fetchData, DAPP_NAME }}>
      {children}
    </StateContext.Provider>
  );
};
