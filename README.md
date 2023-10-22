# B.Wise

## Introduction

## Introduction

`Having non-correlated source of risk, so the movement at least do not correspond one-to-one, is better than having just one source of risk.`   -  ETHGlobalOnline 2023.

`Why does banks exist ? It’s because they offer multiple financial services. They keep money for savers but also can be lenders. What is BWise providing is similar to banking.` 

`BWise is in the same time, making sure that your money is not going out of range of uniswap pools and thus, you are not been victim of impermanent loss but it is also using that extra amount of tokens that is recalibrated and not used anymore as a lending share, thus enabling you to earn yield thanks to SPARK technology with a stable coin.`


# Description 

To reduce fragmentation of Liquidity we have chosen to use SPARK technology by choosing DAI as a bridge currency. Every trade in our Auto-Rebalancing mechanism will include DAI/ABC pair. 
DAI is stable coin and participates naturally into reducing Impermanent loss.



# Tehcnical Architecture 

Contracts are deployed on Scroll using Foundry :

Example of verification : 

``` // Verify SavingsDai forge verify-contract
  --num-of-optimizations 10 /
  --watch /
  --constructor-args $(cast abi-encode "constructor(address, address)" 0x9BfCdf238d9Ad87e526d166020990F1a22c9708F 0x3F9696ADb8cB545a8D58015550E9E4190b4665F6) /
  --verifier etherscan / 
  --verifier-url https://api-sepolia.scrollscan.dev/api / 
  --etherscan-api-key D62920783A4311EE9D6600155D570C742E / 
  --compiler-version v0.8.20 / 
  0xD46073c9118890eeaAF804Ff0EA9615fe4701b7d / 
  SavingsDai /
``` 



# Technology used 

We have deployed contracts on Scroll. 

- Chainlink

- Spark implementation :
    - we have modified savingsDai contract to have a getLiquidityPosition that allows us to monitor DAI position in the monitor contract. 


# Demo 


# Contact 




