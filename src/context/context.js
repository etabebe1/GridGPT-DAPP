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
      // LOADING DATA FROM LOCAL STORAGE ABOUT FREE TRIAL
      const freeTrial = localStorage.getItem("freeTrial");
      const FREE_TRIAL = JSON.parse(freeTrial);
      setFree(freeTrial);

      // GET THE CONTRACT DATA
      const contract = await connectingWithContract();
      const connectAccount = await connectWallet();
      setAddress(connectAccount);

      const oneMonth = await contract.getMembership(1);
      const threeMonths = await contract.getMembership(2);
      const sixMonths = await contract.getMembership(3);
      const oneYear = await contract.getMembership(4);

      // LOGS: Testing list membership items from deployed contract.
      // NOTE: If contract is re-deployed again the contract address will be changed therefore,
      // REMARK: That unless the same address is used these contract functions would not work in these case "getMembership".
      console.log(oneMonth);
      // console.log(threeMonths);
      // console.log(sixMonths);
      // console.log(oneYear);

      const contractMembership = [
        {
          MEMBERSHIP_NAME: oneMonth?.name,
          MEMBERSHIP_DATE: oneMonth?.date,
          MEMBERSHIP_ID: oneMonth?.id.toString(),
          MEMBERSHIP_COST: ethers.utils.formatEther(
            oneMonth?.cost.toString(),
            "ether"
          ),
        },
        {
          MEMBERSHIP_NAME: threeMonths?.name,
          MEMBERSHIP_DATE: threeMonths?.date,
          MEMBERSHIP_ID: threeMonths?.id.toString(),
          MEMBERSHIP_COST: ethers.utils.formatEther(
            threeMonths?.cost.toString(),
            "ether"
          ),
        },
        {
          MEMBERSHIP_NAME: sixMonths?.name,
          MEMBERSHIP_DATE: sixMonths?.date,
          MEMBERSHIP_ID: sixMonths?.id.toString(),
          MEMBERSHIP_COST: ethers.utils.formatEther(
            sixMonths?.cost.toString(),
            "ether"
          ),
        },
        {
          MEMBERSHIP_NAME: oneYear?.name,
          MEMBERSHIP_DATE: oneYear?.date,
          MEMBERSHIP_ID: oneYear?.id.toString(),
          MEMBERSHIP_COST: ethers.utils.formatEther(
            oneYear?.cost.toString(),
            "ether"
          ),
        },
      ];

      console.log(contractMembership);
    } catch (error) {
      console.log(error);
    }
  };

  const listMembership = async () => {
    try {
      const amount = 5; // The amount in ether you want to convert to Wei

      // REMARK: Declared variables bellow are inputs required to call ""LIST"" function in the smart contract.
      const MEMBERSHIP_NAME = "One Year";
      const MEMBERSHIP_COST = ethers.utils.parseUnits(
        amount.toString(),
        "ether" // Correct unit of measure
      );
      const MEMBERSHIP_DATE = "February 27 2024";

      // NOTE: Obtaining the smart contract so that to interact with the functions in it.
      const contract = await connectingWithContract();

      // NOTE: Calling a function from your smart contract and storing
      const LIST = await contract.list(
        MEMBERSHIP_NAME,
        MEMBERSHIP_COST,
        MEMBERSHIP_DATE
      );

      await LIST.wait();

      console.log(LIST);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <StateContext.Provider value={{ fetchData, listMembership, DAPP_NAME }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
