import { useMemo } from 'react';
import { DateOptionsProps, formatDate } from '../../utils';
import { View } from 'react-native';
import Text from '../../components/Text/Text';
import styles from '../../styles/spinplus/MovementsDetail.styles';

type PropsT = {
  date: string;
  points: number;
};

const options: DateOptionsProps = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
};

export const MovementDetailSection = ({ date, points }: PropsT) => {
  const positivePoints = points >= 0;
  const formattedDate = useMemo(() => formatDate(date, options), [date]);

  return (
    <>
      {positivePoints && (
        <View style={styles.valueLabelContainer}>
          <Text variant="label-default">Monto total:</Text>
          <Text variant="default-body-bold" style={styles.value}>
            ${(points * 10).toFixed(2)}
          </Text>
        </View>
      )}
      <View style={styles.valueLabelContainer}>
        <Text variant="label-default">Fecha:</Text>
        <Text variant="default-body-bold" style={styles.value}>
          {formattedDate}
        </Text>
      </View>
      <View style={styles.valueLabelContainer}>
        <Text variant="label-default">Úsalos desde el:</Text>
        <Text variant="default-body-bold" style={styles.value}>
          {formattedDate}
        </Text>
      </View>
    </>
  );
};
