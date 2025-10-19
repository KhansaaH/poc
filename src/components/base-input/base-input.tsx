import React, { useState } from 'react';
import { Input } from '@ui-kitten/components';
import {
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageProps,
  Text,
} from 'react-native';
import { IBaseInput } from './base-input-model';

const COLORS = {
  textDefault: '#455664',
  textError: '#EA0000',
  borderHover: '#BACCF5',
  borderTransparent: 'transparent',
  bgDefault: '#F5F7F9',
  borderSelected: '#205CDF',
  bgFilledIn: '#FFFFFF',
  textDisabled: '#A1A1A1',
  success: '#009639',
};

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

  // 🔹 Detect "error" state
  const isError = status === 'error' || !!caption;

  /** 🎨 Compute visual style */
  const getDynamicStyle = () => {
    let borderColor = COLORS.borderTransparent;
    let backgroundColor = COLORS.bgDefault;
    let color = COLORS.textDefault;

    if (isError) {
      borderColor = COLORS.textError;
      color = COLORS.textError;
    } else if (isFocused || status === 'hover') {
      borderColor = COLORS.borderHover;
    } else if (status === 'selected') {
      borderColor = COLORS.borderSelected;
    } else if (status === 'filled-in') {
      backgroundColor = COLORS.bgFilledIn;
    } else if (status === 'disabled') {
      borderColor = COLORS.borderTransparent;
      backgroundColor = COLORS.bgDefault;
      color = COLORS.textDisabled;
    } else if (status === 'success') {
      borderColor = COLORS.success;
      backgroundColor = COLORS.bgDefault;
      color = COLORS.success;
    }

    return { borderColor, backgroundColor, color };
  };

  const dynamicStyle = getDynamicStyle();

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
        <Text style={[styles.label, { color: dynamicStyle.color }]}>
          {label}
        </Text>
      )}
      <Input
        id={id}
        {...props}
        placeholder={placeholder}
        placeholderTextColor={dynamicStyle.color}
        style={[
          styles.input,
          inputPadding,
          {
            borderColor: dynamicStyle.borderColor,
            backgroundColor: dynamicStyle.backgroundColor,
          },
          style,
        ]}
        textStyle={[styles.text, textStyle, { color: dynamicStyle.color }]}
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

/* ==================== Styles ==================== */
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  } as ViewStyle,
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
  } as TextStyle,
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
  } as ViewStyle,
  text: {
    fontSize: 16,
  } as TextStyle,
});

export const sizeStyles = {
  small: {
    wrapper: { padding: 14, gap: 14 },
    inputPadding: { paddingVertical: 14, paddingHorizontal: 18 },
  },
  medium: {
    wrapper: { padding: 10, gap: 10 },
    inputPadding: { paddingVertical: 10, paddingHorizontal: 14 },
  },
  large: {
    wrapper: { padding: 6, gap: 6 },
    inputPadding: { paddingVertical: 6, paddingHorizontal: 10 },
  },
};
