import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 84,
    borderWidth: 1,
    borderRadius: 8,
    paddingBottom: 8,
    borderColor: 'rgba(5, 5, 61, 0.08)',
    paddingTop: 32,
    marginBottom: 25.35,
  },
  imageContainer: {
    top: -72,
    width: '100%',
    position: 'absolute',
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
  entityContainer: {
    alignItems: 'center',
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
  cardDescription: {
    textAlign: 'justify',
    fontSize: 14,
    letterSpacing: -0.28,
    margin: 8,
  },
  giftCodeContainer: {
    backgroundColor: '#F5F5F7',
    margin: 8,
    paddingLeft: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  giftCodeLabel: {
    color: '#373764',
    marginBottom: 4,
  },
  giftCode: {
    fontWeight: '600',
  },
  greenBackground: {
    width: '100%',
    height: 180,
    backgroundColor: '#087D6F',
    position: 'absolute',
  },
  firsSectionContainer: {
    paddingHorizontal: 16,
  },
  valueLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  value: {
    fontWeight: '600',
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    color: '#373764',
  },
  transactionNumberContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 16,
    borderColor: '#E6E6EC',
  },
});

export default styles;
