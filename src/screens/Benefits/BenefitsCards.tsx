import React from 'react';
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
  testID: string;
  img: ImageProps;
  onPress: () => void;
};

const BenefitCard = ({ img, text, onPress, width, testID }: BenefitCardT) => (
  <View style={{ width }} testID={testID}>
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

const BenefitsCards = () => {
  const { width } = useWindowDimensions();
  const twoColumnsCardWidth = width / 2 - 24;
  const { navigateToMovements, navigateToSelectAlly } = useAppNavigation();

  return (
    <View style={styles.container} testID="benefit-cards">
      <BenefitCard
        onPress={navigateToMovements}
        width={twoColumnsCardWidth}
        text={`Consulta \n tu historial`}
        testID="consulta-tu-historial-card"
        img={require('../../assets/benefits-history.png')}
      />
      <BenefitCard
        text="Cambia tus puntos"
        width={twoColumnsCardWidth}
        testID="cambia-tus-puntos-card"
        onPress={navigateToSelectAlly}
        img={require('../../assets/change-points.png')}
      />
    </View>
  );
};

export default BenefitsCards;
