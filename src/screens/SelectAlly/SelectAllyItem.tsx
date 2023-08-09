import { Image, TouchableOpacity, View } from 'react-native';
import Card from '../../components/Card/Card';
import Text from '../../components/Text/Text';
import styles from '../../styles/spinplus/SelectAlly.styles';
import { AllyItemT } from '.';

type PropsT = AllyItemT & {
  detailColor: string;
};

// TODO: Add navigate to Balance when Balance screen is created
export const SelectAllyItem = ({
  img,
  title,
  detailColor,
  description,
}: PropsT) => (
  <Card>
    <TouchableOpacity style={styles.cardContainer}>
      <Image width={40} height={40} source={img} />
      <View style={styles.detail}>
        <Text variant="default-body-bold">{title}</Text>
        <Text variant="small-body" style={[{ color: detailColor }]}>
          {description}
        </Text>
      </View>
      <View style={styles.img}>
        <Image source={require('../../assets/rightArrow.png')} />
      </View>
    </TouchableOpacity>
  </Card>
);
