export type HistoryItem = {
  id: number;
  date: string;
  entity: string;
  points: number;
  giftCode?: string;
  expiryDate?: string;
  transactionNo: string;
  operation: 'earned' | 'spent';
};
