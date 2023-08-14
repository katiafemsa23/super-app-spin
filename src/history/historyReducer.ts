import { HistoryItem } from '../types';
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
      const points = action.payload.reduce(
        (accumulator, curValue) =>
          accumulator +
          (curValue.operation === 'earned'
            ? curValue.points
            : curValue.points * -1),
        0,
      );
      return { history: [...action.payload], points };
    default:
      return state;
  }
};
