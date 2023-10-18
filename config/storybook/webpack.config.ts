import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildStyleLoader } from '../build/loaders/buildStyleLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    dist: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.plugins!.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(true),
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
