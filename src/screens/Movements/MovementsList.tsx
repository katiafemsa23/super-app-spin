import { FlatList, View, Image, TouchableOpacity } from 'react-native';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import useTheme from '../../hooks/useTheme';
import Text from '../../components/Text/Text';
import Spinner from '../../components/atoms/Spinner/Spinner';
import styles from '../../styles/spinplus/Movements/Movements.styles';

type DayProps = 'numeric' | '2-digit' | undefined;
type WeekdayProps = 'long' | 'short' | 'narrow' | undefined;

type DateOptionsProps = {
  day: DayProps;
  weekday: WeekdayProps;
};

const options: DateOptionsProps = {
  weekday: 'long',
  day: 'numeric',
};

type MovementListItemProps = {
  isLoading: boolean;
  data: HistoryItem[];
};

const formatDate = (value: string) => {
  const date = new Date(value);
  const formatter = new Intl.DateTimeFormat('es-ES', options);
  const formattedDate = formatter.format(date).replace(',', '');

  return `${formattedDate.charAt(0).toUpperCase()}${formattedDate.slice(1)}`;
};

const MovementListItem = ({ item }: { item: HistoryItem }) => {
  const theme = useTheme();
  const { navigateToMovementTicket } = useAppNavigation();

  const formattedDate = formatDate(item.date);
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
        <Spinner />
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
