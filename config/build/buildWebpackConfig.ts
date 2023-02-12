import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildResolves } from './buildResolves';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? 'inline-source-map' : undefined,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.dist,
      clean: true,
    },
    plugins: buildPlugins(options),
  };
};
