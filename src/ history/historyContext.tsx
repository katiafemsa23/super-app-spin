import React, {createContext, useReducer} from 'react';
import {HistoryContextProps} from './types';
import {historyReducer} from './historyReducer';

export const HistoryContext = createContext<HistoryContextProps>({
  dispatch: () => {},
  history: [],
});

export const HistoryContextProvider = ({children}: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(historyReducer, []);

  return (
    <HistoryContext.Provider value={{history: state, dispatch: dispatch}}>
      {children}
    </HistoryContext.Provider>
  );
};
