import React from 'react';
import { View } from 'react-native';
import { styles, elevationMap, backgroundMap } from './base-card-style';
import { IBaseCard } from './base-card-model';

export const BaseCard: React.FC<IBaseCard> = ({
  elevation = 'no-shadow',
  background = 'white',
  padding = 16,
  style,
  children,
  header,
  footer,
  fullWidth = true,
}) => {
  const bgColor = backgroundMap[background] ?? '#FFFFFF';
  const shadow = elevationMap[elevation] ?? elevationMap['no-shadow'];

  return (
    <View
      style={[
        styles.base,
        { backgroundColor: bgColor, padding, width: fullWidth ? '100%' : undefined },
        shadow,
        style,
      ]}
    >
      {header && <View style={styles.header}>{header}</View>}
      {children}
      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
};
