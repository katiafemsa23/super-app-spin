import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pointsContainer: {
    flexDirection: 'row',
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 8,
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

export default styles;
