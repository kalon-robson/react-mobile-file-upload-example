import EStyleSheet from 'react-native-extended-stylesheet';
import { colors, spacing } from '../../../styles';

export const containerStyles = EStyleSheet.create({
  container: {
    backgroundColor: colors.white,
    display: 'flex',
    paddingLeft: spacing.small,
    paddingRight: spacing.small,
  },
});
