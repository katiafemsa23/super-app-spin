import { Dispatch } from 'react';
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
  points: number;
  history: HistoryItem[];
  dispatch: Dispatch<HistoryReducerActions>;
};
