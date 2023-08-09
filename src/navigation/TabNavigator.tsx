import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import SCREENS from './constants';
import BottomTabs from '../components/BottomTabs/BottomTabs';
import { Text, View } from 'react-native';
import Header from '../components/Header/Header';

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
          title: "Home",
        }}
        name={SCREENS.HOME}
        component={NoopComponent}
      />
      <Tab.Screen
        options={{
          header: () => <Header title="Beneficios" />,
          title: "Beneficios",
        }}
        name={SCREENS.BENEFITS}
        component={NoopComponent}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          title: "Cartera",
        }}
        name={SCREENS.WALLET}
        component={NoopComponent}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          title: "Cuenta",
        }}
        name={SCREENS.ACCOUNT}
        component={NoopComponent}
      />
    </Tab.Navigator>
  );
};

const NoopComponent = () => <Text>Screen in process</Text>;

export default TabNavigator;
