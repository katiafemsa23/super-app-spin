import { FlatList, View, Image } from 'react-native';
import moment from 'moment';
import styles from '../../styles/spinplus/Movements/Movements.styles';
import 'moment/locale/es';
import Text from '../../components/Text/Text';
import useTheme from '../../hooks/useTheme';

type PropsT = {
  data: HistoryItem[];
};

moment.locale('es');

const MovementListItem = ({ item }: { item: HistoryItem }) => {
  const theme = useTheme();
  const day = moment(item.date).format('dddd D');
  const date = `${day.charAt(0).toUpperCase()}${day.slice(1)}`;

  return (
    <View
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
      <Text style={styles.pointsText}>{`${
        item.operation === 'earned' ? '+' : '-'
      }${item.points}`}</Text>
    </View>
  );
};

export const MovementList = ({ data }: PropsT) => {
  const renderItem = ({ item }: { item: HistoryItem }) => (
    <MovementListItem item={item} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => `item-${item.id}${index}`}
    />
  );
};
