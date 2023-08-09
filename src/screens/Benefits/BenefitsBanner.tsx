import { Image, ScrollView } from 'react-native';
import styles from '../../styles/spinplus/Benefits/BenefitsBanner.styles';

const data = [
  require('../../assets/banner.png'),
  require('../../assets/banner.png'),
  require('../../assets/banner.png'),
  require('../../assets/banner.png'),
];

export const BenefitsBanner = () => (
  <ScrollView
    horizontal
    style={styles.container}
    contentContainerStyle={styles.banner}
    showsHorizontalScrollIndicator={false}>
    {data.map((image, index) => (
      <Image source={image} key={`img-${index}`} />
    ))}
  </ScrollView>
);
