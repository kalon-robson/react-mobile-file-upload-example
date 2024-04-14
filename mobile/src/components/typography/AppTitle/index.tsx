import { Text, TextProps } from 'react-native';
import React from 'react';
import { appTitleStyles } from './styles';

type Props = TextProps & {
  type?: 'h1' | 'h2' | 'h3';
}

export const AppTitle: React.FC<Props> = ({
  type = 'h2',
  ...props
}) => {
  const styles = appTitleStyles;

  return (
    <Text
      {...props}
      style={[styles[type], props.style]}
    />
  );
};
