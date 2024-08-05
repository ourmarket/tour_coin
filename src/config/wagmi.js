/* import { http, createConfig } from "@wagmi/core";
import { bscTestnet } from "@wagmi/core/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

const projectId = "88a5e395e5beda3963001ecaf0ad755c";

export const config = createConfig({
  chains: [bscTestnet], // bsc
  connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
  transports: {
    [bscTestnet.id]: http(),
  },
  ssr: true,
}); */

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
