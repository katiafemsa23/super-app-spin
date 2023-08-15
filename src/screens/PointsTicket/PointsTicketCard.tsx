import React from 'react';
import { Image, View } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../../components/Card/Card';
import Text from '../../components/Text/Text';
import SnackBar from '../../components/atoms/SnackBar';
import styles from '../../styles/spinplus/PointsTicket/PointsTicket.styles';

const placeholderImage = require('../../assets/oxxo.png');

type PropsT = {
  giftCode: string;
  entity: string;
};

export const PointsTicketCard = ({ entity, giftCode }: PropsT) => {
  const copyToClipboard = () => {
    Clipboard.setString(giftCode);

    SnackBar.show({
      text: 'Copied to clipboard!',
      variant: 'info',
      withIcon: true,
      duration: 5000,
    });
  };

  return (
    <Card style={styles.cardContainer} testID="points-ticket-card">
      <View style={styles.imageContainer}>
        <Image source={placeholderImage} style={styles.image} />
      </View>
      <Text variant="headline-medium" style={styles.entityText}>
        {entity}
      </Text>
      <Text variant="small-body" style={styles.cardDescription}>
        Toca el ícono para copiar el certificado de regalo o escríbelo desde la
        app o página web de Volaris
      </Text>
      <View style={styles.giftCodeContainer}>
        <View>
          <Text variant="label-extra-small" style={styles.giftCodeLabel}>
            Certificado de regalo
          </Text>
          <Text
            variant="label-default-bold"
            style={styles.giftCode}
            selectable
            testID="gift-certificate">
            {giftCode}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.giftCodeIconContainer}
          onPress={copyToClipboard}>
          <Image source={require('../../assets/copy-icon.png')} />
        </TouchableOpacity>
      </View>
    </Card>
  );
};
