import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolves = (options: BuildOptions): webpack.ResolveOptions => {
  const { paths } = options;

  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    mainFiles: ['index'],
    modules: [paths.src, 'node_modules'],
    alias: {},
  };
};
