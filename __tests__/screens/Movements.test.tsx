import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import { Movements } from '../../src/screens/Movements';
import { ThemeProvider } from '../../src';

describe('Movements', () => {
  beforeEach(() => {
    render(<Movements />, { wrapper: ThemeProvider });
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
