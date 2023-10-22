import React from "react";
import Web3 from "web3";

import { ethers } from "ethers";

import style from "./Dashboard.module.scss";

import InfoContainer from "../../components/InfoContainer";

import abi from "../../abi.json";
import chAbi from "./chAbi.json";

import { useAccount } from "wagmi";

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const chContractAddress = process.env.REACT_APP_CH_CONTRACT_ADDRESS;

const Dashboard = () => {
  const [tokens, setTokens] = React.useState([]);

  const { address, isConnected } = useAccount();

  // add token to array
  const addToken = (newToken) => {
    setTokens((tokens) => [...tokens, newToken]);
  };

  const createContract = (address, provider) => {
    return new ethers.Contract(address, abi, provider);
  };

  const createChContract = (address, provider) => {
    return new ethers.Contract(address, chAbi, provider);
  };

  React.useEffect(() => {
    if (isConnected) {
      loadWeb3Data();
    }
  }, [isConnected]);

  const loadWeb3Data = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const contract = createContract(contractAddress, provider);

      const balance = await contract["balanceOf(address)"](address);

      console.log(contract);

      //console.log(accounts[1]);

      if (balance > 0) {
        for (let i = 0; i < Number(balance); i++) {
          const tokenId = await contract[
            "tokenOfOwnerByIndex(address,uint256)"
          ](address, i);

          const position = await contract["positions(uint256)"](tokenId);

          const token0Contract = createContract(position.token0, provider);

          const token1Contract = createContract(position.token1, provider);

          const token0Name = await token0Contract["symbol()"]();

          const token1Name = await token1Contract["symbol()"]();

          const fee = Number(position.fee) / (10 * 10 * 10 * 10);

          const newToken = {
            tokenId,
            token0: token0Name,
            token1: token1Name,
            fee,
          };
          //
          addToken(newToken);
        }
      }
    } else {
      alert("Install dApp");
    }
  };

  const startPrice = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      //const accounts = await web3.eth.getAccounts();

      const chContract = createChContract(chContractAddress, provider);

      console.log(chContract);

      const stPrice = await chContract['getETHPrice(int256)'](11);

      console.log(Number(stPrice));
    } else {
      alert("Install dApp");
    }
  };

  if (!isConnected) {
    return <InfoContainer />;
  }

  return (
    <div className={style.tokenList}>
      <div>
        <div className={style.info}>
          <table className={style.tokenTable}>
            <thead>
              <tr>
                <th>Pool</th>
                <th>Platform</th>
                <th>Fee</th>
                <th>Value</th>
                <th>
                  Auto <br /> Re-Balance
                </th>
              </tr>
            </thead>

            <tbody>
              {tokens.map((token) => (
                <tr key={token.tokenId} className={style.row}>
                  <td className={style.nameRow}>
                    <div>
                      <img
                        alt="First Token Image"
                        src={`${token.token0}.png`}
                        className={style.logo}
                      />
                      <img
                        alt="Second Token Image"
                        src={`${token.token1}.png`}
                        className={`${style.logo} ${style.tokenImg}`}
                      />
                    </div>
                    <span>
                      {token.token0}-{token.token1}
                    </span>
                  </td>
                  <td>
                    <img
                      src="uni.png"
                      alt="Uniswap Logo"
                      className={style.logo}
                    />
                    <span>UniswapV3</span>
                  </td>
                  <td>{`${token.fee}%`}</td>
                  <td>$1.240</td>
                  <td>
                    <form>
                      <input type="checkbox" />
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={startPrice} className={style.button}>
            Rebalance
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
