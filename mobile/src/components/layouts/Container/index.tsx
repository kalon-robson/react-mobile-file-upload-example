import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { containerStyles } from './styles';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Container: React.FC<Props> = ({ children, style }) => {
  const styles = containerStyles;

  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};
