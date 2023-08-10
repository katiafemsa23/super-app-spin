import {
  View,
  Image,
  ImageProps,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import Card from '../../components/Card/Card';
import Text from '../../components/Text/Text';
import styles from '../../styles/spinplus/Benefits/BenefitsCards';

type BenefitCardT = {
  text: string;
  width: number;
  img: ImageProps;
  onPress: () => void;
};

const BenefitCard = ({ img, text, onPress, width }: BenefitCardT) => (
  <View style={{ width }}>
    <Card style={styles.cardContainer} testID="benefit-card">
      <TouchableOpacity onPress={onPress}>
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

export const BenefitsCards = () => {
  const { width } = useWindowDimensions();
  const twoColumnsCardWidth = width / 2 - 24;
  const { navigateToMovements, navigateToBalance } = useAppNavigation();

  return (
    <View style={styles.container} testID="benefit-cards">
      <BenefitCard
        onPress={navigateToMovements}
        width={twoColumnsCardWidth}
        text={`Consulta \n tu historial`}
        img={require('../../assets/benefits-history.png')}
      />
      <BenefitCard
        text="Cambia tus puntos"
        width={twoColumnsCardWidth}
        onPress={navigateToBalance}
        img={require('../../assets/change-points.png')}
      />
    </View>
  );
};
