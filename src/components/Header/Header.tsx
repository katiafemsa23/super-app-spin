import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
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

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.colors.surface_primary },
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
      <Text variant={'headline-small'} style={{ fontWeight: '500' }}>
        {title}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    padding: 12,
  },
});

export default Header;
