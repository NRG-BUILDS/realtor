import { useState } from "react";

interface UseRequestReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  makeRequest: (requestData: unknown) => Promise<T | null>;
}

const useRequest = <T>(route: string): UseRequestReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const BASE_URL = import.meta.env.VITE_API_HOST;
  const url = BASE_URL + route;
  const makeRequest = async (requestData: unknown): Promise<T | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData: T = await response.json();
      setData(responseData);
      return responseData;
    } catch (err) {
      setError((err as Error).message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, makeRequest };
};

export default useRequest;
