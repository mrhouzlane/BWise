// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "./CurrencyPrice.sol";
import "./SavingsDai.sol";

contract MonitorDAI {

    CurrencyPrice currencyPrice;
    SavingsDai savingsDai;

    int256 public threshold = 3; // 3% price change threshold
    int256 public lastPriceSnapshot;
    address public poolAddress; 
    uint256 public lastSnapshotDeposit;

    mapping (address => bool) public isLender; 
    mapping (address => uint256) public depositSnapshot; 

    event Deposited(address indexed user, uint256 amount, uint256 shares);
    event PoolAddressUpdated(address newPoolAddress);

    modifier onlyLender() {
        require(isLender[msg.sender], "Not a lender");
        _;
    }

    constructor(address _currencyPriceAddress, address _savingsDaiAddress) {
        currencyPrice = CurrencyPrice(_currencyPriceAddress);
        savingsDai = SavingsDai(_savingsDaiAddress);
    } 

    function poolReceiver(address _poolAddress) external {
        poolAddress = _poolAddress;
        emit PoolAddressUpdated(_poolAddress);
    }


    function checkPosition() external view onlyLender returns (bool) {
        uint256 currentDeposit = depositSnapshot[msg.sender];
        uint256 change = lastSnapshotDeposit > currentDeposit ? lastSnapshotDeposit - currentDeposit : 0;
        return change <= threshold;
    }

    function getLiquidityPositionUpdate() public view returns (uint256){
         return savingsDai.getLiquidityPosition(msg.sender);
    }

    function calculateAmountToDeposit() external view returns (uint256) {
        return getLiquidityPositionUpdate() / 10;   // variable to be changed
    }

    function deposit(uint256 amount) external onlyLender {
        uint256 shares = savingsDai.deposit(amount, poolAddress);
        depositSnapshot[msg.sender] += amount;
        lastSnapshotDeposit += amount;
        emit Deposited(msg.sender, amount, shares);
    }

    function requireRebalancing() external view returns (bool) {
        int256 currentPrice = currencyPrice.getETHPrice(1);
        require(currentPrice > 0, "Price must be greater than zero.");

        int256 priceChange = ((currentPrice - lastPriceSnapshot) * 100) / lastPriceSnapshot;

        // Check if the absolute price change is greater than or equal to the threshold (e.g., 3%)
        if (priceChange < -threshold || priceChange > threshold) {
            return true;
        }

        return false;
    }

    function addLender(address lender) external {
        // Logic to add a lender, can be restricted to admin or other criteria
        isLender[lender] = true;
    }
}