const hre = require("hardhat");

async function main() {
  const NAME = "GPTMembership";
  const SYMBOL = "GPTM";

  const GPTMembership = await hre.ethers.getContractFactory("GPTMembership");
  const gptMembership = await GPTMembership.deploy(NAME, SYMBOL);

  await gptMembership.deployed(); // Ensure the contract is fully deployed before proceeding

  console.log(`GPTMembership deployed to: ${gptMembership.address}`);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});

// NOTE: Every time we deploy the contract // REMARK: that contract address keeps changing.
