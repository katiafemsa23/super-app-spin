import React, { useState } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import useTheme from '../../hooks/useTheme';
import TabBar from '../../components/TabBar/TabBar';
import {
  MovementsAll,
  MovementsGained,
  MovementsUsed,
} from './MovementsScenes';
import styles from '../../styles/spinplus/Movements/Movements.styles';

const movementsRoutes = [
  { key: 'all', title: 'Todos' },
  { key: 'gained', title: 'Ganados' },
  { key: 'used', title: 'Usados' },
];

const renderScene = SceneMap({
  all: MovementsAll,
  gained: MovementsGained,
  used: MovementsUsed,
});

export const Movements = () => {
  const theme = useTheme();
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState(movementsRoutes);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.surface_primary },
      ]}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={props => <TabBar {...props} />}
      />
    </View>
  );
};
