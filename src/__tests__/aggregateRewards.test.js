import { aggregateRewards } from '../App';

describe('aggregateRewards', () => {
  test('aggregates points correctly for single transaction', () => {
    const transactions = [{ amount: 120, date: '2024-01-10' }];
    const result = aggregateRewards(transactions);
    expect(result).toEqual({ 1: 90 });
  });

  test('aggregates points correctly for multiple transactions in the same month', () => {
    const transactions = [
      { amount: 120, date: '2024-01-10' },
      { amount: 75, date: '2024-01-20' },
    ];
    const result = aggregateRewards(transactions);
    expect(result).toEqual({ 1: 115 });
  });

  test('aggregates points correctly for multiple transactions across different months', () => {
    const transactions = [
      { amount: 120, date: '2024-01-10' },
      { amount: 75, date: '2024-02-15' },
      { amount: 200, date: '2024-03-12' },
    ];
    const result = aggregateRewards(transactions);
    expect(result).toEqual({ 1: 90, 2: 25, 3: 250 });
  });

  test('aggregates points correctly for given dataset', () => {
    const transactions = [
      { date: "2024-01-10", amount: 120 },
      { date: "2024-02-15", amount: 75 },
      { date: "2024-03-12", amount: 200 }
    ];
    const result = aggregateRewards(transactions);
    expect(result).toEqual({ 1: 90, 2: 25, 3: 250 });
  });
});