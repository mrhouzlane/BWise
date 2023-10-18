const hre = require("hardhat");

async function main() {
  // Deploy the Vat contract
  const Vat = await hre.ethers.getContractFactory("Vat");
  const vat = await Vat.deploy();

  // Wait for the deployment to be mined
  await vat.deployed();

  console.log("Vat deployed to:", vat.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
