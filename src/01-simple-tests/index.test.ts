// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 1, b: 2, action: Action.Add })).toBe(3);
    expect(simpleCalculator({ a: 10, b: 2, action: Action.Add })).toBe(12);
    expect(simpleCalculator({ a: 100, b: 20, action: Action.Add })).toBe(120);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 10, b: 2, action: Action.Subtract })).toBe(8);
    expect(simpleCalculator({ a: 100, b: 5, action: Action.Subtract })).toBe(
      95,
    );
    expect(simpleCalculator({ a: 10, b: -2, action: Action.Subtract })).toBe(
      12,
    );
  });

  test('should multiply two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Multiply })).toBe(6);
    expect(simpleCalculator({ a: 20, b: 5, action: Action.Multiply })).toBe(
      100,
    );
    expect(simpleCalculator({ a: -2, b: 3, action: Action.Multiply })).toBe(-6);
  });

  test('should divide two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 4, b: 2, action: Action.Divide })).toBe(2);
    expect(simpleCalculator({ a: 50, b: 25, action: Action.Divide })).toBe(2);
    expect(simpleCalculator({ a: 4, b: -2, action: Action.Divide })).toBe(-2);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 2, b: 3, action: Action.Exponentiate })).toBe(
      8,
    );
    expect(simpleCalculator({ a: 3, b: 3, action: Action.Exponentiate })).toBe(
      27,
    );
    expect(simpleCalculator({ a: 5, b: 2, action: Action.Exponentiate })).toBe(
      25,
    );
  });

  test('should return null for invalid action', () => {
    // Write your test here
    expect(simpleCalculator({ a: 2, b: 3, action: 'action' })).toBeNull();
    expect(simpleCalculator({ a: 2, b: 3, action: 'Add' })).toBeNull();
    expect(simpleCalculator({ a: 2, b: 3, action: 'Multiply' })).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    expect(
      simpleCalculator({ a: '2', b: '2', action: Action.Exponentiate }),
    ).toBeNull();
    expect(simpleCalculator({ a: 's', b: '2', action: Action.Add })).toBeNull();
    expect(
      simpleCalculator({ a: '2', b: 'sg', action: Action.Multiply }),
    ).toBeNull();
  });
});
