export type BuildMode = 'development' | 'production';

export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface IBuildOptions {
  mode: BuildMode;
  paths: IBuildPaths;
  isDev: boolean;
  port: number;
  apiURL: string;
}

export interface IBuildEnv {
  mode: BuildMode;
  port: number;
  apiURL: string;
}
