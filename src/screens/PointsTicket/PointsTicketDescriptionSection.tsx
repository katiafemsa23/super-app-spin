import { View } from 'react-native';
import React from 'react';
import styles from '../../styles/spinplus/PointsTicket/PointsTicket.styles';
import Text from '../../components/Text/Text';
import { DateOptionsProps, formatDate } from '../../utils';

type Props = {
  date: string;
  points: number;
};

const options: DateOptionsProps = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const PointsTicketDescriptionSection = ({ points, date }: Props) => {
  const formattedDate = formatDate(date, options, 'es-ES');

  return (
    <View testID="points-ticket-description">
      <View style={styles.valueLabelContainer}>
        <Text variant="label-default" style={styles.label}>
          Puntos Cambiados:
        </Text>
        <Text
          variant="default-body-bold"
          style={styles.value}
          testID="points-value">
          {points}
        </Text>
      </View>
      <View style={styles.valueLabelContainer}>
        <Text variant="label-default" style={styles.label}>
          Valen:
        </Text>
        <Text variant="default-body-bold" style={styles.value}>
          ${(points / 10).toFixed(2)}
        </Text>
      </View>
      <View style={styles.valueLabelContainer}>
        <Text variant="label-default" style={styles.label}>
          Fecha:
        </Text>
        <Text variant="default-body-bold" style={styles.value} testID="date">
          {formattedDate}
        </Text>
      </View>
      <View style={styles.valueLabelContainer}>
        <Text variant="label-default" style={styles.label}>
          Válido hasta el:
        </Text>
        <Text variant="default-body-bold" style={styles.value}>
          16/11/2023
        </Text>
      </View>
    </View>
  );
};

export default PointsTicketDescriptionSection;
