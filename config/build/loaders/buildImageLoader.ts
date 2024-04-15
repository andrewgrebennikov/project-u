export const buildImageLoader = () => {
  return {
    test: /\.(png|jpg|jpeg)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'images/[name][ext]',
    },
  };
};
