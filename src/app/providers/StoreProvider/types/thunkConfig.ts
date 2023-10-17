import { AxiosInstance } from 'axios';
import { To, NavigateOptions } from 'react-router-dom';

interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}
