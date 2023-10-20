import { AxiosInstance } from 'axios';
import { To, NavigateOptions } from 'react-router-dom';
import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StoreSchema;
}
