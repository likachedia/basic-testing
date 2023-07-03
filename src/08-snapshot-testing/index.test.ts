// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const elements = [1];
    const expectedLinkedList = {
      value: 1,
      next: {
        value: null,
        next: null,
      },
    };

    const result = generateLinkedList(elements);

    expect(result).toStrictEqual(expectedLinkedList);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    // Write your test here
    const elements = [2];
    const result = generateLinkedList(elements);

    expect(result).toMatchSnapshot();
  });
});
