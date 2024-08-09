"use client";

import { useAccount, useBalance, useReadContract } from "wagmi";
import { ABI_TRC, TRC_CONTRACT } from "../../../../data/data_exchange";
import { formatUnits } from "viem";

export default function ConnectBtn() {
  if (isLoading) return <div>Loading...</div>;

  console.log(result);

  return (
    <div>
      <p style={{ color: "white" }}>Conectado: {isConnected ? "Si" : "No"}</p>
      <w3m-button balance="false" />
      {isConnected && (
        <div>
          <p style={{ color: "white" }}>Address: {address}</p>
          <p style={{ color: "white" }}>TRC: {balance}</p>
        </div>
      )}
    </div>
  );
}
