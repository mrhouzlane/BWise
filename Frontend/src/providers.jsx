import * as React from "react";
import { WagmiConfig } from "wagmi";
import { chains, config } from "./wagmiConfig";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

export default function Providers({ children }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
   <Provider store={store}>
      <WagmiConfig config={config}>
         {mounted && children}
      </WagmiConfig>
   </Provider>
  );
}