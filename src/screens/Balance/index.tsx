import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import uuid from 'react-native-uuid';
import useTheme from '../../hooks/useTheme';
import useHistory from '../../hooks/useHistory';
import { setHistoryItem } from '../../hooks/useQuery';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { DateOptionsProps, formatStringDate } from '../../utils';
import { StackNavigatorScreenProps } from '../../navigation';
import BalanceInput from './BalanceInput';
import BalanceHeader from './BalanceHeader';
import Button from '../../components/Button/Button';
import SCREENS from '../../navigation/constants';

type BalanceScreenProps = StackScreenProps<
  StackNavigatorScreenProps,
  typeof SCREENS.BALANCE
>;

const dateOptions: DateOptionsProps = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  weekday: 'short',
};

const BalanceScreen = ({ route }: BalanceScreenProps) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const { navigateToPointsTicket } = useAppNavigation();
  const { history, points, addToHistory } = useHistory();

  const isSufficientPoints = points >= 200;

  const [value, setValue] = useState('');

  const onChangeText = (text: string) => {
    const numericText = text.replace(/[^0-9.]/g, '');
    setValue(numericText);
  };

  const handleOnPressContinue = async () => {
    const date = formatStringDate(new Date().toString(), dateOptions);

    try {
      const historyItem = {
        date,
        id: history.length + 1,
        operation: 'spent' as const,
        entity: route.params.entity,
        points: parseInt(value) * 10,
        transactionNo: uuid.v4().toString(),
      };

      const response = await setHistoryItem(historyItem);
      addToHistory(historyItem);

      if (response.data) {
        navigateToPointsTicket(response.data);
      }
    } catch (err) {
      Alert.alert('Algo salió mal, intenta más tarde');
    }
  };

  return (
    <View
      testID="balance-screen"
      style={[
        styles.container,
        { backgroundColor: theme.colors.surface_primary },
      ]}>
      <BalanceHeader />
      <BalanceInput
        value={value}
        points={points}
        onChange={onChangeText}
        editable={isSufficientPoints}
      />
      <View style={[styles.btnContainer, { marginBottom: insets.bottom }]}>
        <Button
          text="Continuar"
          onPress={handleOnPressContinue}
          disabled={!isSufficientPoints || value === ''}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: '700',
  },
  btnContainer: {
    bottom: 0,
    padding: 16,
    width: '100%',
    position: 'absolute',
  },
});

export default BalanceScreen;
