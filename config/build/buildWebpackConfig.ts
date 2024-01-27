import webpack from 'webpack';

import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { IBuildOptions } from './buildTypes';

export const buildWebpackConfig = (options: IBuildOptions): webpack.Configuration => {
  const { mode, paths } = options;

  return {
    mode,
    entry: {
      bundle: paths.entry,
    },
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  };
};
