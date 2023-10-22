import { configureChains, createConfig, sepolia} from "wagmi";
import { publicProvider } from 'wagmi/providers/public';

// All of the chains configured below are supported by Tableland
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
   sepolia],
  [
    publicProvider(),
  ]
);

export const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

export { chains };
