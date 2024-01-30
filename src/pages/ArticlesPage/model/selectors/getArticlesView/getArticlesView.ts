import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

export const getArticlesView = (state: StoreSchema) => state.articles?.view;
