import { View, Image } from 'react-native';
import Text from '../../components/Text/Text';
import styles from '../../styles/spinplus/Benefits/BenefitsInfo.styles';
import useTheme from '../../hooks/useTheme';

// TODO: Replace hardcoded text with retrieved from endpoint
export const BenefitsInfo = () => {
  const theme = useTheme();

  return (
    <View style={styles.container} testID="benefits-info">
      <View>
        <Text style={styles.pointsText} variant="headline-large">
          10, 657 puntos
        </Text>
        <View
          style={[
            styles.pointsContainer,
            { backgroundColor: theme.colors.surface_points },
          ]}>
          <Image
            width={16}
            height={16}
            source={require('../../assets/starburst.png')}
          />
          <Text
            style={[
              styles.pointsValueText,
              { color: theme.colors.content_points },
            ]}
            variant="label-extra-small-bold">
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
