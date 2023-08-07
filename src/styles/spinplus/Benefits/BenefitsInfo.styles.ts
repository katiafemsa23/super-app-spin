import { StyleSheet } from 'react-native';
import { getColors } from '../..';
import { ThemeVariant } from '../../../theme/types';

const colors = getColors(true, ThemeVariant.SpinPlus);

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
    backgroundColor: colors.surface_points,
    paddingHorizontal: 12,
  },
  pointsText: {
    fontWeight: '700',
  },
  pointsValueText: {
    marginLeft: 8,
    color: colors.content_points,
    fontWeight: '600',
  },
});

export default styles;
