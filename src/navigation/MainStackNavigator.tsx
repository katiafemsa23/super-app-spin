import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SCREENS from './constants';
import TabNavigator, { TabScreensProps } from './TabNavigator';
import { Text } from 'react-native';
import { NavigatorScreenParams } from '@react-navigation/native';
import HistoryDetailsScreen from '../screens/HistoryDetails';
import Header from '../components/Header/Header';
import PointsTicketScreen from '../screens/PointsTicket/PointsTicketScreen';

export type StackNavigatorScreenProps = {
  [SCREENS.TAB_NAVIGATOR]: NavigatorScreenParams<TabScreensProps>;
  [SCREENS.HISTORY]: undefined;
  [SCREENS.BALANCE]: undefined;
  [SCREENS.POINTS_TICKET]: { entity: string; points: number };
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
      <Stack.Screen
        options={{
          header: () => <Header showGoBackButton title="Movimientos" />,
        }}
        component={NoopComponent}
        name={SCREENS.HISTORY}
      />
      <Stack.Screen
        options={{
          header: () => <Header showGoBackButton title="Cambia tus puntos" />,
        }}
        component={NoopComponent}
        name={SCREENS.BALANCE}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        component={PointsTicketScreen}
        name={SCREENS.POINTS_TICKET}
      />
      <Stack.Screen
        options={{
          header: () => (
            <Header showGoBackButton title="Detalle del movimiento" />
          ),
        }}
        component={HistoryDetailsScreen}
        name={SCREENS.MOVEMENT_TICKET}
      />
      <Stack.Screen
        options={{
          header: () => <Header showGoBackButton title="Cambia tus puntos" />,
        }}
        component={NoopComponent}
        name={SCREENS.SELECT_ALLY}
      />
    </Stack.Navigator>
  );
};

const NoopComponent = () => <Text>Screen in process</Text>;

export default MainStackNavigator;
