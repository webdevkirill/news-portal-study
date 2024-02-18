import webpack from 'webpack';

import { IBuildOptions } from './buildTypes';
import { buildCssLoader } from './loaders/buildCssLoader';

export const buildLoaders = (options: IBuildOptions): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const cssLoader = buildCssLoader(options.isDev);

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2?)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
};
