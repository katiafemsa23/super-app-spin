import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingBottom: 8,
    borderColor: 'rgba(5, 5, 61, 0.08)',
    paddingTop: 32,
    marginBottom: 25.35,
  },
  entityContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    top: -72,
    width: '100%',
    position: 'absolute',
  },
  firstSectionContainer: {
    padding: 16,
  },
  image: {
    height: 72,
    width: 72,
    alignSelf: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 50,
    backgroundColor: '#FFF',
  },
  entityText: {
    margin: 8,
    fontWeight: '500',
    textAlign: 'center',
  },
  entityCardSubtitle: {
    backgroundColor: '#F5F5F7',
    width: 280,
    padding: 10,
    textAlign: 'center',
    borderRadius: 16,
    overflow: 'hidden',
  },
  symbol: {
    fontWeight: 'bold',
    color: '#1723D3',
    marginRight: 4,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  valueLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  value: {
    marginLeft: 12,
    fontWeight: '600',
  },
  transactionContainer: {
    borderTopWidth: 1,
    borderColor: 'rgba(5, 5, 61, 0.08)',
    padding: 16,
  },
});

export default styles;
