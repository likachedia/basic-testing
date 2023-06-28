// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: 2, b: 1, action: Action.Subtract, expected: 1 },
    { a: 2, b: 2, action: Action.Subtract, expected: 0 },
    { a: 3, b: 2, action: Action.Subtract, expected: 1 },
    { a: 2, b: 1, action: Action.Multiply, expected: 2 },
    { a: 2, b: 2, action: Action.Multiply, expected: 4 },
    { a: 3, b: 2, action: Action.Multiply, expected: 6 },
    { a: 2, b: 1, action: Action.Divide, expected: 2 },
    { a: 6, b: 2, action: Action.Divide, expected: 3 },
    { a: 12, b: 2, action: Action.Divide, expected: 6 },
    { a: 10, b: 1, action: Action.Exponentiate, expected: 10 },
    { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
    { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
    { a: '3', b: '2', action: Action.Divide, expected: null },
    { a: '4', b: '5', action: Action.Multiply, expected: null },
    { a: 's2', b: '5', action: Action.Add, expected: null },
    { a: 10, b: 1, action: 'Add', expected: null },
    { a: 2, b: 3, action: "Action", expected: null },
    { a: 3, b: 2, action: 'Multiply', expected: null },
    // continue cases for other actions    
];

describe.each(testCases)(`.($a, $b)`, ({a, b, action, expected}) => {
  test(`${action} (${a}, ${b}) returns ${expected}`, () => {
    expect(simpleCalculator({a: a, b: b, action: action})).toBe(expected);
  });
});
