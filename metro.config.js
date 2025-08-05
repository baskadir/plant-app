const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    alias: {
      '@': './src',
      '@/components': './src/components',
      '@/navigation': './src/navigation',
      '@/screens': './src/screens',
      '@/styles': './src/styles',
      '@/store': './src/store',
      '@/utils': './src/utils',
      '@/types': './src/types',
      '@/assets': './src/assets',
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
