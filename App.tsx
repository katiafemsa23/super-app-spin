import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import { HistorytProvider } from './src/history/historyContext';
import ThemeProvider from './src/theme/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <HistorytProvider>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </HistorytProvider>
    </ThemeProvider>
  );
};

export default App;
