import { View, Text } from 'react-native';
import React from 'react';
import { StackNavigatorScreenProps } from '../../navigation';
import SCREENS from '../../navigation/constants';
import { StackScreenProps } from '@react-navigation/stack';
import HistoryDetails from './HistoryDetails';

const HistoryDetailsScreen = ({
  route,
}: StackScreenProps<
  StackNavigatorScreenProps,
  typeof SCREENS.MOVEMENT_TICKET
>) => {
  return <HistoryDetails item={route.params} />;
};

export default HistoryDetailsScreen;
