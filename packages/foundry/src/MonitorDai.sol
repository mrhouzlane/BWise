// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "./CurrencyPrice.sol";
import "./SavingsDai.sol";


contract MonitorDAI {

    CurrencyPrice currencyPrice ;
    SavingsDai savingsDai;


    int256 threshold; 
    int256 public lastPriceSnapshot;
    address public poolAddress; 
    uint256 lastSnapshotDeposit; 


    mapping (address => bool) isLender; 
    mapping (address => uint256)  depositSnapshot; 

    constructor(address _currencyPriceAddress) {
        currencyPrice = CurrencyPrice(_currencyPriceAddress);
    } 

    function poolReceiver (address _poolAddress) external {
       poolAddress = _poolAddress;
    }

    function getLiquidityPosition() external view returns (uint256) {}

    function checkPosition() external view returns (bool) {}

    function calculateAmountToDeposit() external view returns (uint256) {}

    function requireRebalancing() external returns (bool) {
        // chainlink retrieve ETH price in USD
        int256 currentPrice = currencyPrice.getETHPrice(1);
        require(currentPrice > 0, "Price must be greater than zero.");
        // Calculate the percentage change from the last snapshot
        int256 priceChange = int256(currentPrice * 100) / int256(1230 * 100000000) - 100;
        
        // Check if the absolute price change is greater than or equal to 3%
        if (priceChange >= int256(threshold) || priceChange <= int256(-threshold)) {
            return true;
        } else {
            return false;
        }
    }


    function deposit(uint256 amount) external {
        require(this.requireRebalancing(), "Rebalancing is not required.");
        uint256 shares = savingsDai.deposit(amount, poolAddress);
        depositSnapshot[msg.sender] = lastSnapshotDeposit;
    }


}
