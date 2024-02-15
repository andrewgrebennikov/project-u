import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { ArticlesSchema } from 'pages/ArticlesPage';

import { AddCommentFormSchema } from 'features/AddCommentForm';
import { LoginSchema } from 'features/AuthByUsername';
import { ScrollSchema } from 'features/SavePositionScroll';

import { ArticleSchema } from 'entities/Article';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';

export interface StoreSchema {
  user: UserSchema;
  scroll: ScrollSchema;

  // Асинхронные редюсеры
  login?: LoginSchema;
  profile?: ProfileSchema;
  article?: ArticleSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  articles?: ArticlesSchema;
}

export type StoreSchemaKeys = keyof StoreSchema;
