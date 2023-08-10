import { useContext, useEffect } from 'react';
import { HistoryContext } from '../history/historyContext';
import { historyURL, useQuery } from '../hooks/useQuery';
import { HISTORY_ACTIONS } from '../history/constants';

const useHistory = () => {
  const context = useContext(HistoryContext);
  const { data } = useQuery(historyURL);

  if (context === undefined) {
    throw new Error('useHistory must be used within a HistoryContext');
  }

  const { history, dispatch, points } = context;

  const setHistory = (items: HistoryItem[]) => {
    dispatch({ type: HISTORY_ACTIONS.SET_HISTORY, payload: items });
  };

  const addToHistory = (item: HistoryItem) => {
    dispatch({ type: HISTORY_ACTIONS.ADD_TO_HISTORY, payload: item });
  };

  useEffect(() => {
    if (data) setHistory(data);
  }, [data]);

  return { addToHistory, setHistory, history, points };
};

export default useHistory;
