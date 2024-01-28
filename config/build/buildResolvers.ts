import webpack from 'webpack';

import { IBuildOptions } from './buildTypes';

export const buildResolvers = (options: IBuildOptions): webpack.ResolveOptions => {
  return {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
    preferAbsolute: true,
    modules: ['node_modules', options.paths.src],
    alias: {},
    mainFiles: ['index'],
  };
};
