import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { styles as baseStyles, elevationMap, backgroundMap } from './base-card-style';
import { IBaseCard } from './base-card-model';

export const BaseCard: React.FC<IBaseCard> = ({
  elevation = 'no-shadow',
  background = 'white',
  padding = 16,
  style,
  children,
  header,
  footer,
  fullWidth = true,
  image,
  imageHeight = 160,
  overlayColor = 'rgba(0,0,0,0.2)',
}) => {
  const bgColor = backgroundMap[background] ?? '#FFFFFF';
  const shadow = elevationMap[elevation] ?? elevationMap['no-shadow'];


  const getSource = () => {
    if (!image) return undefined;
    if (typeof image === 'string') {
    
      return { uri: image };
    }
    return image; 
  };

  return (
    <View
      style={[
        baseStyles.base,
        shadow,
        { backgroundColor: bgColor, width: fullWidth ? '100%' : undefined },
        style,
      ]}
    >
      {/* 🔹 Image Section */}
      {image && (
        <View style={{ position: 'relative', overflow: 'hidden' }}>
          <Image
            source={getSource()}
            style={{
              width: '100%',
              height: imageHeight,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
            resizeMode="cover"
          />
          <View
            style={[
              StyleSheet.absoluteFillObject,
              {
                backgroundColor: overlayColor,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              },
            ]}
          />
        </View>
      )}

      {/* 🔹 Header */}
      {header && <View style={baseStyles.header}>{header}</View>}

      {/* 🔹 Body */}
      <View style={{ padding }}>{children}</View>

      {/* 🔹 Footer */}
      {footer && <View style={baseStyles.footer}>{footer}</View>}
    </View>
  );
};
