const { getDefaultConfig } = require('@react-native/metro-config');

/**
 * Metro configuration for React Native
 * https://reactnative.dev/docs/metro
 *
 * Supports SVG imports via react-native-svg-transformer.
 */
const config = getDefaultConfig(__dirname);

// Remove svg from assetExts and add to sourceExts
config.resolver.assetExts = config.resolver.assetExts.filter(
  ext => ext !== 'svg',
);
config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg'];

// Use the SVG transformer
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

module.exports = config;
