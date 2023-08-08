import React, { createContext, useReducer } from 'react';
import { HistoryContextProps } from './types';
import { historyReducer } from './historyReducer';

export const HistoryContext = createContext<HistoryContextProps>({
  dispatch: () => {},
  history: [],
});

export const HistorytProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(historyReducer, []);

  return (
    <HistoryContext.Provider value={{ history: state, dispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};
