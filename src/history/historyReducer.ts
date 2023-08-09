import { HISTORY_ACTIONS } from './constants';
import { HistoryReducerActions } from './types';

export const historyReducer = (
  state: { history: HistoryItem[]; points: number },
  action: HistoryReducerActions,
) => {
  switch (action.type) {
    case HISTORY_ACTIONS.ADD_TO_HISTORY:
      return {
        history: [...state.history, action.payload],
        points: state.points - action.payload.points,
      };
    case HISTORY_ACTIONS.SET_HISTORY:
      return { history: [...action.payload], points: state.points };
    default:
      return state;
  }
};
