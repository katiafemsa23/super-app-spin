import { View, Image, ImageProps } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../../components/Card/Card';
import Text from '../../components/Text/Text';
import styles from '../../styles/spinplus/Benefits/BenefitsCards';

type BenefitCardT = {
  text: string;
  img: ImageProps;
  // REPLACE FOR SCREENS TYPE
  navigateTo: string;
};

// TODO: Add correct navigation on onPress action of the card when Movimientos and Cambio de puntos screen is ready
const BenefitCard = ({ img, text, navigateTo }: BenefitCardT) => {
  // ADD NAVIGATION HOOK WHEN MERGED NAVIGATION
  return (
    <Card style={styles.cardContainer} testID="benefit-card">
      <TouchableOpacity>
        <Image width={124} height={124} source={img} />
        <View style={styles.cardTextContainer}>
          <Text variant="small-body-bold" style={styles.cardText}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export const BenefitsCards = () => {
  return (
    <View style={styles.container} testID="benefit-cards">
      <BenefitCard
        navigateTo=""
        text={`Consulta \n tu historial`}
        img={require('../../assets/benefits-history.png')}
      />
      <BenefitCard
        navigateTo=""
        text="Cambia tus puntos"
        img={require('../../assets/change-points.png')}
      />
    </View>
  );
};
