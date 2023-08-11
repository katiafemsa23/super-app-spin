import { View, Image } from 'react-native';
import useHistory from '../../hooks/useHistory';
import Text from '../../components/Text/Text';
import Tag from '../../components/Tag/Tag';
import styles from '../../styles/spinplus/Benefits/BenefitsInfo.styles';

const BenefitsInfo = () => {
  const { points, pointsValue } = useHistory();

  return (
    <View style={styles.container} testID="benefits-info">
      <View>
        <Text style={styles.pointsText} variant="headline-large">
          {points} puntos
        </Text>
        <Tag label={`Valen $${pointsValue}`} containerStyles={styles.tag} />
      </View>
      <Image
        width={120}
        height={120}
        source={require('../../assets/spinPremiaRibbon.png')}
      />
    </View>
  );
};

export default BenefitsInfo;
