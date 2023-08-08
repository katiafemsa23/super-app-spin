import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

const tabIcons = [
  {
    active: require('../../assets/TabBarIcons/home-active.png'),
    inactive: require('../../assets/TabBarIcons/home-inactive.png'),
  },
  {
    active: require('../../assets/TabBarIcons/loyalty-active.png'),
    inactive: require('../../assets/TabBarIcons/loyalty-inactive.png'),
  },
  {
    active: require('../../assets/TabBarIcons/wallet-active.png'),
    inactive: require('../../assets/TabBarIcons/wallet-inactive.png'),
  },
  {
    active: require('../../assets/TabBarIcons/profile-active.png'),
    inactive: require('../../assets/TabBarIcons/profile-inactive.png'),
  },
];

const BottomTabs = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name, {merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabContainer}
            key={index}>
            <View style={styles.tabIconContainer}>
              <Image
                source={tabIcons[index][isFocused ? 'active' : 'inactive']}
                height={24}
                width={24}
              />
            </View>
            <Text style={styles.label}>
              {typeof label === 'string' ? label : ''}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    borderTopColor: 'rgba(5, 5, 61, 0.04)',
  },
  label: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    lineHeight: 16,
    marginTop: 4,
    color: '#05053D',
    letterSpacing: -0.24,
    fontSize: 12,
  },
  tabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIconContainer: {
    paddingVertical: 4,
    paddingHorizontal: 20,
  },
});

export default BottomTabs;
