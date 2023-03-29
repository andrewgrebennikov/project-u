import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

export const getCounter = (state: StoreSchema) => state.counter;
