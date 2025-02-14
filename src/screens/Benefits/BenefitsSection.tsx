import React from 'react';
import { Image, ImageProps, View } from 'react-native';
import Text from '../../components/Text/Text';
import styles from '../../styles/spinplus/Benefits/BenefitsSection.styles';

type PropsT = {
  text: string;
  title: string;
  testID: string;
  img: ImageProps;
};

const BenefitsSection = ({ title, text, img, testID }: PropsT) => {
  return (
    <View testID={testID}>
      <Text style={styles.title} variant="headline-small">
        {title}
      </Text>
      <Text style={styles.paragraph}>{text}</Text>
      <Image style={styles.img} source={img} />
    </View>
  );
};

export default BenefitsSection;
