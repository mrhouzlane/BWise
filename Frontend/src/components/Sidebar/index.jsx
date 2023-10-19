import React from "react";
import Navigation from "../Navigation";
import style from "./Sidebar.module.scss";
import Wallet from "../Wallet";

const Sidebar = () => {
 

  return (
    <>
      <img src="logo.png" alt="ILGuard Logo"  className={style.logo} />

      <Navigation />

      <Wallet />
    </>
  );
};

export default Sidebar;
