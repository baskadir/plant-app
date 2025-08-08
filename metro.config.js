const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

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
        assetExts: assetExts.filter((ext) => ext !== "svg"),
        sourceExts: [...sourceExts, "svg"]
    },
    transformer: {
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
};

module.exports = mergeConfig(defaultConfig, config);
