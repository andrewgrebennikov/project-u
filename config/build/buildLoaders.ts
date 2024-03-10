import webpack from 'webpack';

import { buildFontLoader } from './loaders/buildFontLoader';
import { buildImageLoader } from './loaders/buildImageLoader';
import { buildStyleLoader } from './loaders/buildStyleLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildTsLoader } from './loaders/buildTsLoader';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const fontLoader = buildFontLoader();
  const imageLoader = buildImageLoader();
  const svgLoader = buildSvgLoader();
  const tsLoader = buildTsLoader();
  const styleLoader = buildStyleLoader(isDev);

  return [tsLoader, styleLoader, svgLoader, fontLoader, imageLoader];
};
