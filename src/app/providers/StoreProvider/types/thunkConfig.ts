import { AxiosInstance } from 'axios';
import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StoreSchema;
}
