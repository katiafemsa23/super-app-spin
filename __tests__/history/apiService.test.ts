import { AxiosResponse } from 'axios';
import {
  getHistory,
  getHistoryItem,
  postHistory,
} from '../../src/history/apiService';

describe('Api Service', () => {
  let data: AxiosResponse | null = null;

  beforeEach(async () => {
    data = (await getHistory()) as AxiosResponse;
  });

  describe('Get history', () => {
    it('return history data successfully', async () => {
      expect(data?.status).toBe(200);
    });
  });

  describe('Add to history', () => {
    it('save data into history successfully', async () => {
      const item = {
        entity: 'Oxxo Gas',
        date: 'Tue Aug 08 2023',
        points: 150,
        operation: 'earned',
        transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0b30',
        id: data?.data.length + 1 || 1,
      };

      const response = await postHistory(item);
      expect(response.status).toBe(201);
    });
  });

  describe('Get history item', () => {
    it('gets history item with id 3 successfully', async () => {
      const response = await getHistoryItem(3);
      expect(response.data).toStrictEqual({
        entity: 'Volaris',
        date: 'Sun Aug 01 2023',
        points: 1000,
        operation: 'earned',
        transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
        id: 3,
      });
    });
  });
});
