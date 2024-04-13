export const buildTsLoader = (isDev: boolean) => {
  return {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'swc-loader',
        options: {
          jsc: {
            experimental: {
              plugins: [['@swc/plugin-react-remove-properties', {}]],
            },
            transform: {
              react: {
                runtime: 'automatic',
                development: isDev,
                refresh: isDev,
              },
            },
          },
        },
      },
    ],
    exclude: /node_modules/,
  };
};
