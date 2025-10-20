import { ReactNode } from 'react';
import { TextStyle, ViewStyle } from 'react-native';

export interface IBaseCardHeader {
  cardTitle: string;
  rightSection?: ReactNode;
  titleStyle?: TextStyle;
  headerStyle?: ViewStyle;
}
