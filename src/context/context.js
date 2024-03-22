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

  // TODO:  userMembership should store user credential
  const [userMembership, setUserMembership] = useState({});
  // console.log(userMembership);

  // POINT: FETCHING CONTRACT DATA
  const fetchData = async () => {
    try {
      // LOADING DATA FROM LOCAL STORAGE ABOUT FREE TRIAL
      const freeTrail = localStorage.getItem("freeTrail");
      const FREE_TRIAL = JSON.parse(freeTrail);
      setFree(freeTrail);

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
      // WARNINGS: if deployment re-initialized, change address in the constants file to the new address of contract
      // console.log(oneMonth);
      // console.log(threeMonths);
      // console.log(sixMonths);
      // console.log(oneYear);

      // POINT: GET CONTRACT MEMBERSHIPS
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
      setContractMembership(contractMembership);
      // console.log(contractMembership);

      // POINT: GET USER MEMBERSHIP
      let userMembershipData = await contract.getUserMembership(connectAccount);

      userMembershipData = {
        id: userMembershipData.id.toString(),
        membershipId: userMembershipData.membershipId.toString(),
        addressUser: userMembershipData.addressUser.toLowerCase(),
        expireDate: userMembershipData.expireDate,
        cost: ethers.utils.formatEther(
          userMembershipData.cost.toString(),
          "ether"
        ),
      };

      // console.log(userMembershipData);

      setUserMembership(userMembershipData);

      // POINT: SAVING USER DETAILS TO LOCAL STORAGE
      const proMember = JSON.stringify(userMembership);
      localStorage.setItem("UserCredentials", proMember);
      // console.log(userMembershipData);
      // console.log(proMember);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // POINT: LISTING MEMBERSHIP FOUND IN CONTRACT
  const listMembership = async () => {
    // TEST:
    const test = [
      { membershipName: "One Month", amount: 1 },
      { membershipName: "Three Months ", amount: 2.5 },
      { membershipName: "Six Months", amount: 3.5 },
      { membershipName: "One Year", amount: 5 },
    ];

    try {
      // const amount = 5; // The amount in ether you want to convert to Wei

      // REMARK: Declared variables bellow are inputs required to call ""LIST"" function in the smart contract.
      const MEMBERSHIP_NAME = test[3].membershipName;
      const MEMBERSHIP_COST = ethers.utils.parseUnits(
        test[3].amount.toString(),
        "ether" // Correct unit of measure
      );
      const MEMBERSHIP_DATE = "February 28 2024";

      // NOTE: Obtaining the smart contract so that to interact with the functions in it.
      const contract = await connectingWithContract();

      // NOTE: Calling a function from your smart contract and storing
      const LIST = await contract.list(
        MEMBERSHIP_NAME,
        MEMBERSHIP_COST,
        MEMBERSHIP_DATE
      );

      await LIST.wait();

      // console.log(LIST);
    } catch (error) {
      console.log(error);
    }
  };

  // POINT: BUY MEMBERSHIP FUNCTION
  const mintMembership = async (membership_id) => {
    const connectAccount = await connectWallet();
    const contract = await connectingWithContract();
    setAddress(connectAccount);
    // LOGS:
    // console.log(contract);

    try {
      async function Condition(duration, amount) {
        const oneMonthLaterInMilliseconds =
          Date.now() + 30.44 * 24 * 60 * 60 * 1000 * `${duration}`;
        let actualDate = new Date(oneMonthLaterInMilliseconds);
        const expireDate = actualDate.toLocaleDateString("en-US");
        const cost = ethers.utils.parseUnits(`${amount}`);

        // uint256 _membershipId,
        // address _user,
        // string memory _expiredDate

        const mintTransaction = await contract.mint(
          membership_id,
          connectAccount,
          expireDate.toString(),
          {
            value: cost.toString(),
          }
        );

        await mintTransaction.wait();
        const freeTrail = JSON.stringify("Pro Member");
        localStorage.setItem("freeTrail", freeTrail);
        console.log("Taken membership", mintTransaction);
        window.location.reload();
      }

      if (membership_id === 1) {
        const inputData = {
          validFor: 1,
          amount: 1,
        };
        Condition(inputData.validFor, inputData.amount);
      } else if (membership_id === 2) {
        const inputData = {
          validFor: 3,
          amount: 2.5,
        };
        Condition(inputData.validFor, inputData.amount);
      } else if (membership_id === 3) {
        const inputData = {
          validFor: 6,
          amount: 3.75,
        };
        Condition(inputData.validFor, inputData.amount);
      } else if (membership_id === 4) {
        const inputData = {
          validFor: 12,
          amount: 5,
        };
        Condition(inputData.validFor, inputData.amount);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        fetchData,
        listMembership,
        mintMembership,
        Free,
        address,
        DAPP_NAME,
        userMembership,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
