import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  // 🔹 Sizes
  large: {
    height: 48,
    paddingHorizontal: 16,
  },
  medium: {
    height: 40,
    paddingHorizontal: 16,
  },
  small: {
    height: 36,
    paddingHorizontal: 14,
  },
  'x-small': {
    height: 28,
    paddingHorizontal: 12,
  },

  // 🔹 Variants
  primary: {
    backgroundColor: '#205CDF',
    minWidth: 100,
  },
  primarySelected: {
    backgroundColor: '#113278',
    minWidth: 100,
  },
  primaryDisabled: {
    backgroundColor: '#A6BEF2',
    minWidth: 100,
  },
  secondary: {
    backgroundColor: '#E1E8FF',
  },
  secondarySelected: {
    backgroundColor: '#205CDF',
    minWidth: 100,
  },
  'system-approve': {
    backgroundColor: '#00A86B',
  },
  'system-approveSelected': {
    backgroundColor: '#006B29',
    minWidth: 100,
  },
  'system-reject': {
    backgroundColor: '#E63946',
  },
  'system-rejectSelected': {
    backgroundColor: '#DB0000',
    minWidth: 100,
  },

  tertiary: {
    backgroundColor: 'transparent',
  },
  default: {
    backgroundColor: '#F2F2F2',
  },

  disabled: {
    opacity: 0.6,
  },

  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  innerPrimary: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    marginHorizontal: 4,
  },

  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
