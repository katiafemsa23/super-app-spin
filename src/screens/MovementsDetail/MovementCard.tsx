import React from 'react';
import { Image, View } from 'react-native';
import Card from '../../components/Card/Card';
import styles from '../../styles/spinplus/MovementsDetail.styles';
import Text from '../../components/Text/Text';

const placeholderImage = require('../../assets/oxxo.png');

type PropsT = {
  points: number;
  entity: string;
  operation: 'spent' | 'earned';
};

export const MovementCard = ({ entity, points, operation }: PropsT) => {
  const positivePoints = operation === 'earned';

  return (
    <Card style={styles.cardContainer} testID="movement-card">
      <View style={styles.imageContainer}>
        <Image source={placeholderImage} style={styles.image} />
      </View>
      <View style={styles.entityContainer}>
        <Text
          variant="headline-medium"
          style={styles.entityText}
          testID="entity-text">
          {entity}
        </Text>
        <Text
          variant="default-body"
          testID="description-text"
          style={styles.entityCardSubtitle}>{`En esta compra ${
          positivePoints ? 'ganaste' : 'usaste'
        }:`}</Text>
        <View style={styles.pointsContainer}>
          <Text
            variant="headline-large"
            style={styles.symbol}
            testID="sign-text">
            {positivePoints ? '+' : '-'}
          </Text>
          <Text
            variant="headline-extra-large"
            style={{ fontWeight: '500' }}
            testID="points">
            {points}
          </Text>
        </View>
      </View>
    </Card>
  );
};
