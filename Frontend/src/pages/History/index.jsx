import React from "react";
import { useAccount, useWalletClient } from "wagmi";

import { Database } from "@tableland/sdk";
import { providers } from "ethers";

import InfoContainer from "../../components/InfoContainer";

import style from "./History.module.scss";

async function connectSigner() {
  // Establish a connection with the browser wallet's provider.
  const provider = new providers.Web3Provider(window.ethereum);
  // Request the connected accounts, prompting a browser wallet popup to connect.
  await provider.send("eth_requestAccounts", []);
  // Create a signer from the returned provider connection.
  const signer = provider.getSigner();
  // Return the signer
  return signer;
}

const tableName = "bwise_11155111_200";

const History = () => {
  const account = useAccount();

  const [signer, setSigner] = React.useState();

  const [isConnectSigner, setIsConnectSigner] = React.useState(false);

  async function handleConnect() {
    // Connect a signer
    const signer = await connectSigner();
    setSigner(signer);
    setIsConnectSigner(true);
  }

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    if (!isConnectSigner) {
      handleConnect();
    }
    if (account.isConnected) {
      read();
    }
  }, []);

  const read = async () => {
    try {
      const db = new Database({ signer });
      const { results } = await db.prepare(`SELECT * FROM ${tableName}`).all();
      console.log(`Read data from table '${tableName}':`);
      setData(results);
    } catch (err) {
      console.error(err.message);
    }
  };

  if (!account.isConnected) {
    return <InfoContainer />;
  }

  return (
    <div className={style.container}>
      <div className={style.container}>
        <div>
          <div className={style.info}>
            <table className={style.tokenTable}>
              <thead>
                <tr>
                  <th>Pool</th>
                  <th>Platform</th>
                  <th>Value</th>
                  <th>
                    Auto <br /> Re-Balanced
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, i) => (
                  <tr key={i} className={style.row}>
                    <td className={style.nameRow}>
                      <div>
                        <img
                          alt={item.TokenA}
                          src={`${item.TokenA}.png`}
                          className={style.logo}
                        />
                        <img
                          alt={item.TokenB}
                          src={`${item.TokenB}.png`}
                          className={`${style.logo} ${style.tokenImg}`}
                        />
                      </div>
                      <span>
                        {item.TokenA}-{item.TokenB}
                      </span>
                    </td>
                    <td>
                      <img
                        alt={item.Platform}
                        src={`${item.Platform}.png`}
                        className={style.logo}
                      />
                      <span>{item.Platform}</span>
                    </td>
                    <td>
                      <span>{item.Value}</span>
                    </td>
                    <td>{item.AutoRebalance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
