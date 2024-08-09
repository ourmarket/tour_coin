"use client";
import Balance from "../balance/Balance";
import { useAccount, useBalance, useReadContract } from "wagmi";
import { ABI_TRC, TRC_CONTRACT } from "../../../../data/data_exchange";
import { useFetch } from "@/hooks/useFetch";

const MainProfile = () => {
  const { isConnected, address } = useAccount();
  const { data: priceTrcData } = useFetch(
    "0x34B08ccf9620aEd6d158BaE65e85Bb3bBe2c384A"
  );
  const { data: priceBnbData } = useFetch(
    "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
  );

  const {
    data: balanceTrc,
    isLoading: l1,
    error,
  } = useReadContract({
    abi: ABI_TRC,
    address: TRC_CONTRACT,
    functionName: "balanceOf",
    args: [address], //wallet, address
  });

  const { data: balanceBnb, isLoading: l2 } = useBalance({
    address,
  });

  return (
    <div>
      <w3m-button balance="false" size="sm" label="Conecta tu wallet" />
      {address && balanceBnb && address && priceTrcData && priceBnbData && (
        <Balance
          data={{
            address,
            balanceTrc,
            balanceBnb: balanceBnb.formatted,
          }}
          priceTrcData={priceTrcData}
          priceBnbData={priceBnbData}
        />
      )}
    </div>
  );
};

export default MainProfile;
