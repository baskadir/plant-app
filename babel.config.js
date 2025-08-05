module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
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
    ],
  ],
};
