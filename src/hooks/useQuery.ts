import axios from 'axios';
import { useEffect, useState } from 'react';

// Update if needed to the correct url in order to run json-server
const URL = 'http://localhost:3001/';
export const historyURL = `${URL}history`;
export const historyItemURL = (id: number) => `${URL}history/${id}`;

export const useQuery = (url: string, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const response = await axios(url, options);
        setData(response.data);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url, options]);

  return { data, error, isLoading };
};
