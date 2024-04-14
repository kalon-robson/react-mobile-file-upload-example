import { base } from '../base';
import { colors } from '../colors';


export const fontWeights = {
  bold: 'OpenSans_700Bold',
  regular: 'OpenSans_400Regular',
  semiBold: 'OpenSans_600SemiBold',
};

export const defaultType = {
  color: colors.black,
  fontFamily: fontWeights.regular,
  fontSize: 16,
};

export const h1 = {
  color: colors.black,
  fontFamily: fontWeights.bold,
  fontSize: base(1.8),
  fontWeight: 'bold',
  lineHeight: base(1.8 * 1.25),
};

export const h2 = {
  color: colors.black,
  fontFamily: fontWeights.bold,
  fontSize: base(1.4),
  fontWeight: 'semibold',
  lineHeight: base(1.4 * 1.25),
};

export const h3 = {
  color: colors.black,
  fontFamily: fontWeights.bold,
  fontSize: base(1),
  fontWeight: 'semibold',
  lineHeight: base(1 * 1.25),
};

export const fonts = {
  default: defaultType,
  h1,
  h2,
  h3,
};
