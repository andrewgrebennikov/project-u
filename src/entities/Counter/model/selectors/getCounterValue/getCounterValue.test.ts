import { getCounterValue } from './getCounterValue';
import { StoreSchema } from 'app/providers/StoreProvider/types/storeSchema';

describe('getCounterValue', () => {
  test('Return counter value', () => {
    const state: DeepPartial<StoreSchema> = { counter: { value: 10 } };

    expect(getCounterValue(state as StoreSchema)).toEqual(10);
  });
});
