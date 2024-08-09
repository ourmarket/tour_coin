import { http, createConfig } from "wagmi";
import { bscTestnet } from "wagmi/chains";
import { injected, metaMask } from "wagmi/connectors";

export const config = createConfig({
  chains: [bscTestnet],
  connectors: [injected(), metaMask()],
  transports: {
    [bscTestnet.id]: http(),
  },
  ssr: true,
});
