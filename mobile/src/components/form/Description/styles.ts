import EStyleSheet from 'react-native-extended-stylesheet';
import { defaultType, fontWeights } from '../../../styles';

export const labelStyles = EStyleSheet.create({
  description: {
    ...defaultType,
    fontFamily: 'lightGrey',
  },
});
