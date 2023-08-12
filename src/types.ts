export type HistoryItem = {
  entity: string;
  date: string;
  points: number;
  operation: 'earned' | 'spent';
  transactionNo: string;
  id: number;
};
