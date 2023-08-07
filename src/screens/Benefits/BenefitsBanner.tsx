import { FlatList, Image, ImageProps } from 'react-native';
import styles from '../../styles/spinplus/Benefits/BenefitsBanner.styles';

const data = [
  require('../../assets/banner.png'),
  require('../../assets/banner.png'),
  require('../../assets/banner.png'),
  require('../../assets/banner.png'),
];

export const BenefitsBanner = () => {
  const renderItem = ({ item }: { item: ImageProps }) => (
    <Image source={item} />
  );
  return (
    <FlatList
      horizontal
      data={data}
      renderItem={renderItem}
      contentContainerStyle={styles.banner}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => `banner-${index}`}
    />
  );
};
