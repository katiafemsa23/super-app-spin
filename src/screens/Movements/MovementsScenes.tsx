// TODO: Consum the correct data once api service ticket is merged
import React from 'react';
import { View } from 'react-native';
import { MovementList } from './MovementsList';
import styles from '../../styles/spinplus/Movements/Movements.styles';
import useHistory from '../../hooks/useHistory';

const filterData = (data: HistoryItem[], operation: 'earned' | 'spent') =>
  data.filter(item => item.operation === operation);

export const MovementsAll = () => {
  const { history } = useHistory();
  return (
    <View style={styles.tabContainer}>
      <MovementList data={history} isLoading={false} />
    </View>
  );
};

export const MovementsGained = () => {
  const { history } = useHistory();
  const data = filterData(history, 'earned');

  return (
    <View style={styles.tabContainer}>
      <MovementList data={data} isLoading={false} />
    </View>
  );
};

export const MovementsUsed = () => {
  const { history } = useHistory();
  const data = filterData(history, 'spent');

  return (
    <View style={styles.tabContainer}>
      <MovementList data={data} isLoading={false} />
    </View>
  );
};
