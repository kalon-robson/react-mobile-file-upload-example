import React from 'react';
import { labelStyles } from './styles';
import { AppText } from '../../typography';

interface Props {
  label: string;
  required?: boolean;
  style?: object;
}

export const Label: React.FC<Props> = ({
  label,
  required,
  style,
}) => {
  const styles = labelStyles;

  return (
    <AppText style={[
      styles.label,
      style,
    ]}
    >
      {label}
      {required && (
        <React.Fragment>
          <AppText style={styles.requiredAsterisk}>
            {' '}
            *
          </AppText>
        </React.Fragment>
      )}
    </AppText>
  );
};
