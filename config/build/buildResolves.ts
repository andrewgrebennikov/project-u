import { ResolveOptions } from 'webpack';

import { BuildOptions } from './types/config';

export const buildResolves = (options: BuildOptions): ResolveOptions => {
  const { paths } = options;

  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    mainFiles: ['index'],
    modules: [paths.src, 'node_modules'],
    alias: {},
  };
};
