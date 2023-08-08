import React from 'react';
import { HISTORY_ACTIONS } from './constants';

export type HistoryReducerActions =
  | {
      type: typeof HISTORY_ACTIONS.ADD_TO_HISTORY;
      payload: HistoryItem;
    }
  | {
      type: typeof HISTORY_ACTIONS.SET_HISTORY;
      payload: HistoryItem[];
    };

export type HistoryContextProps = {
  history: HistoryItem[];
  addToHistory: (item: HistoryItem) => void;
  setHistory: (items: HistoryItem[]) => void;
};
