import React from 'react';
import { IconPack, IconProvider, Icon } from '@ui-kitten/components';
import { SvgProps } from 'react-native-svg';
import { Icons, IconName } from './icons/icons'; // 👈 your big file

/**
 * This function adapts your imported SVG React components
 * to UI Kitten’s expected (style) => ReactElement format.
 */
const createIconProvider = (SvgIcon: React.FC<SvgProps>): IconProvider<any> => {
  return {
    toReactElement: (style?: any) => {
    const { width, height, tintColor, color, fill, stroke, strokeWidth, ...rest } = style || {};
    const resolvedColor = tintColor ?? color ?? stroke ?? fill ?? '#000';
    return (
      <SvgIcon
        width={width ?? 24}
        height={height ?? 24}
        // Avoid filling stroke-only icons (e.g., Search):
        // let children that use `fill="currentColor"` paint themselves.
        fill={'none'}
        color={resolvedColor}
        // pass through strokeWidth if provided
        strokeWidth={strokeWidth as any}
        {...(rest as SvgProps)}
      />
    );
    },
  };
};

/**
 * Now generate the icon map dynamically from your huge Icons object.
 */
const customIcons: { [key: string]: IconProvider<any> } = Object.entries(Icons).reduce(
  (acc, [key, SvgComponent]) => {
    acc[key] = createIconProvider(SvgComponent as React.FC<SvgProps>);
    return acc;
  },
  {} as { [key: string]: IconProvider<any> }
);

/**
 * Finally, define the IconPack that UI Kitten understands.
 */
export const MyCustomIconsPack: IconPack<any> = {
  name: 'custom',
  icons: customIcons,
};

// Convenience wrapper to render a custom icon by name
export const AppIcon: React.FC<{ name: IconName } & Record<string, any>> = ({ name, ...props }) => (
  <Icon pack="custom" name={name} {...props} />
);

export type { IconName };
