import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const fontLoader = {
    test: /\.(woff|woff2)$/i,
    type: 'asset/resource',
    generator: {
      outputPath: 'fonts/',
      filename: '[name][ext]',
    },
  };

  const imageLoader = {
    test: /\.(png|jpg|jpeg)$/i,
    type: 'asset/resource',
    generator: {
      outputPath: 'images/',
      filename: '[name][ext]',
    },
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string) => resourcePath.includes('.module.'),
            localIdentName: isDev ? '[name]__[local]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  return [tsLoader, styleLoader, svgLoader, fontLoader, imageLoader];
};
