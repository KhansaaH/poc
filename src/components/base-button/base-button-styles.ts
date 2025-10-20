import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    opacity: 1
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 6,
  },
  row: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},
});

export const sizeStyles: Record<
  'large' | 'medium' | 'small' | 'xSmall',
  { paddingVertical: number; paddingHorizontal: number; textSize: number }
> = {
  large: { paddingVertical: 14, paddingHorizontal: 22, textSize: 18 },
  medium: { paddingVertical: 10, paddingHorizontal: 18, textSize: 16 },
  small: { paddingVertical: 8, paddingHorizontal: 14, textSize: 14 },
  xSmall: { paddingVertical: 6, paddingHorizontal: 10, textSize: 12 },
};
