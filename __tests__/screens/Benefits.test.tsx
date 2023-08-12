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

  it('should render correctly', () => {
    const benefitsScreen = screen.getByTestId('benefits-screen');
    expect(benefitsScreen).toBeDefined();
  });

  it('should render benefits information correctly', () => {
    const benefitsInfo = screen.getByTestId('benefits-info');
    const pointsText = screen.getByTestId('benefits-info-text');

    expect(benefitsInfo).toBeDefined();
    expect(pointsText).toBeDefined();
  });

  it('should render benefits navigation cards correctly', () => {
    const consultaTuHistorialCard = screen.getByTestId(
      'consulta-tu-historial-card',
    );
    const cambiaTusPuntosCard = screen.getByTestId('cambia-tus-puntos-card');

    expect(consultaTuHistorialCard).toBeDefined();
    expect(cambiaTusPuntosCard).toBeDefined();
  });

  it('should render benefits sections correctly', () => {
    const section1 = screen.getByTestId('section-1');
    const section2 = screen.getByTestId('section-2');
    const section3 = screen.getByTestId('section-3');

    expect(section1).toBeDefined();
    expect(section2).toBeDefined();
    expect(section3).toBeDefined();
  });

  it('should render benefits carousel correctly', () => {
    const section1 = screen.getByTestId('section-1');
    const section2 = screen.getByTestId('section-2');
    const section3 = screen.getByTestId('section-3');

    expect(section1).toBeDefined();
    expect(section2).toBeDefined();
    expect(section3).toBeDefined();
  });
});
