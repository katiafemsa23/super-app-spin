import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import useTheme from '../../hooks/useTheme';
import Text from '../../components/Text/Text';

type BalanceTagProps = {
  value: string;
  points: string;
  selected: boolean;
  onPress: (text: string) => void;
  containerStyles?: ViewStyle;
};

const BalanceTag = ({
  value,
  points,
  selected,
  onPress,
  containerStyles,
}: BalanceTagProps) => {
  const theme = useTheme();
  const color = !selected
    ? theme.colors.content_secondary
    : theme.colors.ui_active;
  const backgroundColor = !selected
    ? theme.colors.surface_secondary
    : theme.colors.surface_informational;

  const handleOnPress = () => onPress(value.toString());

  return (
    <View style={containerStyles}>
      <TouchableOpacity
        onPress={handleOnPress}
        style={[
          styles.tag,
          {
            backgroundColor,
          },
        ]}>
        <Text
          variant="default-body-bold"
          style={[styles.tagText, { color }]}>{`$${value}`}</Text>
      </TouchableOpacity>
      <Text
        variant="extra-small-body"
        style={[
          styles.tagDetail,
          {
            color: theme.colors.content_tertiary,
          },
        ]}>{`${points} puntos`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    padding: 12,
    borderRadius: 8,
    maxWidth: '100%',
  },
  tagText: {
    marginBottom: 4,
    fontWeight: '600',
    textAlign: 'center',
  },
  tagDetail: {
    textAlign: 'center',
  },
});

export default BalanceTag;
