import React from 'react';
import { Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from '@ui-kitten/components';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'system-approve'
  | 'system-reject'
  | 'tertiary'
  | 'default';

export type ButtonSize =
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'icon-40'
  | 'icon-32'
  | 'icon-24'
  | 'fit-content';

export interface BaseButtonProps {
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  selected?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPlacement?: 'before' | 'after';
  children?: React.ReactNode;
}

export const BaseButton: React.FC<BaseButtonProps> = ({
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
}) => {
  const [isPressed, setPressed] = React.useState(false);
  const sizeStyle = styles[size as keyof typeof styles];

  const getTextColor = (pressed: boolean) => {
    // Disabled text colors per variant
    if (disabled) {
      if (variant === 'primary') return '#FFF';
      if (variant === 'secondary') return '#A1BBF2';
      if (variant === 'system-approve') return '#99D5B0';
      if (variant === 'system-reject') return '#F79999';
      if (variant === 'tertiary') return '#A1BBF2';
      if (variant === 'default') return '#801717ff';

      // primary/default/others fall back to white or dark as usual
    }

    const active = pressed || selected;
    switch (variant) {
      case 'secondary':
        return active ? '#fff' : '#205CDF';
      case 'default':
        return '#171717';
      case 'tertiary':
        return '#205CDF';
      case 'system-approve':
        return active ? '#fff' : '#006B29';
      case 'system-reject':
        return active ? '#fff' : '#DB0000';
      default:
        return '#fff';
    }
  };

  const getBackgroundColor = (pressed: boolean) => {
    if (disabled) {
      // Disabled backgrounds per variant
      if (variant === 'primary') return '#A6BEF2';
      if (variant === 'secondary') return '#F2F8FF';
      if (variant === 'system-approve') return '#F5F9EE';
      if (variant === 'system-reject') return '#FFF5F5';
      return '#F2F2F2';
    }

    if (variant === 'primary') {
      if (selected) return '#113278';
      if (pressed) return '#113278';
      return '#205CDF';
    }
    if (variant === 'secondary')
      return selected || pressed ? '#205CDF' : '#E1E8FF';
    if (variant === 'system-approve')
      return selected || pressed ? '#006B29' : '#F0F7E7';
    if (variant === 'system-reject')
      return selected || pressed ? '#DB0000' : '#FFF1F1';
    if (variant === 'tertiary')
      return selected || pressed ? 'rgba(32, 92, 223, 0.08)' : 'transparent';
    if (variant === 'default')
      return selected || pressed ? '#E5E5E5' : '#F2F2F2';
    return 'transparent';
  };

  const pressed = !disabled && !loading && isPressed;

  return (
    <TouchableOpacity
      appearance="ghost"
      onPress={onPress}
      disabled={disabled || loading}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        styles.base,
        sizeStyle,
        fullWidth && styles.fullWidth,
        (() => {
          const bg = getBackgroundColor(pressed);
          return { backgroundColor: bg, borderColor: bg, borderWidth: 1 };
        })(),
        // Ensure disabled label color remains visible (override UI Kitten default opacity)
        (disabled || loading) && { opacity: 1 },
      ]}
      // Keep base typography via textStyle; color is enforced via explicit Text child
      textStyle={[styles.textStyle, { color: getTextColor(pressed) }]}
      accessoryLeft={
        icon && iconPlacement === 'before'
          ? () => icon as any
          : loading
          ? () => <ActivityIndicator color={getTextColor(pressed)} />
          : undefined
      }
      accessoryRight={
        icon && iconPlacement === 'after' ? () => icon as any : undefined
      }
    >
      <Text style={[styles.textStyle, { color: getTextColor(pressed) }]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 180,
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  large: {
    height: 48,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  medium: {
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  small: {
    height: 36,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  'x-small': {
    height: 28,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inner: {
    // not used with UI Kitten Button; kept for compatibility
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
});
