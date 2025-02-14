import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import useTheme from '../../hooks/useTheme';
import Text from '../../components/Text/Text';
import BalanceTagsContainer from './BalanceTagsContainer';
import Disclaimer from '../../components/Disclaimer/Disclaimer';
import NumericTextInput from '../../components/atoms/TextInput/NumericTextInput';
import useHistory from '../../hooks/useHistory';

type BalanceInputProps = {
  value: string;
  points: number;
  editable: boolean;
  onChange: (text: string) => void;
};

const BalanceInput = ({
  value,
  points,
  onChange,
  editable,
}: BalanceInputProps) => {
  const { points: currentPoints } = useHistory();
  const symbol = value !== '' ? '$' : '';
  const theme = useTheme();
  const [error, setError] = useState('');

  useEffect(() => {
    // TODO: Add helper to calculate points value
    if (!(Number(value) * 10 > currentPoints)) {
      setError('');
    } else {
      const maximumQuantity = points / 10;
      setError(
        `El valor máximo que puedes cambiar es $${maximumQuantity.toFixed(2)}`,
      );
    }
  }, [value]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.surface_primary },
      ]}>
      <Text variant="default-body">
        Escribe el valor de los puntos que quieres cambiar
      </Text>
      {points >= 1000 ? (
        <BalanceTagsContainer selectedValue={value} onPress={onChange} />
      ) : null}
      {points >= 1000 ? <Text variant="default-body">Otro:</Text> : null}
      <View>
        <NumericTextInput
          value={`${symbol}${value}`}
          error={error}
          editable={editable}
          label="Monto en pesos"
          onChangeText={onChange}
          bottomMessage="El valor mínimo que puedes cambiar es $20.00"
        />
      </View>
      {!editable ? (
        <Disclaimer
          backgroundColor={theme.colors.content_paused}
          iconColor={theme.colors.content_paused}
          text="Recuerda que necesitas tener mínimo $20.00 en puntos para poder cambiarlos con la marca que elegiste"
          variant="warning"
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    padding: 16,
  },
});

export default BalanceInput;
