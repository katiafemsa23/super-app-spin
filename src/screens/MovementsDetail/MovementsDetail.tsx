import React from 'react';
import { View, SafeAreaView } from 'react-native';
import useTheme from '../../hooks/useTheme';
import Text from '../../components/Text/Text';
import styles from '../../styles/spinplus/MovementsDetail.styles';
import { MovementCard } from './MovementCard';
import { MovementDetailSection } from './MovementDetailSection';

type MovementsDetailProps = {
  item: HistoryItem;
};

const MovementsDetail = ({
  item: { date, entity, points, transactionNo, operation },
}: MovementsDetailProps) => {
  const theme = useTheme();

  return (
    <SafeAreaView
      testID="movements-detail"
      style={{ backgroundColor: theme.colors.surface_primary, flex: 1 }}>
      <View style={styles.firstSectionContainer}>
        <MovementCard entity={entity} points={points} operation={operation} />
        <MovementDetailSection
          date={date}
          points={points}
          operation={operation}
        />
      </View>
      <View style={styles.transactionContainer}>
        <Text variant="label-default">Número de transacción</Text>
        <Text
          testID="transaction-no"
          variant="label-default"
          style={{ color: theme.colors.content_tertiary, marginTop: 8 }}>
          {transactionNo}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MovementsDetail;
