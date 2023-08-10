import { View, Image } from 'react-native';
import useTheme from '../../hooks/useTheme';
import Text from '../../components/Text/Text';
import Tag from '../../components/Tag/Tag';
import styles from '../../styles/spinplus/Benefits/BenefitsInfo.styles';

// TODO: Replace hardcoded text with retrieved from endpoint
export const BenefitsInfo = () => {
  const theme = useTheme();

  return (
    <View style={styles.container} testID="benefits-info">
      <View>
        <Text style={styles.pointsText} variant="headline-large">
          10, 657 puntos
        </Text>
        <Tag label={'Valen $156.00'} containerStyles={styles.tag} />
      </View>
      <Image
        width={120}
        height={120}
        source={require('../../assets/spinPremiaRibbon.png')}
      />
    </View>
  );
};
