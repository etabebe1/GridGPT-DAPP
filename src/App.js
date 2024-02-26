import React, { useState } from "react";
import { useStateContext } from "./context/context";
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
    } catch (error) {
      console.log(error);
    }
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
