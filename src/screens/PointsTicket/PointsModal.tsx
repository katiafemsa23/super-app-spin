import { Image, View } from 'react-native';
import React from 'react';
import Text from '../../components/Text/Text';
import styles from '../../styles/spinplus/PointsTicket/PointsTicket.styles';

const PointsModal = () => {
  return (
    <View>
      <View style={styles.listItemContainer}>
        <Text variant="default-body">
          1. Copia tu certificado de regalo de Spin Premia
        </Text>
      </View>
      <View style={styles.listItemContainer}>
        <Text variant="default-body">
          2. Entra a la app o página web de Volaris
        </Text>
      </View>
      <View style={styles.listItemContainer}>
        <Text variant="default-body">3. Elige tu próximo destino y vuelos</Text>
      </View>
      <View style={[styles.listItemContainer, { marginBottom: 24 }]}>
        <Text variant="default-body">
          4. Antes de terminar tu compra, pega o escribe el certificado de
          regalo al elegir tu método de pago
        </Text>
      </View>
      <Image
        source={require('../../assets/placeholder-media.png')}
        style={styles.cardImage}
      />
    </View>
  );
};

export default PointsModal;
