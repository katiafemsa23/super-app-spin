import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import SCREENS from './constants';
import {Text} from 'react-native';

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
      <Tab.Screen name={SCREENS.HOME} component={NoopComponent} />
      <Tab.Screen name={SCREENS.BENEFITS} component={NoopComponent} />
      <Tab.Screen name={SCREENS.WALLET} component={NoopComponent} />
      <Tab.Screen name={SCREENS.ACCOUNT} component={NoopComponent} />
    </Tab.Navigator>
  );
};

const NoopComponent = () => <Text>Screen in process</Text>;

export default TabNavigator;
