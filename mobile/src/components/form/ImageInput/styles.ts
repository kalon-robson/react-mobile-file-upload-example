import EStyleSheet from 'react-native-extended-stylesheet';
import { base, colors, spacing } from '../../../styles';

export const imageInputStyles = EStyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.medium,
  },
  cameraButton: {
    flex: 1,
    height: base(3),
  },
  fileUploadButton: {
    flex: 1,
    height: base(3),
    marginRight: spacing.small,
  },
  multipleImage: {
    height: base(10),
    marginBottom: spacing.small,
    marginRight: spacing.small,
    width: base(10),
  },
  multipleImagesContainer: {
    background: colors.white,
  },
});
