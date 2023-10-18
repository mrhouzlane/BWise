// Verify Vat.sol

forge verify-contract \
    --num-of-optimizations 10 \
    --watch \
    --constructor-args  $(cast abi-encode "constructor()") \
    --verifier etherscan \
    --verifier-url https://api-sepolia.scrollscan.dev/api \
    --etherscan-api-key D62920783A4311EE9D6600155D570C742E \
    --compiler-version v0.8.17 \
    0x800966bb8F19765B281b158a88590e304194E31F \
    Vat

// Verify Pot.sol 

forge verify-contract \
    --num-of-optimizations 10 \
    --watch \
    --constructor-args  $(cast abi-encode "constructor(address)" 0x800966bb8F19765B281b158a88590e304194E31F) \
    --verifier etherscan \
    --verifier-url https://api-sepolia.scrollscan.dev/api \
    --etherscan-api-key D62920783A4311EE9D6600155D570C742E \
    --compiler-version v0.8.17 \
    0x3F9696ADb8cB545a8D58015550E9E4190b4665F6 \
    Pot

// Verify DaiJoin 

forge verify-contract \
    --num-of-optimizations 10 \
    --watch \
    --constructor-args  $(cast abi-encode "constructor(address, address)" 0x800966bb8F19765B281b158a88590e304194E31F 0xFa94dA175bE505B915187EdC8aE2f62F4Ccbf848) \
    --verifier etherscan \
    --verifier-url https://api-sepolia.scrollscan.dev/api \
    --etherscan-api-key D62920783A4311EE9D6600155D570C742E \
    --compiler-version v0.8.17 \
    0x9BfCdf238d9Ad87e526d166020990F1a22c9708F \
    DaiJoin


// Verify SavingsDai 
forge verify-contract \
    --num-of-optimizations 10 \
    --watch \
    --constructor-args  $(cast abi-encode "constructor(address, address)" 0x9BfCdf238d9Ad87e526d166020990F1a22c9708F 0x3F9696ADb8cB545a8D58015550E9E4190b4665F6) \
    --verifier etherscan \
    --verifier-url https://api-sepolia.scrollscan.dev/api \
    --etherscan-api-key D62920783A4311EE9D6600155D570C742E \
    --compiler-version v0.8.20 \
    0xD46073c9118890eeaAF804Ff0EA9615fe4701b7d \
    SavingsDai


