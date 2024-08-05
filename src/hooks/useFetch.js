import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.dexscreener.com/latest/dex/tokens/0x34B08ccf9620aEd6d158BaE65e85Bb3bBe2c384A"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};
