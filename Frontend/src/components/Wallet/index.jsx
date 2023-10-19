import { useDispatch, useSelector } from "react-redux";
import { setWallet } from "../../redux/wallet/slice";
import { selectWallet } from "../../redux/wallet/selector";

import style from './Wallet.module.scss';

const Wallet = () => {
  const dispatch = useDispatch();

  // get wallet from store
  const wallet = useSelector(selectWallet);

  // connect metamask to user account
  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        dispatch(setWallet({ address: accounts[0] }));
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  if (!wallet.connected) {
    return <button  className={style.connected} onClick={connectMetaMask}>Connect Wallet</button>;
  }

  return (
    <button className={style.wallet}>
      {`${wallet.address.substring(0, 6)}...${wallet.address.substring(
        wallet.address.length - 4
      )}`}
    </button>
  );
};

export default Wallet;
