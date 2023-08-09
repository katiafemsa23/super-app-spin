import React from 'react';
import { View, SafeAreaView } from 'react-native';
import useTheme from '../../hooks/useTheme';
import Text from '../../components/Text/Text';
import styles from '../../styles/spinplus/MovementsDetail.styles';
import { MovementCard } from './MovementCard';
import { MovementDetailSection } from './MovementDetailSection';

type MovementsDetailProps = {
  item: Omit<HistoryItem, 'id' | 'operation'>;
};

const MovementsDetail = ({
  item: { date, entity, points, transactionNo },
}: MovementsDetailProps) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{ backgroundColor: theme.colors.surface_primary, flex: 1 }}>
      <View style={styles.firstSectionContainer}>
        <MovementCard entity={entity} points={points} />
        <MovementDetailSection date={date} points={points} />
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
