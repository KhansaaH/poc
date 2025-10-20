import { TextInputProps, TextStyle, ViewStyle, ImageProps } from 'react-native';

export type InputStatus =
  | 'default'
  | 'hover'
  | 'selected'
  | 'filled-in'
  | 'error'
  | 'disabled'
  | 'success';

export interface IBaseInput extends TextInputProps {

  size?: 'small' | 'medium' | 'large';

 
  style?: ViewStyle;

 
  textStyle?: TextStyle;

  
  status?: InputStatus;

 
  accessoryLeft?:
    | React.ReactElement
    | ((props?: Partial<ImageProps>) => React.ReactElement);

  
  accessoryRight?:
    | React.ReactElement
    | ((props?: Partial<ImageProps>) => React.ReactElement);


  label?: string;

  
  caption?: string;


  id?: string;
}
