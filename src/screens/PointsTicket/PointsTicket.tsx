import { View, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import styles from '../../styles/spinplus/PointsTicket/PointsTicket.styles';
import { PointsTicketCard } from './PointsTicketCard';
import useTheme from '../../hooks/useTheme';
import PointsTicketDescriptionSection from './PointsTicketDescriptionSection';
import Text from '../../components/Text/Text';
import { ScrollView } from 'react-native-gesture-handler';
import SnackBar from '../../components/atoms/SnackBar';

type PointsTicketProps = {
  points: number;
  entity: string;
};

const PointsTicket = ({ points, entity }: PointsTicketProps) => {
  const { colors } = useTheme();

  useEffect(() => {
    SnackBar.show({
      text: '¡Listo! Cambiaste tus puntos',
      variant: 'info',
      withIcon: true,
      duration: 5000,
    });
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: colors.surface_primary, flex: 1 }}>
      <ScrollView>
        <View style={styles.greenBackground} />
        <View style={styles.firsSectionContainer}>
          <PointsTicketCard entity={entity} giftCode="42738499092812000" />
          <Text variant="small-body-bold" style={styles.helpText}>
            ¿Cómo usar mi certificado de regalo?
          </Text>
          <PointsTicketDescriptionSection points={points} />
        </View>
        <View style={styles.transactionNumberContainer}>
          <Text variant="label-default" style={styles.transactionNumberLabel}>
            Número de transacción
          </Text>
          <Text variant="label-default" style={styles.transactionNumber}>
            5dced89c-2b6e-4a1c-a715-c19b0a51
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PointsTicket;
