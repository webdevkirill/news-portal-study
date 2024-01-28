import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { IBuildOptions } from './buildTypes';

export const buildLoaders = (options: IBuildOptions): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:8]',
            auto: (resPath: string) => resPath.includes('.module.'),
          },
        },
      },
      'sass-loader',
    ],
  };

  return [typescriptLoader, cssLoader];
};
