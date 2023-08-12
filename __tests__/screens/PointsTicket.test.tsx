import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { ThemeProvider } from '../../src';
import PointsTicketScreen from '../../src/screens/PointsTicket/PointsTicketScreen';

describe('Points ticket screen', () => {
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

    render(<PointsTicketScreen {...props} />, { wrapper: ThemeProvider });
  });

  it('should render correctly a movement where points was earned', () => {
    const pointsTicket = screen.getByTestId('points-ticket');
    expect(pointsTicket).toBeDefined();
  });

  it('should render Points Ticket Gift Card detail correctly', () => {
    const pointsTicketCard = screen.getByTestId('points-ticket-card');
    const entity = screen.getByText('Volaris');
    const gitftCertificate = screen.getByTestId('gift-certificate');

    expect(pointsTicketCard).toBeDefined();
    expect(entity).toBeTruthy();
    expect(gitftCertificate).toBeDefined();
  });

  it('should render Points Ticket Detail correctly', () => {
    const pointsTicketDescription = screen.getByTestId(
      'points-ticket-description',
    );
    const pointsExchanged = screen.getByText('1000');
    const pointsValue = screen.getByText('$100.00');
    const date = screen.getByTestId('date');

    expect(pointsTicketDescription).toBeDefined();
    expect(pointsExchanged).toBeTruthy();
    expect(pointsValue).toBeTruthy();
    expect(date).toBeDefined();
  });

  it('should render transaction number correctly', () => {
    const transactionNo = screen.getByText('5dced89c-2b6e-4a1c-a715-c19b0a51');

    expect(transactionNo).toBeTruthy();
  });
});
