import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniSccExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { IBuildOptions } from './buildTypes';

export const buildPlugins = ({ paths, isDev }: IBuildOptions): webpack.WebpackPluginInstance[] => {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniSccExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ];
};
