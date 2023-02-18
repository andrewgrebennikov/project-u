import { sum } from './sum';

describe('sum', () => {
  test('Сумма двух положительных чисел 2 + 2', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
