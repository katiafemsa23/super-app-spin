import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SCREENS from './constants';
import TabNavigator, { TabScreensProps } from './TabNavigator';
import { Text } from 'react-native';
import { NavigatorScreenParams } from '@react-navigation/native';
import HistoryDetailsScreen from '../screens/HistoryDetails';

export type StackNavigatorScreenProps = {
  [SCREENS.TAB_NAVIGATOR]: NavigatorScreenParams<TabScreensProps>;
  [SCREENS.HISTORY]: undefined;
  [SCREENS.BALANCE]: undefined;
  [SCREENS.POINTS_TICKET]: undefined;
  [SCREENS.MOVEMENT_TICKET]: Omit<HistoryItem, 'id' | 'operation'>;
  [SCREENS.SELECT_ALLY]: undefined;
};

const Stack = createStackNavigator<StackNavigatorScreenProps>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        component={TabNavigator}
        name={SCREENS.TAB_NAVIGATOR}
      />
      <Stack.Screen component={NoopComponent} name={SCREENS.HISTORY} />
      <Stack.Screen component={NoopComponent} name={SCREENS.BALANCE} />
      <Stack.Screen component={NoopComponent} name={SCREENS.POINTS_TICKET} />
      <Stack.Screen
        component={HistoryDetailsScreen}
        name={SCREENS.MOVEMENT_TICKET}
      />
      <Stack.Screen component={NoopComponent} name={SCREENS.SELECT_ALLY} />
    </Stack.Navigator>
  );
};

const NoopComponent = () => <Text>Screen in process</Text>;

export default MainStackNavigator;
