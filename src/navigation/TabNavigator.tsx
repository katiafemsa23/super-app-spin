import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabs from '../components/BottomTabs/BottomTabs';
import Header from '../components/Header/Header';
import { Benefits } from '../screens/Benefits';
import SCREENS from './constants';
import Text from '../components/Text/Text';

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
        component={EmptyTabComponent}
        name={SCREENS.HOME}
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
          headerShown: false,
          title: 'Cartera',
        }}
        name={SCREENS.WALLET}
        component={EmptyTabComponent}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          title: 'Cuenta',
        }}
        name={SCREENS.ACCOUNT}
        component={EmptyTabComponent}
      />
    </Tab.Navigator>
  );
};

const EmptyTabComponent = ({ route }: { route: { name: string } }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/mobile.png')} />
      <Text style={styles.text} variant="headline-small">
        Pantalla {route.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 24,
  },
});

export default TabNavigator;
