import { Text, TextProps } from 'react-native';
import React from 'react';
import { appTextStyles } from './styles';

export const AppText: React.FC<TextProps> = ({
  style,
  ...props
}) => {
  const styles = appTextStyles;

  return (
    <Text
      {...props}
      style={[styles.text, style]}
    />
  );
};
