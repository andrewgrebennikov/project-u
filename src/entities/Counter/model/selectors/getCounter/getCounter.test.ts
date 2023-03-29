import { getCounter } from './getCounter';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

describe('getCounter', () => {
  test('Return counter', () => {
    const state: DeepPartial<StoreSchema> = { counter: { value: 10 } };

    expect(getCounter(state as StoreSchema)).toEqual({ value: 10 });
  });
});
