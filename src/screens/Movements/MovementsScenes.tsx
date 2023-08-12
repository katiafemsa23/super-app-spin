import React from 'react';
import { View } from 'react-native';
import { MovementList } from './MovementsList';
import styles from '../../styles/spinplus/Movements/Movements.styles';

type MovementsSceneProps = {
  isLoading: boolean;
  data: HistoryItem[];
};

const filterData = (data: HistoryItem[], operation: 'earned' | 'spent') =>
  data.filter(item => item.operation === operation);

export const MovementsAll = ({ data, isLoading }: MovementsSceneProps) => (
  <View style={styles.tabContainer} testID="tab-all">
    <MovementList data={data} isLoading={isLoading} />
  </View>
);

export const MovementsGained = ({ data, isLoading }: MovementsSceneProps) => {
  const history = filterData(data, 'earned');

  return (
    <View style={styles.tabContainer} testID="tab-earned">
      <MovementList data={history} isLoading={isLoading} />
    </View>
  );
};

export const MovementsUsed = ({ data, isLoading }: MovementsSceneProps) => {
  const history = filterData(data, 'spent');

  return (
    <View style={styles.tabContainer} testID="tab-spent">
      <MovementList data={history} isLoading={isLoading} />
    </View>
  );
};
