import EStyleSheet from 'react-native-extended-stylesheet';
import { base, colors, defaultType } from '../../../styles';

export const labelStyles = EStyleSheet.create({
  label: {
    ...defaultType,
    marginBottom: base(0.25),
  },
  requiredAsterisk: {
    color: 'red',
  },
});
