import React, { useState } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import useHistory from '../../hooks/useHistory';
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

export const Movements = () => {
  const theme = useTheme();
  const { history, isLoading } = useHistory();
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState(movementsRoutes);

  const renderScene = SceneMap({
    all: () => <MovementsAll data={history} isLoading={isLoading} />,
    gained: () => <MovementsGained data={history} isLoading={isLoading} />,
    used: () => <MovementsUsed data={history} isLoading={isLoading} />,
  });

  return (
    <View
      testID="movements-screen"
      style={[
        styles.container,
        { backgroundColor: theme.colors.surface_primary },
      ]}>
      <TabView
        testID="tab-view"
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={props => <TabBar {...props} />}
      />
    </View>
  );
};
