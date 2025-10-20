import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },

  select: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#E7EBEF',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: '#F5F7F9',
    height: 48,
    paddingHorizontal: 12,
  },

  selectFocused: {
    borderColor: '#205CDF',
    backgroundColor: '#FFFFFF',
  },

  text: {
    color: '#455664',
    fontSize: 16,
  },

  divider: {
    borderBottomColor: '#E7EBEF',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    opacity: 0.9,
  },

  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 6,
    maxHeight: 300,
    elevation: 3,
  },

  optionItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

  optionText: {
    fontSize: 16,
    color: '#111827',
  },
});
