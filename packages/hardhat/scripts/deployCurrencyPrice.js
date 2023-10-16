const hre = require("hardhat");

async function main() {
  // Deploy the ILGuardTable contract
  const Price = await hre.ethers.getContractFactory("CurrencyPrice");
  const price = await Price.deploy();

  // Wait for the deployment to be mined
  await price.deployed();

  console.log("Price of ETH/USD deployed to:", price.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
