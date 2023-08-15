import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Text from '../Text/Text';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import useTheme from '../../hooks/useTheme';

type HeaderProps = {
  showGoBackButton?: boolean;
  title: string;
};

const Header = ({ title, showGoBackButton }: HeaderProps) => {
  const theme = useTheme();
  const { goBack } = useAppNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + 20,
          height: 64 + insets.top,
          backgroundColor: theme.colors.surface_primary,
        },
      ]}>
      {showGoBackButton ? (
        <TouchableOpacity style={styles.iconContainer} onPress={goBack}>
          <Image
            source={require('../../assets/chevron-left-header.png')}
            height={24}
            width={24}
          />
        </TouchableOpacity>
      ) : (
        <View style={{ paddingRight: 8 }} />
      )}
      <Text variant={'headline-small'} style={styles.text}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    paddingHorizontal: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    padding: 12,
  },
  text: {
    fontWeight: '500',
  },
});

export default Header;
