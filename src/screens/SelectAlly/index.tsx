import React from 'react';
import { View, FlatList, ImageSourcePropType } from 'react-native';
import useTheme from '../../hooks/useTheme';
import Text from '../../components/Text/Text';
import { SelectAllyItem } from './SelectAllyItem';
import styles from '../../styles/spinplus/SelectAlly.styles';
import { allyData } from './dummy';

export type AllyItemT = {
  title: string;
  img: ImageSourcePropType;
  description: string;
};

export const SelectAlly = () => {
  const theme = useTheme();

  const renderItem = ({ item }: { item: AllyItemT }) => (
    <SelectAllyItem detailColor={theme.colors.content_secondary} {...item} />
  );

  return (
    <View
      testID="select-ally-screen"
      style={[
        styles.container,
        { backgroundColor: theme.colors.surface_primary },
      ]}>
      <Text variant="default-body">
        Elige la marca aliada en la que quieres usar tus puntos
      </Text>
      <FlatList
        data={allyData}
        testID="allies-list"
        renderItem={renderItem}
        contentContainerStyle={styles.cardsList}
        keyExtractor={(item, index) => `${item}-${index}`}
      />
    </View>
  );
};
