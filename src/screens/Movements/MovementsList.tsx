import React from 'react';
import { FlatList, View, Image, TouchableOpacity } from 'react-native';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import useTheme from '../../hooks/useTheme';
import Text from '../../components/Text/Text';
import Spinner from '../../components/atoms/Spinner/Spinner';
import styles from '../../styles/spinplus/Movements/Movements.styles';
import { DateOptionsProps, formatDate, formatStringDate } from '../../utils';

const options: DateOptionsProps = {
  weekday: 'long',
  day: 'numeric',
};

type MovementListItemProps = {
  isLoading: boolean;
  data: HistoryItem[];
};

const movementsListItemFormatDate = (value: string) => {
  const date = formatStringDate(value, options, 'es-ES');

  return `${date.charAt(0).toUpperCase()}${date.slice(1)}`;
};

const MovementListItem = ({ item }: { item: HistoryItem }) => {
  const theme = useTheme();
  const { navigateToMovementTicket } = useAppNavigation();

  const formattedDate = movementsListItemFormatDate(item.date);
  const sign = item.operation === 'earned' ? '+' : '-';

  return (
    <TouchableOpacity
      onPress={() => navigateToMovementTicket(item)}
      style={[
        styles.movementListItem,
        { borderBottomColor: theme.colors.stroke_secondary },
      ]}>
      <Image width={40} height={40} source={require('../../assets/oxxo.png')} />
      <View style={styles.leftComponent}>
        <Text variant="default-body">{item.entity}</Text>
        <Text
          variant="small-body"
          style={[{ color: theme.colors.content_secondary }]}>
          {formattedDate}
        </Text>
      </View>
      <Text style={styles.pointsText}>{`${sign}${item.points}`}</Text>
    </TouchableOpacity>
  );
};

export const MovementList = ({ data, isLoading }: MovementListItemProps) => {
  const renderItem = ({ item }: { item: HistoryItem }) => (
    <MovementListItem item={item} />
  );

  return (
    <View>
      {isLoading ? (
        <Spinner testID="loader" />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => `item-${item.id}${index}`}
        />
      )}
    </View>
  );
};
