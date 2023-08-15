import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackNavigatorScreenProps } from '../navigation';
import SCREENS from '../navigation/constants';
import { HistoryItem } from '../types';

export const useAppNavigation = () => {
  const { navigate, goBack, replace, ...navigation } =
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
    (item: HistoryItem) => {
      replace(SCREENS.POINTS_TICKET, item);
    },
    [replace],
  );

  const navigateToMovementTicket = useCallback(
    (item: HistoryItem) => {
      navigate(SCREENS.MOVEMENT_TICKET, item);
    },
    [navigate],
  );

  const navigateToSelectAlly = useCallback(() => {
    navigate(SCREENS.SELECT_ALLY);
  }, [navigate]);

  return {
    goBack,
    replace,
    navigateToBalance,
    navigateToBenefits,
    navigateToMovements,
    navigateToMovementTicket,
    navigateToPointsTicket,
    navigateToSelectAlly,
    ...navigation,
  };
};
