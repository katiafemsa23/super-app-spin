import { Image, View, SafeAreaView, StyleSheet, Button } from 'react-native';
import React, { useMemo } from 'react';
import Text from '../../components/Text/Text';
import { formatDate } from '../../utils';

const placeholderImage = require('../../assets/placeholderImage.png');

type HistoryDetailsProps = {
  item: Omit<HistoryItem, 'id' | 'operation'>;
};

const HistoryDetails = ({
  item: { date, entity, points, transactionNo },
}: HistoryDetailsProps) => {
  const positivePoints = points >= 0;
  const formattedDate = useMemo(() => formatDate(date), [date]);

  return (
    <SafeAreaView style={{ backgroundColor: '#FFF', flex: 1 }}>
      <View style={styles.firstSectionContainer}>
        <View style={styles.entityContainer}>
          <View style={styles.imageContainer}>
            <Image source={placeholderImage} style={styles.image} />
          </View>
          <Text
            variant="headline-medium"
            style={{ margin: 8, fontWeight: '500' }}>
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
            <Text variant="headline-extra-large" style={{ fontWeight: '500' }}>
              {points}
            </Text>
          </View>
        </View>
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
          style={{ color: '#69698B', marginTop: 8 }}>
          {transactionNo}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  entityContainer: {
    borderWidth: 1,
    borderColor: 'rgba(5, 5, 61, 0.08)',
    borderRadius: 8,
    alignItems: 'center',
    paddingTop: 32,
    marginTop: 40,
    marginBottom: 25.35,
    paddingBottom: 8,
  },
  imageContainer: {
    position: 'absolute',
    top: -40,
  },
  firstSectionContainer: {
    padding: 16,
  },
  image: {
    height: 72,
    width: 72,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 50,
    backgroundColor: '#FFF',
  },
  entityCardSubtitle: {
    backgroundColor: '#F5F5F7',
    width: 280,
    padding: 10,
    textAlign: 'center',
    borderRadius: 16,
    overflow: 'hidden',
  },
  symbol: {
    fontWeight: 'bold',
    color: '#1723D3',
    marginRight: 4,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  valueLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  value: {
    marginLeft: 12,
    fontWeight: '600',
  },
  transactionContainer: {
    borderTopWidth: 1,
    borderColor: 'rgba(5, 5, 61, 0.08)',
    padding: 16,
  },
});

export default HistoryDetails;
