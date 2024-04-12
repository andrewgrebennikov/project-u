import path from 'path';

import webpack, { RuleSetRule } from 'webpack';

import { buildStyleLoader } from '../build/loaders/buildStyleLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    dist: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  };

  config.plugins!.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('http://localhost:8000'),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  );

  config.resolve!.modules = [paths.src, 'node_modules'];
  config.resolve!.extensions!.push('.ts', '.tsx');

  // @ts-ignore
  config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module!.rules.push(buildSvgLoader());
  config.module!.rules.push(buildStyleLoader(true));

  return config;
};
