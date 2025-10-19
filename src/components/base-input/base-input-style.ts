import { StyleSheet, ViewStyle, TextStyle } from "react-native";

/* ==================== Styles ==================== */
export const styles = StyleSheet.create({
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


/* 🎨 Design Tokens */
const COLORS = {
  textDefault: '#455664',
  textError: '#EA0000',
  textDisabled: '#A1A1A1',
  textSuccess: '#009639',
  borderTransparent: 'transparent',
  borderHover: '#BACCF5',
  borderSelected: '#205CDF',
  borderError: '#EA0000',
  borderSuccess: '#009639',
  bgDefault: '#F5F7F9',
  bgFilledIn: '#FFFFFF',
};

/* 🎯 Style Map */
export const STATUS_STYLES = {
  default: {
    textColor: COLORS.textDefault,
    borderColor: COLORS.borderTransparent,
    backgroundColor: COLORS.bgDefault,
  },
  hover: {
    textColor: COLORS.textDefault,
    borderColor: COLORS.borderHover,
    backgroundColor: COLORS.bgDefault,
  },
  selected: {
    textColor: COLORS.textDefault,
    borderColor: COLORS.borderSelected,
    backgroundColor: COLORS.bgDefault,
  },
  'filled-in': {
    textColor: COLORS.textDefault,
    borderColor: COLORS.borderTransparent,
    backgroundColor: COLORS.bgFilledIn,
  },
  disabled: {
    textColor: COLORS.textDisabled,
    borderColor: COLORS.borderTransparent,
    backgroundColor: COLORS.bgDefault,
  },
  success: {
    textColor: COLORS.textSuccess,
    borderColor: COLORS.borderSuccess,
    backgroundColor: COLORS.bgDefault,
  },
  error: {
    textColor: COLORS.textError,
    borderColor: COLORS.borderError,
    backgroundColor: COLORS.bgDefault,
  },
} as const;
