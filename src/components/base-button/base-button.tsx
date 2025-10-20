import React, { useState } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { IBaseButton } from './base-button-model';
import { styles, sizeStyles } from './base-button-styles';
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
  style,
  textStyle,
  iconStyle,
  ...touchableProps
}) => {
  const [pressed, setPressed] = useState(false);

  const state = disabled ? 'disabled' : selected || pressed ? 'active' : 'normal';

  const backgroundColor = buttonColor ?? backgroundMap[variant][state];
  const textColorFinal = textColor ?? textColorMap[variant][state];
  const sizeStyle = sizeStyles[size];

  const renderIcon = () => {
    if (loading) return <ActivityIndicator color={textColorFinal} />;
    if (!icon) return null;

    const el = icon as React.ReactElement<any>;
    return React.cloneElement(el, {
      style: [styles.icon, iconStyle, el.props?.style],
      color: textColorFinal,
      fill: textColorFinal,
    });
  };

  const content = (
    <View style={styles.row}>
      {icon && iconPlacement === 'before' && renderIcon()}
      <Text
        style={[
          styles.text,
          { color: textColorFinal, fontSize: sizeStyle.textSize },
          textStyle,
        ]}
        numberOfLines={1}
      >
        {children}
      </Text>
      {icon && iconPlacement === 'after' && renderIcon()}
    </View>
  );

  return (
    <TouchableWithoutFeedback
      {...touchableProps}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      disabled={disabled || loading}
    >
      <View
        style={[
          styles.base,
          {
            backgroundColor,
            borderColor: backgroundColor,
            paddingVertical: sizeStyle.paddingVertical,
            paddingHorizontal: sizeStyle.paddingHorizontal,
          },
          fullWidth && styles.fullWidth,
          style,
        ]}
      >
        {content}
      </View>
    </TouchableWithoutFeedback>
  );
};
