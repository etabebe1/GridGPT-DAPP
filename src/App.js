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
    const amount = 1;

    // REMARK: BELLOW ARE INPUT FIELDS ARE REQUIRED TO CALL ""LIST"" FUNCTION IN THE SMART CONTRACT
    const MEMBERSHIP_NAME = "One Month";
    const MEMBERSHIP_COST = ethers.utils.parseUnits(
      amount.toString(),
      "ethers"
    );

    const MEMBERSHIP_DATE = "February 26 2024";
  };

  return (
    <div>
      <div className="icon_custom">{DAPP_NAME}</div>
      <button className="btn" onClick={fetchData}>
        Connect Wallet
      </button>
    </div>
  );
}

export default App;
