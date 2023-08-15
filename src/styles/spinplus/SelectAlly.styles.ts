import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  cardsList: {
    marginTop: 16,
  },
  cardContainer: {
    paddingLeft: 16,
    paddingRight: 12,
    paddingVertical: 12,
    minHeight: 48,
    flexDirection: 'row',
  },
  detail: {
    flex: 1,
    marginLeft: 16,
  },
  img: {
    width: 24,
    height: 24,
    alignSelf: 'center',
  },
});

export default styles;
