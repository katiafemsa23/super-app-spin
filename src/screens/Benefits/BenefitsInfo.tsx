import { View, Image } from 'react-native';
import Text from '../../components/Text/Text';
import styles from '../../styles/spinplus/Benefits/BenefitsInfo.styles';

// TODO: Replace hardcoded text with retrieved from endpoint
export const BenefitsInfo = () => {
  return (
    <View style={styles.container} testID="benefits-info">
      <View>
        <Text style={styles.pointsText} variant="headline-large">
          10, 657 puntos
        </Text>
        <View style={styles.pointsContainer}>
          <Image
            width={16}
            height={16}
            source={require('../../assets/starburst.png')}
          />
          <Text style={styles.pointsValueText} variant="label-extra-small-bold">
            Valen $156.00
          </Text>
        </View>
      </View>
      <Image
        width={120}
        height={120}
        source={require('../../assets/spinPremiaRibbon.png')}
      />
    </View>
  );
};
