// SPDX-License-Identifier: MIT

// pragma solidity ^0.8.17;
pragma solidity ^0.8.17;


// WORKING CODE

import "../src/MonitorDai.sol";
import "../src/CurrencyPrice.sol";

import {Script, console2} from "forge-std/Script.sol";

contract Spark is Script {
   
    function run() external {
        uint256 privateKey = vm.envUint("PRIVATE_KEY");
        
        vm.startBroadcast(privateKey);

        // deploy CurrencyPrice
        CurrencyPrice currencyPrice = new CurrencyPrice();

        // deploy MonitorDai
        MonitorDAI monitorDai = new MonitorDAI(address(currencyPrice));
        monitorDai.requireRebalancing();

        vm.stopBroadcast();
    }

}
