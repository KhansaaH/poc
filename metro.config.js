const { getDefaultConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 * Adds SVG transformer so .svg imports become React components.
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = getDefaultConfig(__dirname);

// Ensure .svg are treated as source, not assets
config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== 'svg');
config.resolver.sourceExts = Array.from(new Set([...(config.resolver.sourceExts || []), 'svg']));

// Use react-native-svg-transformer
config.transformer = {
  ...(config.transformer || {}),
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

module.exports = config;
