import React, { useState } from 'react';
import { Input } from '@ui-kitten/components';
import { View, ImageProps, Text } from 'react-native';
import { IBaseInput } from './base-input-model';
import { sizeStyles, STATUS_STYLES, styles } from './base-input-style';

export const BaseInput: React.FC<IBaseInput> = ({
  id,
  label,
  size = 'medium',
  style,
  textStyle,
  accessoryLeft,
  accessoryRight,
  status = 'default',
  caption,
  placeholder,
  ...props
}) => {
  const { wrapper, inputPadding } = sizeStyles[size];
  const [isFocused, setIsFocused] = useState(false);

  /** 🔹 Detect “error” state */
  const isError = status === 'error' || !!caption;

  /** 🔹 Choose base style from map */
  let dynamicStyle = STATUS_STYLES[status] ?? STATUS_STYLES.default;

  /** 🔹 Override when focused */
  if (isFocused && !isError && status !== 'disabled') {
    dynamicStyle = STATUS_STYLES.hover;
  }

  /** 🔹 Override if error present */
  if (isError) {
    dynamicStyle = STATUS_STYLES.error;
  }

  /** 🔹 Icon Rendering Helper */
  const renderAccessory = (
    Accessory: IBaseInput['accessoryLeft'] | IBaseInput['accessoryRight'],
    position: 'left' | 'right',
  ) => {
    if (!Accessory) return undefined;
    return (evaProps?: Partial<ImageProps>) => (
      <View
        style={{
          marginRight: position === 'left' ? wrapper.gap : 0,
          marginLeft: position === 'right' ? wrapper.gap : 0,
        }}
      >
        {typeof Accessory === 'function' ? Accessory(evaProps) : Accessory}
      </View>
    );
  };

  return (
    <View style={[styles.wrapper, wrapper]}>
      {label && (
        <Text
          style={[styles.label, { color: dynamicStyle.textColor }, textStyle]}
        >
          {label}
        </Text>
      )}
      <Input
        id={id}
        {...props}
        placeholder={placeholder}
        placeholderTextColor={dynamicStyle.textColor}
        style={[
          styles.input,
          inputPadding,
          {
            borderColor: dynamicStyle.borderColor,
            backgroundColor: dynamicStyle.backgroundColor,
          },
          style,
        ]}
        textStyle={[styles.text, textStyle, { color: dynamicStyle.textColor }]}
        accessoryLeft={renderAccessory(accessoryLeft, 'left')}
        accessoryRight={renderAccessory(accessoryRight, 'right')}
        caption={caption}
        status={isError ? 'danger' : 'basic'}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default BaseInput;
