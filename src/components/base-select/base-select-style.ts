import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },

  selectWrapperFocused: {
    borderColor: '#0074C2',
  },

  select: {
    borderWidth: 0,
    borderRadius: 12,
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  text: { color: '#455664', fontSize: 16 },

  divider: {
    borderBottomColor: '#e7ebef',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    opacity: 0.9,
    paddingRight: 4,
  },
});
