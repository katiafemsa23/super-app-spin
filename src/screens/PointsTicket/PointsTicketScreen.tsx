import React from 'react';
import PointsTicket from './PointsTicket';
import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigatorScreenProps } from '../../navigation';
import SCREENS from '../../navigation/constants';

type PointsTicketProps = StackScreenProps<
  StackNavigatorScreenProps,
  typeof SCREENS.POINTS_TICKET
>;

const PointsTicketScreen = ({ route }: PointsTicketProps) => {
  return (
    <PointsTicket entity={route.params.entity} points={route.params.points} />
  );
};

export default PointsTicketScreen;
