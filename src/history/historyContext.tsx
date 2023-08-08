import React, { createContext, useEffect, useReducer } from 'react';
import { HistoryContextProps } from './types';
import { historyReducer } from './historyReducer';
import { HISTORY_ACTIONS } from './constants';
import { historyURL, useQuery } from '../hooks/useQuery';

export const HistoryContext = createContext<HistoryContextProps>({
  history: [],
  addToHistory: (item: HistoryItem) => {},
  setHistory: (items: HistoryItem[]) => {},
});

export const HistoryContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [history, dispatch] = useReducer(historyReducer, []);

  const setHistory = (items: HistoryItem[]) => {
    dispatch({ type: HISTORY_ACTIONS.SET_HISTORY, payload: items });
  };

  const addToHistory = (item: HistoryItem) => {
    dispatch({ type: HISTORY_ACTIONS.ADD_TO_HISTORY, payload: item });
  };

  const value = { history, setHistory, addToHistory };

  useEffect(() => {
    const { data } = useQuery(historyURL);

    if (data) setHistory(data);
  }, []);

  return (
    <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
  );
};
