import {
  View,
  Image,
  ImageProps,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StackNavigatorScreenProps } from '../../navigation';
import SCREENS from '../../navigation/constants';
import Card from '../../components/Card/Card';
import Text from '../../components/Text/Text';
import styles from '../../styles/spinplus/Benefits/BenefitsCards';

type BenefitCardT = {
  text: string;
  width: number;
  img: ImageProps;
  navigateTo: 'history' | 'movement-ticket';
};

const BenefitCard = ({ img, text, navigateTo, width }: BenefitCardT) => {
  const { navigate } =
    useNavigation<StackNavigationProp<StackNavigatorScreenProps>>();

  return (
    <View style={{ width }}>
      <Card style={styles.cardContainer} testID="benefit-card">
        <TouchableOpacity onPress={() => navigate(navigateTo)}>
          <Image style={styles.img} width={124} height={124} source={img} />
          <View style={styles.cardTextContainer}>
            <Text variant="small-body-bold" style={styles.cardText}>
              {text}
            </Text>
          </View>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

export const BenefitsCards = () => {
  const { width } = useWindowDimensions();
  const twoColumnsCardWidth = width / 2 - 24;

  return (
    <View style={styles.container} testID="benefit-cards">
      <BenefitCard
        navigateTo={SCREENS.HISTORY}
        width={twoColumnsCardWidth}
        text={`Consulta \n tu historial`}
        img={require('../../assets/benefits-history.png')}
      />
      <BenefitCard
        text="Cambia tus puntos"
        width={twoColumnsCardWidth}
        navigateTo={SCREENS.MOVEMENT_TICKET}
        img={require('../../assets/change-points.png')}
      />
    </View>
  );
};
