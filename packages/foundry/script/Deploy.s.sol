// SPDX-License-Identifier: MIT

// pragma solidity ^0.8.17;
pragma solidity ^0.8.17;


// WORKING CODE

// import "../src/Vat.sol";
// import "../src/Pot.sol";
// import "../src/DaiJoin.sol";
import "../src/SavingsDai.sol";

import {Script, console2} from "forge-std/Script.sol";

contract DeployScript is Script {
   
    function run() external {
        uint256 privateKey = vm.envUint("PRIVATE_KEY");

        
        vm.startBroadcast(privateKey);

        // deploy VAT
        // Vat vat = new Vat();
        address vat = 0x800966bb8F19765B281b158a88590e304194E31F;
        address pot = 0x3F9696ADb8cB545a8D58015550E9E4190b4665F6;
        address daiJoin = 0x9BfCdf238d9Ad87e526d166020990F1a22c9708F;

        // deploy Pot 
        // Pot pot = new Pot(vat);

        // deploy daiJoin 
        // DaiJoin daiJoin = new DaiJoin(vat, 0xFa94dA175bE505B915187EdC8aE2f62F4Ccbf848);


        // deploy SavingsDai 
        SavingsDai savingsDai = new SavingsDai(daiJoin, pot);


        vm.stopBroadcast();
    }

}
