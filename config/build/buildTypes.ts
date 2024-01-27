export type BuildMode = 'development' | 'production';

export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface IBuildOptions {
  mode: BuildMode;
  paths: IBuildPaths;
  isDev: boolean;
}
