import { Image, StyleSheet, View } from 'react-native';
import useTheme from '../../hooks/useTheme';
import Text from '../../components/Text/Text';
import Tag from '../../components/Tag/Tag';

const BalanceHeader = () => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.container,
        { borderBottomColor: theme.colors.surface_tertiary },
      ]}>
      <View style={styles.titleContainer}>
        <Text variant="headline-large" style={styles.title}>
          90 puntos{' '}
          {/* TODO: Pass correct data from state when state management is ready */}
        </Text>
        <Image
          width={24}
          height={24}
          source={require('../../assets/alert-info.png')}
        />
      </View>
      <Tag label="Valen $9.00" />
      {/* TODO: Pass correct data from state when state management is ready */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    padding: 16,
    borderBottomWidth: 1,
  },
  titleContainer: {
    gap: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontWeight: '700',
  },
});

export default BalanceHeader;
