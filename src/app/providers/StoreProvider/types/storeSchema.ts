import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'entities/Profile';
import { ArticleSchema } from 'entities/Article';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';

export interface StoreSchema {
  user: UserSchema;

  // Асинхронные редюсеры
  login?: LoginSchema;
  profile?: ProfileSchema;
  article?: ArticleSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
}

export type StoreSchemaKeys = keyof StoreSchema;
