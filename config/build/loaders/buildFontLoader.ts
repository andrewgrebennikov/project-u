export const buildFontLoader = () => {
  return {
    test: /\.(woff|woff2)$/i,
    type: 'asset/resource',
    generator: {
      outputPath: 'fonts/',
      filename: '[name][ext]',
    },
  };
};
