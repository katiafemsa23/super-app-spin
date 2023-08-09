import { FlatList, View, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import useTheme from '../../hooks/useTheme';
import Text from '../../components/Text/Text';
import Spinner from '../../components/atoms/Spinner/Spinner';
import styles from '../../styles/spinplus/Movements/Movements.styles';
import 'moment/locale/es';
import { useAppNavigation } from '../../hooks/useAppNavigation';

type PropsT = {
  isLoading: boolean;
  data: HistoryItem[];
};

moment.locale('es');

const MovementListItem = ({ item }: { item: HistoryItem }) => {
  const theme = useTheme();
  const { navigateToMovementTicket } = useAppNavigation();
  const day = moment(item.date).format('dddd D');
  const sign = item.operation === 'earned' ? '+' : '-';
  const date = `${day.charAt(0).toUpperCase()}${day.slice(1)}`;

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
          {date}
        </Text>
      </View>
      <Text style={styles.pointsText}>{`${sign}${item.points}`}</Text>
    </TouchableOpacity>
  );
};

export const MovementList = ({ data, isLoading }: PropsT) => {
  const renderItem = ({ item }: { item: HistoryItem }) => (
    <MovementListItem item={item} />
  );

  return (
    <View>
      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          data={[
            {
              entity: 'Oxxo Gas',
              date: 'Sun Aug 06 2023',
              points: 100,
              operation: 'earned',
              transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
              id: 1,
            },
            {
              entity: 'Volaris',
              date: 'Sun Aug 01 2023',
              points: 1000,
              operation: 'earned',
              transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
              id: 2,
            },
            {
              entity: 'Volaris',
              date: 'Sun Aug 01 2023',
              points: 1000,
              operation: 'earned',
              transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
              id: 3,
            },
            {
              entity: 'Volaris',
              date: 'Sun Aug 01 2023',
              expiryDate: 'Fri Sep 01 2023',
              points: 1000,
              operation: 'earned',
              transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
              giftCode: '42738499092812000',
              id: 4,
            },
          ]}
          renderItem={renderItem}
          keyExtractor={(item, index) => `item-${item.id}${index}`}
        />
      )}
    </View>
  );
};
