import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen } from '@testing-library/react-native';
import { Benefits } from '../../src/screens/Benefits';
import { ThemeProvider } from '../../src';

describe('Benefits', () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <NavigationContainer>
          <Benefits />
        </NavigationContainer>
      </ThemeProvider>,
    );
  });

  it('renders correctly', () => {
    const benefitsScreen = screen.getByTestId('benefits-screen');
    expect(benefitsScreen).toBeDefined();
  });

  describe('Benefits Info', () => {
    it('renders correctly', () => {
      const benefitsInfo = screen.getByTestId('benefits-info');
      const pointsText = screen.getByTestId('benefits-info-text');

      expect(benefitsInfo).toBeDefined();
      expect(pointsText).toBeDefined();
    });
  });

  /*describe('Benefits cards', () => {
    it('renders correctly', () => {
      const { getByTestId } = render(<BenefitsCards />);
      const benefitsCards = getByTestId('benefits-cards');

      expect(benefitsCards).toBeDefined();
      expect(benefitsCards).toHaveLength(2);
    });
  });*/
});
