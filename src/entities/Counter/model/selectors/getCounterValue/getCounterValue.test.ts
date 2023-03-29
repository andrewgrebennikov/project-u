import { getCounterValue } from './getCounterValue';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

describe('getCounterValue', () => {
  test('Return counter value', () => {
    const state: DeepPartial<StoreSchema> = { counter: { value: 10 } };

    expect(getCounterValue(state as StoreSchema)).toEqual(10);
  });
});
