export type BuildMode = 'development' | 'production';

export interface BuildPaths {
  entry: string;
  dist: string;
  html: string;
  src: string;
  locales: string;
  buildLocales: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
  project: 'frontend' | 'jest' | 'storybook';
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  apiUrl: string;
}
