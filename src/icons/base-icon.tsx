import React from 'react';
import { SvgProps } from 'react-native-svg';
import { Icons, IconName } from './icons/icons';

interface AppIconProps extends SvgProps {
  name: IconName;
  size?: number;
  color?: string;
}

export const AppIcon: React.FC<AppIconProps> = ({
  name,
  size = 24,
  color = '#205CDF',
  ...props
}) => {
  const SvgIcon = Icons[name];
  if (!SvgIcon) {
    console.warn(` Unknown icon: ${name}`);
    return null;
  }

  return (
    <SvgIcon
      width={size}
      height={size}
      stroke={color}
      color={color}
      fill="none" 
      {...props}
    />
  );
};
