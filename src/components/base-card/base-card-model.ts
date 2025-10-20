import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export type CardVariant = 'default' | 'outlined' | 'flat';

export type CardElevationTypes =
  | 'solid-bg'
  | 'nav-bar'
  | 'image-bg'
  | 'toast-msg'
  | 'modal'
  | 'no-shadow';

export type CardBackgroundTypes =
  | 'white'
  | 'black'
  | 'mid-grey'
  | 'light-grey'
  | 'opacity-white-60';


export interface IBaseCard {
  elevation?: CardElevationTypes;
  background?: CardBackgroundTypes;
  padding?: number;
  style?: ViewStyle | ViewStyle[];
  children?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  fullWidth?: boolean;

  image?: string;
 
  imageHeight?: number;

  overlayColor?: string;
}
