import path from 'path';
import webpack from 'webpack';

import { IBuildEnv, IBuildPaths } from './config/build/buildTypes';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: IBuildEnv) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const port = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });

  return config;
};
