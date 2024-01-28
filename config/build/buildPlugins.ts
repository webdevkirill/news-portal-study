import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniSccExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { IBuildOptions } from './buildTypes';

export const buildPlugins = ({ paths }: IBuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniSccExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];
};
