import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import { Movements } from '../../src/screens/Movements';
import { ThemeProvider } from '../../src';

describe('Movements', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <NavigationContainer>
          <Movements />
        </NavigationContainer>
      </ThemeProvider>,
    );
  });

  it('should render correctly', () => {
    const movementsScreen = screen.getByTestId('movements-screen');
    expect(movementsScreen).toBeDefined();
  });

  it('should render tab all correctly', () => {
    const tabAll = screen.getByTestId('tab-all');
    expect(tabAll).toBeDefined();
  });

  it('should not render a loader', async () => {
    const { getByTestId } = screen;

    await waitForElementToBeRemoved(() => getByTestId('loader'));
  });
});
