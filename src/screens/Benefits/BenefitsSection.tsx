import { Image, ImageProps, View } from 'react-native';
import Text from '../../components/Text/Text';
import styles from '../../styles/spinplus/Benefits/BenefitsSection.styles';

type PropsT = {
  text: string;
  title: string;
  img: ImageProps;
};
export const BenefitsSection = ({ title, text, img }: PropsT) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} variant="headline-small">
        {title}
      </Text>
      <Text style={styles.paragraph}>{text}</Text>
      <Image style={styles.img} source={img} />
    </View>
  );
};
