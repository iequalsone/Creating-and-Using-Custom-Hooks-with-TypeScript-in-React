import { useState, useEffect } from "react";
import { FetchState } from "../types/formTypes";

function useFetchData<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const jsonData: T = await response.json();
        setData(jsonData);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, isLoading };
}

export default useFetchData;
