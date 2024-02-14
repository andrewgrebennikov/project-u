import { ArticlesCategoriesField } from 'features/ArticlesCategory';

import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

export const getArticlesCategory = (state: StoreSchema) => state.articles?.type || ArticlesCategoriesField.ALL;
