import React, { useState } from "react";
import { useStateContext } from "./context/context";
import { ethers } from "ethers";
import {
  checkIfWalletConnected,
  connectWallet,
  connectingWithContract,
} from "./Utils/apiFeatures";

function App() {
  const { DAPP_NAME } = useStateContext();
  const [address, setAddress] = useState("");
  const [contractMembership, setContractMembership] = useState([]);
  const [Free, setFree] = useState();
  const [userMembership, setUserMembership] = useState({});

  // LOGS:
  // console.log(DAPP_NAME);

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
      console.log(contract);

      // const oneMonth = contract.getMembership(1);
      // const threeMonth = contract.getMembership(2);
      // const sixMonth = contract.getMembership(3);
      // const oneYear = contract.getMembership(4);

      // console.log(oneMonth);
    } catch (error) {
      console.log(error);
    }
  };

  const listMembership = async () => {
    try {
      const amount = 1; // The amount in ether you want to convert to Wei

      // REMARK: Declared variables bellow are inputs required to call ""LIST"" function in the smart contract.
      const MEMBERSHIP_NAME = "One Month";
      const MEMBERSHIP_COST = ethers.utils.parseUnits(
        amount.toString(),
        "ether" // Correct unit of measure
      );
      const MEMBERSHIP_DATE = "February 26 2024";

      // NOTE: Obtaining the smart contract so that to interact with the functions in it.
      const contract = await connectingWithContract();

      // NOTE: Calling a function from your smart contract and storing
      const list = await contract.list(
        MEMBERSHIP_NAME,
        MEMBERSHIP_COST,
        MEMBERSHIP_DATE
      );

      console.log(list);

      await list();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="icon_custom">{DAPP_NAME}</div>
      <button className="btn" onClick={listMembership}>
        Connect Wallet
      </button>
    </div>
  );
}

export default App;
