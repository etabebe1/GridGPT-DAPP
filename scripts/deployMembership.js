const hre = require("hardhat");

async function main() {
  const NAME = "GPTMembership";
  const SYMBOL = "GPTM";

  const GPTMembership = await hre.ethers.getContractFactory("GPTMembership");
  const gptMembership = await GPTMembership.deploy(NAME, SYMBOL);

  // console.log(gptMembership.target);

  // not necessary code
  // await gptMembership.deployed();

  console.log(`GPTMembership: ${gptMembership.target}`)
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
