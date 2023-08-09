import React, { useMemo } from 'react';
import { Image, View, SafeAreaView, useWindowDimensions } from 'react-native';
import { formatDate } from '../../utils';
import useTheme from '../../hooks/useTheme';
import Text from '../../components/Text/Text';
import styles from '../../styles/spinplus/MovementsDetail.styles';
import Card from '../../components/Card/Card';

const placeholderImage = require('../../assets/oxxo.png');

type MovementsDetailProps = {
  item: Omit<HistoryItem, 'id' | 'operation'>;
};

const MovementsDetail = ({
  item: { date, entity, points, transactionNo },
}: MovementsDetailProps) => {
  const theme = useTheme();
  const dimensions = useWindowDimensions();
  const positivePoints = points >= 0;
  const formattedDate = useMemo(() => formatDate(date), [date]);

  return (
    <SafeAreaView
      style={{ backgroundColor: theme.colors.surface_primary, flex: 1 }}>
      <View style={styles.firstSectionContainer}>
        <Card style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image source={placeholderImage} style={styles.image} />
          </View>
          <View style={styles.entityContainer}>
            <Text variant="headline-medium" style={styles.entityText}>
              {entity}
            </Text>
            <Text
              variant="default-body"
              style={styles.entityCardSubtitle}>{`En esta compra ${
              positivePoints ? 'ganaste' : 'usaste'
            }:`}</Text>
            <View style={styles.pointsContainer}>
              <Text variant="headline-large" style={styles.symbol}>
                {positivePoints ? '+' : '-'}
              </Text>
              <Text
                variant="headline-extra-large"
                style={{ fontWeight: '500' }}>
                {points}
              </Text>
            </View>
          </View>
        </Card>
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
      </View>
      <View style={styles.transactionContainer}>
        <Text variant="label-default">Número de transacción</Text>
        <Text
          variant="label-default"
          style={{ color: theme.colors.content_tertiary, marginTop: 8 }}>
          {transactionNo}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MovementsDetail;
