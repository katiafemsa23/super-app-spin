import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import SCREENS from './constants';
import { Text } from 'react-native';
import BottomTabs from '../components/BottomTabs/BottomTabs';

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
      <Tab.Screen options={{title: "Home"}} name={SCREENS.HOME} component={NoopComponent} />
      <Tab.Screen options={{title: "Beneficios"}} name={SCREENS.BENEFITS} component={NoopComponent} />
      <Tab.Screen options={{title: "Cartera"}} name={SCREENS.WALLET} component={NoopComponent} />
      <Tab.Screen options={{title: "Cuenta"}} name={SCREENS.ACCOUNT} component={NoopComponent} />
    </Tab.Navigator>
  );
};

const NoopComponent = () => <Text>Screen in process</Text>;

export default TabNavigator;
