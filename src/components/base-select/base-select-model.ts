import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type SelectSize = 'small' | 'medium' | 'large';
export type SelectVariant = 'default' | 'filter';

export interface IBaseSelectItem {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

export interface IBaseSelect {
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
  placeholder?: string;
  disabled?: boolean;
  value?: string | number | Array<string | number>;
  onChange?: (value: string | number | Array<string | number>) => void;
}
