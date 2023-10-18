const hre = require("hardhat");

async function main() {
  // Deploy the Vat contract
  const DaiJoin = await hre.ethers.getContractFactory("DaiJoin");
  const daiJoin = await DaiJoin.deploy("0x7C96C06EB9D15050125C5d14Bd26347259353C3d", "0xFa94dA175bE505B915187EdC8aE2f62F4Ccbf848");

  // Wait for the deployment to be mined
  await daiJoin.deployed();

  console.log("daiJoin deployed to:", daiJoin.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
