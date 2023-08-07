import {useNavigation} from '@react-navigation/native';
import { StackNavigatorScreenProps } from '../navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { useCallback } from 'react';
import SCREENS from '../navigation/constants';

export const useAppNavigation = () => {
  const {navigate, goBack, ...navigation} = useNavigation<StackNavigationProp<StackNavigatorScreenProps>>();

  const navigateToBenefits = useCallback(() => {
    navigate(SCREENS.TAB_NAVIGATOR, {screen: SCREENS.BENEFITS});
  },[navigate]);

  const navigateToHistory = useCallback(() => {
    navigate(SCREENS.HISTORY);
  },[navigate]); 

  const navigateToBalance = useCallback(() => {
    navigate(SCREENS.BALANCE);
  },[navigate]);

  const navigateToPointsTicket = useCallback(() => {
    navigate(SCREENS.POINTS_TICKET);
  },[navigate]);

  const navigateToMovementTicket = useCallback(() => {
    navigate(SCREENS.MOVEMENT_TICKET);
  },[navigate]);

  const navigateToSelectAlly = useCallback(() => {
    navigate(SCREENS.SELECT_ALLY);
  },[navigate]);

  return {
    goBack,
    navigateToBalance,
    navigateToBenefits,
    navigateToHistory,
    navigateToMovementTicket,
    navigateToPointsTicket,
    navigateToSelectAlly,
    ...navigation
  };
};
