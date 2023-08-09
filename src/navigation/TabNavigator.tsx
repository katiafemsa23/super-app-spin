import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import SCREENS from './constants';
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
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name={SCREENS.HOME}
        component={NoopComponent}
      />
      <Tab.Screen
        options={{
          header: () => <Header title="Beneficios" />,
        }}
        name={SCREENS.BENEFITS}
        component={NoopComponent}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name={SCREENS.WALLET}
        component={NoopComponent}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name={SCREENS.ACCOUNT}
        component={NoopComponent}
      />
    </Tab.Navigator>
  );
};

const NoopComponent = () => <Text>Screen in process</Text>;

export default TabNavigator;
