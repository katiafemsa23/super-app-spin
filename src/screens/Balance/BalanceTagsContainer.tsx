import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import BalanceTag from './BalanceTag';

type BalanceTagsProps = {
  selectedValue: string;
  onPress: (text: string) => void;
};

const BalanceTagsContainer = ({ onPress, selectedValue }: BalanceTagsProps) => {
  // TODO: Remove hardcoded points when state management is ready
  const points = 10000;
  const { width } = useWindowDimensions();
  const cardWith = width / 2 - 24;

  const data: { value: string; points: string }[][] = [
    [
      { value: '50', points: '500' },
      { value: '100', points: '1,000' },
    ],
  ];

  if (points >= 10000) {
    data.push([
      { value: '200', points: '2,000' },
      { value: '500', points: '5,000' },
    ]);
  }

  return (
    <View style={styles.tagsContainer}>
      {data.map((item, index) => (
        <View key={`row-${index}`} style={styles.tagsRow}>
          {item.map(tag => (
            <BalanceTag
              key={tag.value}
              points={tag.points}
              value={tag.value}
              onPress={onPress}
              containerStyles={{ width: cardWith }}
              selected={selectedValue === tag.value}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tagsContainer: {
    gap: 16,
    marginBottom: 16,
  },
  tagsRow: {
    gap: 16,
    flexDirection: 'row',
  },
});

export default BalanceTagsContainer;
