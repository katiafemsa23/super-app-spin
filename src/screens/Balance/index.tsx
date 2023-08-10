import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import useTheme from '../../hooks/useTheme';
import BalanceInput from './BalanceInput';
import BalanceHeader from './BalanceHeader';
import Button from '../../components/Button/Button';
import { useAppNavigation } from '../../hooks/useAppNavigation';

const BalanceScreen = () => {
  const theme = useTheme();
  const { navigateToPointsTicket } = useAppNavigation();

  // TODO: Remove hardcoded points when state management is ready
  const points = 1000;
  const isSufficientPoints = points >= 200;

  const [value, setValue] = useState('');

  const onChangeText = (text: string) => setValue(text);

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
          onPress={navigateToPointsTicket} // TODO: Pass data needed for Points Ticket screen
          disabled={!isSufficientPoints || value === ''}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
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
