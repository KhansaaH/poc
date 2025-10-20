import { StyleSheet } from 'react-native';

/* ==================== Styles ==================== */
export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
  },
  text: {
    fontSize: 16,
    paddingVertical: 0,
  },
  caption: {
    fontSize: 12,
  },
});

/* ==================== Size Styles ==================== */
export const sizeStyles = {
  small: {
    wrapper: { padding: 6, gap: 6 },
    inputPadding: { paddingVertical: 8, paddingHorizontal: 10 },
  },
  medium: {
    wrapper: { padding: 8, gap: 8 },
    inputPadding: { paddingVertical: 10, paddingHorizontal: 14 },
  },
  large: {
    wrapper: { padding: 10, gap: 10 },
    inputPadding: { paddingVertical: 12, paddingHorizontal: 16 },
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
