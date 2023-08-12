import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import PointsTicketScreen from '../screens/PointsTicket/PointsTicketScreen';
import TabNavigator, { TabScreensProps } from './TabNavigator';
import MovementsDetailScreen from '../screens/MovementsDetail';
import Header from '../components/Header/Header';
import { Movements } from '../screens/Movements';
import BalanceScreen from '../screens/Balance';
import { SelectAlly } from '../screens/SelectAlly';
import SCREENS from './constants';
import { HistoryItem } from '../types';

export type StackNavigatorScreenProps = {
  [SCREENS.TAB_NAVIGATOR]: NavigatorScreenParams<TabScreensProps>;
  [SCREENS.MOVEMENTS]: undefined;
  [SCREENS.BALANCE]: { entity: string };
  [SCREENS.POINTS_TICKET]: HistoryItem;
  [SCREENS.MOVEMENT_TICKET]: HistoryItem;
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
        component={Movements}
        name={SCREENS.MOVEMENTS}
      />
      <Stack.Screen
        options={{
          header: () => <Header showGoBackButton title="Cambia tus puntos" />,
        }}
        component={BalanceScreen}
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
        component={MovementsDetailScreen}
        name={SCREENS.MOVEMENT_TICKET}
      />
      <Stack.Screen
        options={{
          header: () => <Header showGoBackButton title="Cambia tus puntos" />,
        }}
        component={SelectAlly}
        name={SCREENS.SELECT_ALLY}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
