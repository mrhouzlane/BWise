import React from "react";
import Web3 from "web3";

import { useSelector } from "react-redux";
import { selectWallet } from "../../redux/wallet/selector";

import style from "./Dashboard.module.scss";

import InfoContainer from "../../components/InfoContainer";

import abi from "../../abi.json";

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

const Dashboard = () => {
  const [tokens, setTokens] = React.useState([]);

  const wallet = useSelector(selectWallet);

  // add token to array
  const addToken = (newToken) => {
    setTokens((tokens) => [...tokens, newToken]);
  };

  const createContract = (web3, address) => {
    return new web3.eth.Contract(abi, address);
  };

  React.useEffect(() => {
    if (wallet.connected) {
      loadWeb3Data();
    }
  }, [wallet.connected]);

  const loadWeb3Data = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);

      await window.ethereum.request({ method: "eth_requestAccounts" });

      const web3 = window.web3;
      //const accounts = await web3.eth.getAccounts();

      const contract = createContract(web3, contractAddress);

      const balance = await contract.methods.balanceOf(wallet.address).call();

      //console.log(accounts[1]);

      if (balance > 0) {
        for (let i = 0; i < balance; i++) {
          const tokenId = await contract.methods
            .tokenOfOwnerByIndex(wallet.address, i)
            .call();

          const position = await contract.methods.positions(tokenId).call();
          //
          const token0Contract = createContract(web3, position.token0);
          //
          const token1Contract = createContract(web3, position.token1);
          //
          let token0Name = await token0Contract.methods.symbol().call();
          //
          let token1Name = await token1Contract.methods.symbol().call();

          let fee = Number(position.fee) / (10 * 10 * 10 * 10);

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

  if (!wallet.connected) {
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
                <th>Auto <br/> Re-Balance</th>
              </tr>
            </thead>

            <tbody>
              {tokens.map((token) => (
                <tr key={token.tokenId} className={style.row}>
                  <td className={style.nameRow}>
                    <div>
                      <img alt="First Token Image" src={`${token.token0}.png`} className={style.logo}/>
                      <img alt="Second Token Image" src={`${token.token1}.png`} className={`${style.logo} ${style.tokenImg}`}/>
                    </div>
                    <span>{token.token0}-{token.token1}</span>
                  </td>
                  <td>
                    <img
                      src="uni.png"
                      alt="Uniswap Logo"
                      className={style.logo}
                    />
                    <span>UniswapV3</span>
                  </td>
                  <td>{token.fee}</td>
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
          <button className={style.button}>Rebalance</button>
        </div>
        {/* <span className={style.tokenItem}>{tokens.token0}-{tokens.token1}</span>
        <span className={style.tokenItem}>
          
          Uniswap v3
        </span> */}
      </div>
    </div>
  );
};

export default Dashboard;
