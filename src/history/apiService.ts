import axios from 'axios';

export type History = {
  id: number;
  date: string;
  points: number;
  entity: string;
  operation: string;
  transactionNo: string;
};

// Update if needed to the correct url in order to run json-server
const URL = 'http://localhost:3001/';

export const getHistory = () => {
  return axios.get(`${URL}history`);
};

export const getHistoryItem = (id: number) => {
  return axios.get(`${URL}history/${id}`);
};

export const postHistory = (data: History) => {
  return axios.post(`${URL}history`, data);
};
