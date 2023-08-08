import 'react-native-gesture-handler';
import React from 'react';
import ThemeProvider from './src/theme/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigation/MainStackNavigator';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
