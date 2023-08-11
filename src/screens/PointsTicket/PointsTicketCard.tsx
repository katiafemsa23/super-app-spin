import React from 'react';
import { Image, View } from 'react-native';
import Card from '../../components/Card/Card';
import styles from '../../styles/spinplus/PointsTicket/PointsTicket.styles';
import Text from '../../components/Text/Text';
import { TouchableOpacity } from 'react-native-gesture-handler';

const placeholderImage = require('../../assets/oxxo.png');

type PropsT = {
  giftCode: string;
  entity: string;
};

export const PointsTicketCard = ({ entity, giftCode }: PropsT) => {
  return (
    <Card style={styles.cardContainer}>
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
          <Text variant="label-default-bold" style={styles.giftCode} selectable>
            {giftCode}
          </Text>
        </View>
        <TouchableOpacity style={styles.giftCodeIconContainer}>
          <Image source={require('../../assets/copy-icon.png')} />
        </TouchableOpacity>
      </View>
    </Card>
  );
};
