const hre = require("hardhat");

async function main() {
  // Deploy the ILGuardTable contract
  const ILGuardTable = await hre.ethers.getContractFactory("ILGuardTable");
  const ilGuardTable = await ILGuardTable.deploy();

  // Wait for the deployment to be mined
  await ilGuardTable.deployed();

  console.log("ILGuardTable deployed to:", ilGuardTable.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
