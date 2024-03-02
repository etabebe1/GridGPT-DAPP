import React from "react";

import { useStateContext } from "../context/context";

function Chat() {
  const { DAPP_NAME, fetchData, listMembership, mintMembership } =
    useStateContext();

  return <div onClick={() => fetchData()}>{DAPP_NAME}</div>;
}

export default Chat;
