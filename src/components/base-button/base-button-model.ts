import { TouchableOpacityProps } from "react-native";

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'system-approve'
  | 'system-reject'
  | 'tertiary'
  | 'default';

export type ButtonSize = 'large' | 'medium' | 'small' | 'xSmall';

export interface IBaseButton extends TouchableOpacityProps {
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  selected?: boolean;
  loading?: boolean;
  icon?: React.ReactElement;
  iconPlacement?: 'before' | 'after';
  children?: React.ReactNode;
  buttonColor?: string;
  textColor?: string;
}