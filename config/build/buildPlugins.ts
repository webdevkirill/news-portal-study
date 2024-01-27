import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

import { IBuildOptions } from './buildTypes';

export const buildPlugins = ({ paths }: IBuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
};
