import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import { HistorytProvider } from './src/history/historyContext';
import ThemeProvider from './src/theme/ThemeProvider';
import { BottomSheet, SnackBar } from './src';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <HistorytProvider>
          <NavigationContainer>
            <MainStackNavigator />
          </NavigationContainer>
          <SnackBar.Component />
          <BottomSheet.Component />
        </HistorytProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
