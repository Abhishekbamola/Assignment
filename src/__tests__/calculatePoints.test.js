import {calculatePoints } from '../App';

describe('calculatePoints', () => {
  test('should return 0 points for amounts less than or equal to 50', () => {
    expect(calculatePoints(50)).toBe(0);
    expect(calculatePoints(30)).toBe(0);
  });
  
  test('should return correct points for amounts between 50 and 100', () => {
    expect(calculatePoints(60)).toBe(10);  
    expect(calculatePoints(100)).toBe(50);  
  });

  test('should return correct points for amounts over 100', () => {
    expect(calculatePoints(120)).toBe(90); 
    expect(calculatePoints(150)).toBe(150); 
  });
});