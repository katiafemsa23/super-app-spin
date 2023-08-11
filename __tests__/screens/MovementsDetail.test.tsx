import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen } from '@testing-library/react-native';
import { ThemeProvider } from '../../src';
import MovementsDetailScreen from '../../src/screens/MovementsDetail';

describe('Movements Detail screen', () => {
  beforeEach(() => {
    const props: any = {
      route: {
        params: {
          date: 'Sun Aug 01 2023',
          entity: 'Volaris',
          points: 1000,
          operation: 'earned',
          transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
        },
      },
    };

    render(
      <ThemeProvider>
        <NavigationContainer>
          <MovementsDetailScreen {...props} />
        </NavigationContainer>
      </ThemeProvider>,
    );
  });

  it('should render correctly a movement where points was earned', () => {
    const movementsScreen = screen.getByTestId('movements-detail');
    expect(movementsScreen).toBeDefined();
  });

  it('should render Movement Card correctly', () => {
    const movementsCard = screen.getByTestId('movement-card');
    const entity = screen.getByText('Volaris');
    const description = screen.getByText('En esta compra ganaste:');
    const sign = screen.getByText('+');
    const points = screen.getByText('1000');

    expect(movementsCard).toBeDefined();
    expect(entity).toBeTruthy();
    expect(description).toBeTruthy();
    expect(sign).toBeTruthy();
    expect(points).toBeTruthy();
  });

  it('should render Movement Detail correctly', () => {
    const movementsCard = screen.getByTestId('movement-detail-section');
    const entity = screen.getByText('$10000.00');

    expect(movementsCard).toBeDefined();
    expect(entity).toBeTruthy();
  });

  it('should render transaction number correctly', () => {
    const transactionNo = screen.getByText('5dced89c-2b6e-4a1c-a715-c19b0a51');

    expect(transactionNo).toBeTruthy();
  });
});
