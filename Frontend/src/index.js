import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { chains, config }from "./wagmi";
import { WagmiConfig } from "wagmi";
import { store } from "./redux/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <WagmiConfig config={config}>
      <Provider store={store}>
        <App />
      </Provider>
    </WagmiConfig>
  </BrowserRouter>
);
