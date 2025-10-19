import React, { useState } from 'react';
import {
  ActivityIndicator,
  ImageProps,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { Button, Text } from '@ui-kitten/components';
import { sizeStyles, styles } from './base-button-styles';
import { IBaseButton } from './base-button-model';
import { backgroundMap, textColorMap } from './button-varient-style';

export const BaseButton: React.FC<IBaseButton> = ({
  onPress,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  selected = false,
  loading = false,
  icon,
  iconPlacement = 'before',
  children,
  buttonColor,
  textColor,
  ...touchableProps
}) => {
  const [pressed, setPressed] = useState(false);

  /** 🔹 Compute background color */
  const getBackgroundColor = (): string => {
    if (buttonColor) return buttonColor;
    const state = disabled ? 'disabled' : selected || pressed ? 'active' : 'normal';
    return backgroundMap[variant]?.[state] ?? '#F2F2F2';
  };

  /** 🔹 Compute text color */
  const getTextColor = (): string => {
    if (textColor) return textColor;
    const state = disabled ? 'disabled' : selected || pressed ? 'active' : 'normal';
    return textColorMap[variant]?.[state] ?? '#FFF';
  };

  const backgroundColor = getBackgroundColor();
  const textColorFinal = getTextColor();
  const sizeStyle = sizeStyles[size];

  /** 🔹 Clone icon safely */
  const renderIcon = (iconElement?: React.ReactElement<any>): React.ReactElement | undefined => {
    if (!iconElement) return undefined;
    return React.cloneElement(iconElement as React.ReactElement<any>, {
      fill: textColorFinal,
      color: textColorFinal,
      style: [{ marginHorizontal: 4 }, (iconElement as any).props?.style],
    } as any);
  };

  /** 🔹 Icon logic */
const accessoryLeft = loading
  ? (props?: Partial<ImageProps>) => <ActivityIndicator color={textColorFinal} />
  : icon && iconPlacement === 'before'
  ? (props?: Partial<ImageProps>) => <>{renderIcon(icon)}</>
  : undefined;

const accessoryRight =
  icon && iconPlacement === 'after'
    ? (props?: Partial<ImageProps>) => <>{renderIcon(icon)}</>
    : undefined;
    
    const containerStyle = [
  styles.base,
  sizeStyle,
  fullWidth && styles.fullWidth,
  { backgroundColor, borderColor: backgroundColor, borderWidth: 1 },
];
  return (
    <Button
      {...touchableProps}
      onPress={onPress}
      disabled={disabled || loading}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
     style={containerStyle}

      accessoryLeft={accessoryLeft}
      accessoryRight={accessoryRight}
    >
      {(evaProps: any) => (
        <Text
          {...evaProps}
          style={[styles.text, { color: textColorFinal }]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {children}
        </Text>
      )}
    </Button>
  );
};
