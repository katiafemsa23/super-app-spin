import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigatorScreenProps } from '../../navigation';
import SCREENS from '../../navigation/constants';
import MovementsDetail from './MovementsDetail';

const MovementsDetailScreen = ({
  route,
}: StackScreenProps<
  StackNavigatorScreenProps,
  typeof SCREENS.MOVEMENT_TICKET
>) => {
  return <MovementsDetail item={route.params} />;
};

export default MovementsDetailScreen;
