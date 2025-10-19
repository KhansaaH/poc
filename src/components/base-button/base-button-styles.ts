import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

/**
 *   ===== Design System Notes:====
 * - Use consistent spacing and corner radius.
 * - Define separate size map for responsive scaling.
 * - Each variant should define both background and text color.
 */

export const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  } as ViewStyle,

  fullWidth: {
    alignSelf: 'stretch',
  } as ViewStyle,

  text: {
    fontSize: 16,
    fontWeight: '600',
    flexShrink: 1,
    textAlign: 'center',
  } as TextStyle,
  
  // ──────────────────────────────
  // 🔹 Inner Layout
  // ──────────────────────────────
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },

  innerVertical: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    marginHorizontal: 4,
  },

  label: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export const sizeStyles = StyleSheet.create({
  large: { minHeight: 48, paddingHorizontal: 20 },
  medium: { minHeight: 40, paddingHorizontal: 20 },
  small: { minHeight: 36, paddingHorizontal: 16 },
  xSmall: { minHeight: 28, paddingHorizontal: 12 },
});
