import { useDispatch } from "react-redux";
import { setWallet } from "../../redux/wallet/slice";
import { InjectedConnector } from '@wagmi/core';
import style from './Wallet.module.scss';
import { useAccount, useConnect } from 'wagmi';

const Wallet = () => {
  const dispatch = useDispatch();

  const { address, isConnected } = useAccount();
  
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  // connect to metamask wallet
   const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        connect();
      } catch (err) {
        console.error("User access denied");
      }
    }
   }

  if (!isConnected) {
    return <button  className={style.connected} onClick={connectMetaMask}>Connect Wallet</button>;
  }

  return (
    <button className={style.wallet}>
      {`${address.substring(0, 6)}...${address.substring(
        address.length - 4
      )}`}
    </button>
  );
};

export default Wallet;
