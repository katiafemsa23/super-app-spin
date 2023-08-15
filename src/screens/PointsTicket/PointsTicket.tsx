import React, { useEffect } from 'react';
import { View, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import useTheme from '../../hooks/useTheme';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import styles from '../../styles/spinplus/PointsTicket/PointsTicket.styles';
import { PointsTicketCard } from './PointsTicketCard';
import SnackBar from '../../components/atoms/SnackBar';
import PointsTicketDescriptionSection from './PointsTicketDescriptionSection';
import Text from '../../components/Text/Text';
import BottomSheet from '../../components/atoms/BottomSheet';
import PointsModal from './PointsModal';

import { HistoryItem } from '../../types';
import Button from '../../components/Button/Button';

type PointsTicketProps = {
  item: HistoryItem;
};

const PointsTicket = ({ item }: PointsTicketProps) => {
  const { points, entity, transactionNo, date } = item;
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
      <ScrollView testID="points-ticket">
        <View style={styles.greenBackground} />
        <View style={styles.firsSectionContainer}>
          <PointsTicketCard entity={entity} giftCode="42738499092812000" />
          <Text
            variant="small-body-bold"
            style={styles.helpText}
            onPress={showModal}>
            ¿Cómo usar mi certificado de regalo?
          </Text>
          <PointsTicketDescriptionSection points={points} date={date} />
        </View>
        <View style={styles.transactionNumberContainer}>
          <Text variant="label-default" style={styles.transactionNumberLabel}>
            Número de transacción
          </Text>
          <Text variant="label-default" style={styles.transactionNumber}>
            {transactionNo}
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            text="Usar certificado de regalo"
            onPress={showModal}
            testID="use-certificate-button"
            styleText={styles.buttonLabel}
          />
          <Button
            variant="secondary"
            onPress={navigateToBenefits}
            styleText={styles.buttonLabel}
            testID="save-for-later-button"
            text="Guardar para otro momento"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PointsTicket;
