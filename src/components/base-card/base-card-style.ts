import { StyleSheet } from 'react-native';

export const backgroundMap = {
  white: '#FFFFFF',
  black: '#000000',
  'mid-grey': '#E5E7EB',
  'light-grey': '#F5F7F9',
  'opacity-white-60': 'rgba(255,255,255,0.6)',
};

export const elevationMap = {
  'no-shadow': {
    shadowColor: 'transparent',
    elevation: 0,
  },
  'solid-bg': {
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  'nav-bar': {
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  'image-bg': {
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  'toast-msg': {
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
  },
  modal: {
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
};

export const styles = StyleSheet.create({
  base: {
    borderRadius: 12,
  },
  header: { marginBottom: 12 },
  footer: { marginTop: 12 },
});
