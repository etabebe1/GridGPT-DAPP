import { ethers } from "ethers";
import Web3Modal from "web3modal"; // Import Web3Modal for creating a modal that connects to various wallets.

import {
  GPT_MEMBERSHIP_ADDRESS, // Import the contract address.
  GPT_MEMBERSHIP_ABI, // Import the contract ABI (Application Binary Interface).
} from "../context/constants"; // Assuming these are defined in a constants file within a context folder.

// POINT: CHECK WALLET CONNECTION
// Function to check if a wallet is already connected to the dApp.
export const checkIfWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Install MetaMask"); // Check if the MetaMask extension is installed.

    // Request the currently connected accounts from the Ethereum provider (e.g., MetaMask).
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    const firstAccount = accounts[0]; // Take the first account as the user's primary account.

    return firstAccount; // Return the connected account.
  } catch (error) {
    console.log(error); // Log any errors.
  }
};

// POINT: IF WALLET CONNECTED PRESENCE, CONNECT TO WALLET
// Function to prompt the user to connect their wallet if not already connected.
// let isRequestingAccount = false;
export const connectWallet = async () => {
  try {
    if (!window.ethereum) return console.log("Install MetaMask"); // Check if the MetaMask extension is installed.

    // Request account access if not already granted; this will prompt the user to connect their wallet.
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const firstAccount = accounts[0]; // Take the first account as the user's primary account.
    return firstAccount; // Return the connected account.
  } catch (error) {
    console.log(error); // Log any errors.
  }
};

// POINT: FETCH CONTRACT
// Function to create a new ethers.Contract instance with the provided signer or provider.
// NOTE: the function bellow is used in the connectingWithContract to get signer
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    GPT_MEMBERSHIP_ADDRESS, // The contract address.
    GPT_MEMBERSHIP_ABI, // The contract ABI.
    signerOrProvider // The signer or provider for the contract to interact with the blockchain.
  );

// POINT: CONNECTING CONTRACT
// Function to connect with the contract using Web3Modal for wallet selection and ethers for blockchain interaction.
export const connectingWithContract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    return contract;
  } catch (error) {
    console.log(error);
  }
};
