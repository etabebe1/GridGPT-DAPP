// src/context/StateContext.js
import React, { createContext, useContext, useState } from "react";
import {ethers} from "ethers"

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

export const ContextProvider = ({ children }) => {
  const DAPP_NAME = "GPT_MEMBERSHIP";

  return (
    <StateContext.Provider value={{ DAPP_NAME }}>
      {children}
    </StateContext.Provider>
  );
};
