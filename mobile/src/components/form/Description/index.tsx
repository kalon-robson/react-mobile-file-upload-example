import React from 'react';
import { labelStyles } from './styles';
import { AppText } from '../../typography';

interface Props {
  description: string;
}

export const Description: React.FC<Props> = ({
  description,
}) => {
  const styles = labelStyles;

  return (
    <AppText style={styles.description}>
      {description}
    </AppText>
  );
};
