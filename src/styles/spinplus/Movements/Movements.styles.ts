import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    paddingTop: 24,
  },
  movementListItem: {
    gap: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingHorizontal: 16,
  },
  leftComponent: {
    flex: 1,
  },
  pointsText: {
    fontWeight: '600',
    alignSelf: 'center',
  },
});

export default styles;
