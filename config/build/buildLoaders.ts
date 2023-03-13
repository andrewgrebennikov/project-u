import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildStyleLoader } from './loaders/buildStyleLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

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

  const svgLoader = buildSvgLoader();

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const styleLoader = buildStyleLoader(isDev);

  return [tsLoader, styleLoader, svgLoader, fontLoader, imageLoader];
};
