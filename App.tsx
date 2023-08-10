import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import { HistorytProvider } from './src/history/historyContext';
import ThemeProvider from './src/theme/ThemeProvider';
import { SnackBar } from './src';

const App = () => {
  return (
    <ThemeProvider>
      <HistorytProvider>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
        <SnackBar.Component />
      </HistorytProvider>
    </ThemeProvider>
  );
};

export default App;
