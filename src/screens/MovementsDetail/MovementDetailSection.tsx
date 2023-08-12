import React from 'react';
import { useMemo } from 'react';
import { DateOptionsProps, formatDate } from '../../utils';
import { View } from 'react-native';
import Text from '../../components/Text/Text';
import styles from '../../styles/spinplus/MovementsDetail.styles';

type PropsT = {
  date: string;
  points: number;
  operation: 'earned' | 'spent';
};

const options: DateOptionsProps = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
};

export const MovementDetailSection = ({ date, points, operation }: PropsT) => {
  const positivePoints = operation === 'earned';
  const formattedDate = useMemo(
    () => formatDate(date, options, 'es-ES'),
    [date],
  );

  return (
    <>
      {positivePoints && (
        <View
          style={styles.valueLabelContainer}
          testID="movement-detail-section">
          <Text variant="label-default">Monto total:</Text>
          <Text
            style={styles.value}
            variant="default-body-bold"
            testID="total-amount-text">
            ${(points * 10).toFixed(2)}
          </Text>
        </View>
      )}
      <View style={styles.valueLabelContainer}>
        <Text variant="label-default">Fecha:</Text>
        <Text
          variant="default-body-bold"
          style={styles.value}
          testID="date-text">
          {formattedDate}
        </Text>
      </View>
      <View style={styles.valueLabelContainer}>
        <Text variant="label-default">Úsalos desde el:</Text>
        <Text
          style={styles.value}
          variant="default-body-bold"
          testID="use-until-text">
          {formattedDate}
        </Text>
      </View>
    </>
  );
};
