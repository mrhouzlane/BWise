// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract CurrencyPrice {
    AggregatorV3Interface internal priceFeed;

    constructor() {
        priceFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306 // ETH/USD on Sepolia 
        );
    }
    //sending value of eth
    function getETHPrice(int256 val) public view returns (int256) {
        (, int256 price, , , ) = priceFeed.latestRoundData();
        return (price * val)/100000000;
    }
}