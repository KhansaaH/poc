import { InputProps } from '@ui-kitten/components';
import { TextStyle, ViewStyle } from 'react-native';
export type InputStatus = 'default'|'hover' | 'selected' | 'filled-in' | 'error'|'disabled'|'success';

export interface IBaseInput extends InputProps {
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
  textStyle?: TextStyle;
  status?: InputStatus;
}
