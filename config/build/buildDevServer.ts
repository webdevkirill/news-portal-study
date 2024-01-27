import type { Configuration as DevServerConfig } from 'webpack-dev-server';

import { IBuildOptions } from './buildTypes';

export const buildDevServer = (options: IBuildOptions): DevServerConfig => {
  const { port } = options;

  return {
    port,
    open: true,
  };
};
