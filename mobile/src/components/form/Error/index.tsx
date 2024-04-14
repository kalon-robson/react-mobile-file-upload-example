import React from 'react';
import { View } from 'react-native';
import { errorStyles } from './styles';
import { AppText } from '../../typography';

interface Props {
  message: string;
}

export const Error: React.FC<Props> = ({
  message,
}) => {
  const styles = errorStyles;

  return (
    <View>
      <AppText style={styles.errorMessage}>{message}</AppText>
    </View>
  );
};
