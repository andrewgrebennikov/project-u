import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

import { ArticlesCategoriesField } from 'features/ArticlesCategory';

export const getArticlesCategory = (state: StoreSchema) => state.articles?.type || ArticlesCategoriesField.ALL;
