import React from "react";
import { useStateContext } from "./context/context";

function App() {
  const { DAPP_NAME } = useStateContext();
  console.log(DAPP_NAME);

  return <div>{DAPP_NAME}</div>;
}

export default App;
