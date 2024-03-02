import React, { useState } from "react";
import { useStateContext } from "./context/context";
import { ethers } from "ethers";

// POINT: Style component
import "./styles/variables.css";

// POINT: Components
import Chat from "./pages/chat";

function App() {
  const { DAPP_NAME, fetchData, listMembership, mintMembership } =
    useStateContext();

  return (
    <div>
      <Chat />
    </div>
  );
}

export default App;
