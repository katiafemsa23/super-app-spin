import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';
import SCREENS from './constants';
import BottomTabs from '../components/BottomTabs/BottomTabs';
import Header from '../components/Header/Header';
import { Benefits } from '../screens/Benefits';
import BalanceScreen from '../screens/Balance';

export type TabScreensProps = {
  [SCREENS.HOME]: undefined;
  [SCREENS.BENEFITS]: undefined;
  [SCREENS.WALLET]: undefined;
  [SCREENS.ACCOUNT]: undefined;
};

const Tab = createBottomTabNavigator<TabScreensProps>();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={BottomTabs}>
      <Tab.Screen
        options={{
          headerShown: false,
          title: 'Home',
        }}
        name={SCREENS.HOME}
        component={BalanceScreen}
      />
      <Tab.Screen
        options={{
          header: () => <Header title="Beneficios" />,
          title: 'Beneficios',
        }}
        name={SCREENS.BENEFITS}
        component={Benefits}
      />
      <Tab.Screen
        options={{
          header: () => <Header title="Cartera" />,
          title: 'Cartera',
        }}
        name={SCREENS.WALLET}
        component={NoopComponent}
      />
      <Tab.Screen
        options={{
          header: () => <Header title="Cuenta" />,
          title: 'Cuenta',
        }}
        name={SCREENS.ACCOUNT}
        component={NoopComponent}
      />
    </Tab.Navigator>
  );
};

const NoopComponent = () => <Text>Screen in process</Text>;

export default TabNavigator;
