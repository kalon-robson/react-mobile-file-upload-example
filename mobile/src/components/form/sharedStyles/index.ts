import EStyleSheet from 'react-native-extended-stylesheet';
import { base, colors, defaultType, spacing } from '../../../styles';

export const sharedFormStyles = EStyleSheet.create({
  container: {
    marginBottom: spacing.small,
  },
  disabledInput: {
    backgroundColor: 'black',
  },
  input: {
    ...defaultType,
    borderColor: 'lightGrey',
    borderRadius: base(0.25),
    borderWidth: 1,
    display: 'flex',
    height: base(2.25),
    justifyContent: 'center',
    marginBottom: spacing.small,
    paddingLeft: spacing.small,
    paddingRight: spacing.small,
  },
});
