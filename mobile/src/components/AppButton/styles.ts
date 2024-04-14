import EStyleSheet from 'react-native-extended-stylesheet';
import { spacing, colors, base } from '../../styles';

export const appButtonStyles = EStyleSheet.create({
  button: {
  },
  disabled: {
    opacity: 0.4,
  },
  icon: {
    marginRight: spacing.small,
  },
  innerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  lightText: {
    color: colors.white,
  },
  link: {
  },
  loading: {
    opacity: 0.4,
  },
  loadingContainer: {
    marginLeft: spacing.small,
  },
  primary: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: base(0.25),
    display: 'flex',
    height: base(2.75),
    justifyContent: 'center',
    paddingLeft: spacing.medium,
    paddingRight: spacing.medium,
    width: 'auto',
  },
  secondary: {
    alignItems: 'center',
    borderColor: 'lightGrey',
    borderRadius: base(0.25),
    borderWidth: 1,
    display: 'flex',
    height: base(2.75),
    justifyContent: 'center',
    paddingLeft: spacing.medium,
    paddingRight: spacing.medium,
    width: 'auto',
  },
  tertiary: {
    display: 'flex',
    height: base(2.75),
    justifyContent: 'center',
    paddingLeft: spacing.medium,
    paddingRight: spacing.medium,
    width: 'auto',
  },
});
