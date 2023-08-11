import { View, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import styles from '../../styles/spinplus/PointsTicket/PointsTicket.styles';
import { PointsTicketCard } from './PointsTicketCard';
import useTheme from '../../hooks/useTheme';
import PointsTicketDescriptionSection from './PointsTicketDescriptionSection';
import Text from '../../components/Text/Text';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import BottomSheet from '../../components/atoms/BottomSheet';
import PointsModal from './PointsModal';
import SnackBar from '../../components/atoms/SnackBar';

type PointsTicketProps = {
  points: number;
  entity: string;
};

const PointsTicket = ({ points, entity }: PointsTicketProps) => {
  const { colors } = useTheme();
  const { navigateToBenefits } = useAppNavigation();

  const showModal = () =>
    BottomSheet.show({
      title: '¿Cómo usar un certificado de regalo?',
      children: <PointsModal />,
    });

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
          <Text
            variant="small-body-bold"
            style={styles.helpText}
            onPress={showModal}>
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
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.firstButton} onPress={showModal}>
            <Text style={styles.firstButtonLabel} variant="small-body-bold">
              Usar certificado de regalo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondButton}
            onPress={navigateToBenefits}>
            <Text style={styles.secondButtonLabel} variant="small-body-bold">
              Guardar para otro momento
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PointsTicket;
