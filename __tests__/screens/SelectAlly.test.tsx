import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen } from '@testing-library/react-native';
import { ThemeProvider } from '../../src';
import { SelectAlly } from '../../src/screens/SelectAlly';

describe('Select Ally screen', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <NavigationContainer>
          <SelectAlly />
        </NavigationContainer>
      </ThemeProvider>,
    );
  });

  it('should render correctly', () => {
    const selectAllyScreen = screen.getByTestId('select-ally-screen');
    expect(selectAllyScreen).toBeDefined();
  });

  it('should render Flat list with allies correctly', () => {
    const allyList = screen.getByTestId('allies-list');
    expect(allyList).toBeDefined();
  });
});
