import React from 'react';
import { Image, View } from 'react-native';
import Card from '../../components/Card/Card';
import styles from '../../styles/spinplus/MovementsDetail.styles';
import Text from '../../components/Text/Text';

const placeholderImage = require('../../assets/oxxo.png');

type PropsT = {
  points: number;
  entity: string;
};

export const MovementCard = ({ entity, points }: PropsT) => {
  const positivePoints = points >= 0;

  return (
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
          <Text variant="headline-extra-large" style={{ fontWeight: '500' }}>
            {points}
          </Text>
        </View>
      </View>
    </Card>
  );
};
