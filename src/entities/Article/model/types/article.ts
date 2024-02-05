import { ValueOf } from 'shared/lib/types/valueOf';
import { User } from 'entities/User';

export const ArticleBlockType = {
  TEXT: 'TEXT',
  CODE: 'CODE',
  IMAGE: 'IMAGE',
} as const;

export type ArticleBlockType = ValueOf<typeof ArticleBlockType>;

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  src: string;
  title: string;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  code: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  title: string;
  paragraphs: string[];
}

export type ArticleBlock = ArticleImageBlock | ArticleCodeBlock | ArticleTextBlock;

export const ArticleType = {
  IT: 'IT',
  SCIENCE: 'SCIENCE',
  ECONOMICS: 'ECONOMICS',
} as const;

export type ArticleType = ValueOf<typeof ArticleType>;

export const ArticlesView = {
  LIST: 'LIST',
  GRID: 'GRID',
} as const;

export type ArticlesView = ValueOf<typeof ArticlesView>;

export const ArticlesSortField = {
  VIEWS: 'views',
  TITLE: 'title',
  CREATED: 'createdAt',
} as const;

export type ArticlesSortField = ValueOf<typeof ArticlesSortField>;

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
  user: User;
}
