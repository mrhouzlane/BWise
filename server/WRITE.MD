curl -X POST http://localhost:3000/add \
     -H "Content-Type: application/json" \
     -d '{
         "TokenA": "DAI",
         "TokenB": "FIL",
         "Platform": "Uniswap",
         "Value": 192,
         "AutoRebalance": 0
         }'