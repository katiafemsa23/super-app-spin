import { useEffect, useState } from 'react';
import { History, getHistory } from '../history/apiService';

export const useGetHistory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<History[]>([]);

  const getData = async () => {
    const response = await getHistory();

    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, []);

  return { data, isLoading };
};
