import React from 'react';
import { View, Image, StyleSheet, ViewStyle } from 'react-native';
import useTheme from '../../hooks/useTheme';
import Text from '../Text/Text';

type TagProps = {
  label: string;
  testID: string;
  containerStyles?: ViewStyle;
};

function Tag({ label, containerStyles, testID }: TagProps) {
  const theme = useTheme();

  return (
    <View
      testID={testID}
      style={[
        styles.pointsContainer,
        containerStyles,
        { backgroundColor: theme.colors.surface_points },
      ]}>
      <Image
        width={16}
        height={16}
        source={require('../../assets/starburst.png')}
      />
      <Text
        style={[styles.pointsValueText, { color: theme.colors.content_points }]}
        variant="label-extra-small-bold">
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pointsContainer: {
    borderRadius: 12,
    flexDirection: 'row',
    paddingVertical: 4,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
  },
  pointsText: {
    fontWeight: '700',
  },
  pointsValueText: {
    marginLeft: 8,
    fontWeight: '600',
  },
});

export default Tag;
