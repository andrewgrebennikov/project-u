export const buildImageLoader = () => {
  return {
    test: /\.(png|jpg|jpeg)$/i,
    type: 'asset/resource',
    generator: {
      outputPath: 'images/',
      filename: '[name][ext]',
    },
  };
};
