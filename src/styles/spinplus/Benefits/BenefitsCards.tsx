import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    gap: 16,
    paddingVertical: 16,
    flexDirection: 'row',
  },
  cardContainer: {
    minHeight: 204,
  },
  cardTextContainer: {
    padding: 12,
  },
  img: {
    alignSelf: 'center',
  },
  cardText: {
    lineHeight: 20,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: -0.28,
  },
});

export default styles;
