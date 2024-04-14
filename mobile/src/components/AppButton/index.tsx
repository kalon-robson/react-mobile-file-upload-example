import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { appButtonStyles } from './styles';
import { AppText } from '../typography';
import { colors } from '../../styles';

interface Props {
  children?: React.ReactNode,
  disabled?: boolean,
  loading?: boolean,
  onPress?: () => void
  style?: object,
  type?: 'primary' | 'secondary' | 'tertiary' | 'link',
  iconColor?: string,
  textStyle?: object,
}

export const AppButton: React.FC<Props> = ({
  children,
  disabled = false,
  loading = false,
  onPress,
  style,
  type = 'primary',
  textStyle,
}) => {
  const styles = appButtonStyles;

  const handlePress = () => {
    if (!loading && !disabled) {
      onPress?.();
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        styles[type],
        loading && styles.loading,
        disabled && styles.disabled,
        style,
      ]}
      onPress={handlePress}
    >
      <View style={styles.innerContainer}>
        <AppText
          style={[
            type === 'primary' && styles.lightText,
            textStyle,
          ]}
        >
          {children}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};
