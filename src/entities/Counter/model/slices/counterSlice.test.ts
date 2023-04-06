import { counterReducer, counterActions } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice', () => {
  test('Decrement', () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });

  test('Increment', () => {
    const state: CounterSchema = { value: 10 };

    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });

  test('Increment with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });

  test('Decrement with empty state', () => {
    expect(counterReducer(undefined, counterActions.decrement())).toEqual({ value: -1 });
  });
});
