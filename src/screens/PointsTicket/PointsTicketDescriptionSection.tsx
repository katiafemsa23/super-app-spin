import { View } from 'react-native';
import React from 'react';
import styles from '../../styles/spinplus/PointsTicket/PointsTicket.styles';
import Text from '../../components/Text/Text';

type Props = {
  points: number;
};

const PointsTicketDescriptionSection = ({ points }: Props) => {
  return (
    <View>
      <View style={styles.valueLabelContainer}>
        <Text variant="label-default" style={styles.label}>
          Puntos Cambiados:
        </Text>
        <Text variant="default-body-bold" style={styles.value}>
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
        <Text variant="default-body-bold" style={styles.value}>
          03 de septiembre del 2023
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
