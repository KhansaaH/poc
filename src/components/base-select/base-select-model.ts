import React from 'react';
import { SelectProps } from '@ui-kitten/components';
import {
  ImageStyle,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

export type SelectSize = 'small' | 'medium' | 'large';
export type SelectVariant = 'default' | 'filter';

export interface IBaseSelectItem {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

// To do when final build is ready check the omitted props
export interface IBaseSelect
  extends Omit<SelectProps, 'onSelect' | 'selectedIndex'>,
    Omit<TouchableOpacityProps, 'children'> {
  label?: string;
  data: IBaseSelectItem[] | string[];
  loading?: boolean;
  withDivider?: boolean;
  arrowIconProps?: Record<string, any>;
  size?: SelectSize;
  variant?: SelectVariant;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  iconStyle?: ImageStyle | ImageStyle[];
  value?: string | number | Array<string | number>;
  onChange?: (value: string | number | Array<string | number>) => void;
}
