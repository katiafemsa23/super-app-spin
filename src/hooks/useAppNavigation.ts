import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigatorScreenProps } from '../navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import SCREENS from '../navigation/constants';

export const useAppNavigation = () => {
  const { navigate, goBack, ...navigation } =
    useNavigation<StackNavigationProp<StackNavigatorScreenProps>>();

  const navigateToBenefits = useCallback(() => {
    navigate(SCREENS.TAB_NAVIGATOR, { screen: SCREENS.BENEFITS });
  }, [navigate]);

  const navigateToMovements = useCallback(() => {
    navigate(SCREENS.MOVEMENTS);
  }, [navigate]);

  const navigateToBalance = useCallback(
    (entity: string) => {
      navigate(SCREENS.BALANCE, { entity });
    },
    [navigate],
  );

  const navigateToPointsTicket = useCallback(
    (entity: string, points: number) => {
      navigate(SCREENS.POINTS_TICKET, { entity, points });
    },
    [navigate],
  );

  const navigateToMovementTicket = useCallback(
    ({ entity, date, points, transactionNo }: HistoryItem) => {
      navigate(SCREENS.MOVEMENT_TICKET, {
        entity,
        date,
        points,
        transactionNo,
      });
    },
    [navigate],
  );

  const navigateToSelectAlly = useCallback(() => {
    navigate(SCREENS.SELECT_ALLY);
  }, [navigate]);

  return {
    goBack,
    navigateToBalance,
    navigateToBenefits,
    navigateToMovements,
    navigateToMovementTicket,
    navigateToPointsTicket,
    navigateToSelectAlly,
    ...navigation,
  };
};
