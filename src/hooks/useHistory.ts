import {useContext} from 'react';
import {HistoryContext} from '../ history/historyContext';
import {HISTORY_ACTIONS} from '../ history/constants';

const useHistory = () => {
  const {dispatch, history} = useContext(HistoryContext);

  const setHistory = (items: HistoryItem[]) => {
    dispatch({type: HISTORY_ACTIONS.SET_HISTORY, payload: items});
  };

  const addToHistory = (item: HistoryItem) => {
    dispatch({type: HISTORY_ACTIONS.ADD_TO_HISTORY, payload: item});
  };

  return {setHistory, addToHistory, history};
};

export default useHistory;
