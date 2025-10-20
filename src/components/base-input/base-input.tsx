import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ImageProps,
} from 'react-native';
import { IBaseInput } from './base-input-model';
import { styles, sizeStyles, STATUS_STYLES } from './base-input-style';

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
  editable = true,
  value,
  onChangeText,
  ...props
}) => {
  const { wrapper, inputPadding } = sizeStyles[size];
  const [isFocused, setIsFocused] = useState(false);

  /** 🔹 Determine state */
  const isError = status === 'error' || !!caption;
  const isDisabled = status === 'disabled' || !editable;

  let dynamicStyle = STATUS_STYLES[status] ?? STATUS_STYLES.default;

  if (isFocused && !isError && !isDisabled) {
    dynamicStyle = STATUS_STYLES.hover;
  }

  if (isError) {
    dynamicStyle = STATUS_STYLES.error;
  }

  /** 🔹 Render accessory icons */
  const renderAccessory = (
    Accessory: IBaseInput['accessoryLeft'] | IBaseInput['accessoryRight'],
    position: 'left' | 'right',
  ) => {
    if (!Accessory) return null;

    const el =
      typeof Accessory === 'function' ? (
        Accessory({} as Partial<ImageProps>)
      ) : (
        Accessory
      );

    return (
      <View
        style={{
          marginRight: position === 'left' ? wrapper.gap : 0,
          marginLeft: position === 'right' ? wrapper.gap : 0,
        }}
      >
        {el}
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

      <View
        style={[
          styles.inputContainer,
          inputPadding,
          {
            borderColor: dynamicStyle.borderColor,
            backgroundColor: dynamicStyle.backgroundColor,
            opacity: isDisabled ? 0.6 : 1,
          },
          style,
        ]}
      >
        {renderAccessory(accessoryLeft, 'left')}

        <TextInput
          id={id}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={dynamicStyle.textColor}
          editable={!isDisabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={onChangeText}
          style={[
            styles.text,
            { color: dynamicStyle.textColor, flex: 1 },
            textStyle,
          ]}
          {...props}
        />

        {renderAccessory(accessoryRight, 'right')}
      </View>

      {isError && caption && (
        <Text
          style={[
            styles.caption,
            { color: STATUS_STYLES.error.textColor, marginTop: 4 },
          ]}
        >
          {caption}
        </Text>
      )}
    </View>
  );
};

export default BaseInput;
