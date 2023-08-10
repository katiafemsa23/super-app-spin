import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import moment from 'moment';
import uuid from 'react-native-uuid';
import useTheme from '../../hooks/useTheme';
import BalanceInput from './BalanceInput';
import BalanceHeader from './BalanceHeader';
import Button from '../../components/Button/Button';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { setHistoryItem } from '../../hooks/useQuery';
import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigatorScreenProps } from '../../navigation';
import SCREENS from '../../navigation/constants';
import useHistory from '../../hooks/useHistory';

type BalanceScreenProps = StackScreenProps<
  StackNavigatorScreenProps,
  typeof SCREENS.BALANCE
>;

const BalanceScreen = ({ route }: BalanceScreenProps) => {
  const theme = useTheme();
  const { navigateToPointsTicket } = useAppNavigation();
  const { history, points } = useHistory();

  const isSufficientPoints = points >= 200;

  const [value, setValue] = useState('');

  const onChangeText = (text: string) => {
    const numericText = text.replace(/[^0-9.]/g, '');
    setValue(numericText);
  };

  const handleOnPressContinue = async () => {
    try {
      const response = await setHistoryItem({
        entity: route.params.entity,
        points: parseInt(value),
        operation: 'spent',
        transactionNo: uuid.v4().toString(),
        id: history.length + 1,
        date: moment().format('ddd MMM DD YYYY').toString(),
      });

      if (response.data) {
        navigateToPointsTicket(route.params.entity, parseInt(value));
      }
    } catch (err) {
      Alert.alert('Algo salió mal, intenta más tarde');
    }
  };

  return (
    <View
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
      <View style={styles.btnContainer}>
        <Button
          text="Continuar"
          onPress={handleOnPressContinue} // TODO: Pass data needed for Points Ticket screen
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
