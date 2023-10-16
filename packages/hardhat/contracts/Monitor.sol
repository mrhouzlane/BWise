// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.12;


// contract Monitor is Ownable {

//     enum Strategy {
//         INFLATION,
//         DEFLATION,
//         STABLE
//     }

//     uint256 threshold; 
//     mapping (address => bool) isLender; 


//     function setThreshold(uint256 _threshold) external onlyOwner {
//         threshold = _threshold;

//     }

//     // function activateLender(address _user) external view returns (bool) {
//     //     if Oracle.getInterestRate > threshold) {
//     //         isLender[_user] = true;
//     //     }
//     // }

//     // function deactivateLender(address _user) external view returns (bool) {
//     //     if Oracle.getInterestRate <= threshold) {
//     //         isLender[_user] = false;
//     //     }
//     // }



// }