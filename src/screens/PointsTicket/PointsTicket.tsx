import { View, Text, Modal, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/spinplus/PointsTicket/PointsTicket.styles';
import { PointsTicketCard } from './PointsTicketCard';
import useTheme from '../../hooks/useTheme';
import PointsTicketDescriptionSection from './PointsTicketDescriptionSection';

const PointsTicket = () => {
  const { colors } = useTheme();
  const [feedBackModal, setFeedBackModal] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log('Entro');
      setFeedBackModal(false);
    }, 5000);
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: colors.surface_primary, flex: 1 }}>
      <View style={styles.greenBackground} />
      <View style={styles.firsSectionContainer}>
        <PointsTicketCard entity="Oxxo" giftCode="42738499092812000" />
        <PointsTicketDescriptionSection points={300} />
      </View>
      <View style={styles.transactionNumberContainer}>
        <Text>Número de transacción</Text>
        <Text>5dced89c-2b6e-4a1c-a715-c19b0a51</Text>
      </View>
      <Modal visible={feedBackModal} transparent>
        <SafeAreaView>
          <Text>Hola</Text>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default PointsTicket;
