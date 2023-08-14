import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import useTheme from '../../hooks/useTheme';
import Text from '../../components/Text/Text';
import Tag from '../../components/Tag/Tag';
import useHistory from '../../hooks/useHistory';

const BalanceHeader = () => {
  const theme = useTheme();
  const { points, pointsValue } = useHistory();

  return (
    <View
      testID="balance-header"
      style={[
        styles.container,
        { borderBottomColor: theme.colors.surface_tertiary },
      ]}>
      <View style={styles.titleContainer}>
        <Text
          variant="headline-large"
          style={styles.title}
          testID="points-text">
          {points} puntos
        </Text>
        <Image
          width={24}
          height={24}
          source={require('../../assets/alert-info.png')}
        />
      </View>
      <Tag label={`Valen $${pointsValue}`} testID="amount-value" />
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
