import { ValueOf } from 'shared/lib/types/valueOf';

const currency = {
  RUB: 'RUB',
  EUR: 'EUR',
  USD: 'USD',
} as const;

const country = {
  Russia: 'Russia',
  Belarus: 'Belarus',
} as const;

export type Currency = ValueOf<typeof currency>;
export type Country = ValueOf<typeof country>;
