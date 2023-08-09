import React, { createContext, useReducer } from 'react';
import { HistoryContextProps } from './types';
import { historyReducer } from './historyReducer';

export const HistoryContext = createContext<HistoryContextProps>({
  dispatch: () => {},
  history: [],
  points: 0,
});

export const HistorytProvider = ({ children }: React.PropsWithChildren) => {
  const [{ points, history }, dispatch] = useReducer(historyReducer, {
    points: 0,
    history: [],
  });

  return (
    <HistoryContext.Provider value={{ history, dispatch, points }}>
      {children}
    </HistoryContext.Provider>
  );
};
