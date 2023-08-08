import { useContext } from 'react';
import { HistoryContext } from '../history/historyContext';
import { HISTORY_ACTIONS } from '../history/constants';

const useHistory = () => {
  const context = useContext(HistoryContext);

  if (context === undefined) {
    throw new Error('useHistory must be used within a HistoryContext');
  }

  return context;
};

export default useHistory;
