import React, { useState } from "react";
import { useStateContext } from "./context/context";
import { ethers } from "ethers";
import "./A.css";

function App() {
  const { DAPP_NAME, fetchData, listMembership } = useStateContext();

  return (
    <div>
      <div className="icon_custom">{DAPP_NAME}</div>
      <div className="button">
        <button className="btn" onClick={() => fetchData()}>
          Connect Wallet
        </button>
        <button className="btn" onClick={() => listMembership()}>
          List Membership
        </button>
        <button className="btn" onClick={() => listMembership()}>
          Lists of Membership
        </button>
      </div>
    </div>
  );
}

export default App;
