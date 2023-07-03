// Uncomment the code below and write your tests

jest.mock('fs');
import  fs  from 'fs';
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';
import path from 'path';
const {existsSync} = jest.requireActual('fs');
// import * as fsPromises from 'node:fs/promises';
// import { existsSync } from 'fs';

// jest.spyOn(fs, 'existsSync');
// jest.spyOn(global, 'setTimeout');
describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    // jest.useFakeTimers();

    const callback = jest.fn();
    const delay = 1000;
    jest.spyOn(global, 'setTimeout')
    doStuffByTimeout(callback, delay);
    jest.advanceTimersByTime(delay);
    jest.runAllTimers();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(callback, delay);

    // jest.useRealTimers();
  });

  test('should call callback only after timeout', () => {
    const callback = jest.fn();
    const timeoutDuration = 1000;

    doStuffByTimeout(callback, timeoutDuration);

    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(timeoutDuration);

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    const callback = jest.fn();
    const intervalDuration = 1000;
    const timeoutDuration = 5000;

    doStuffByInterval(callback, intervalDuration);

    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(timeoutDuration);

    expect(callback).toBeCalled();
  });

  test('should call callback multiple times after multiple intervals', () => {
    const callback = jest.fn();
    const intervalDuration = 1000;
    const timeoutDuration = 5000; 

    doStuffByInterval(callback, intervalDuration);
    jest.advanceTimersByTime(timeoutDuration);

    expect(callback).toHaveBeenCalledTimes(5);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    const pathToFile = 'xome.txt';
    const mockJoin = jest.spyOn(path, 'join');
    await readFileAsynchronously(pathToFile);
    expect(mockJoin).toHaveBeenCalledWith(__dirname, pathToFile);
  });

  test('should return null if file does not exist', async () => {
    const pathToFile = './nonexistent.txt';

    jest.replaceProperty(fs, 'existsSync', () => false)
    const result = await readFileAsynchronously(pathToFile);

    expect(result).toBeNull();

    existsSync.mockRestore();
  });

  test('should return file content if file exists', async () => {
    // const pathToFile = 'test.txt';
    // const expectedContent = 'Test file content';

    // jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    
    // jest.spyOn(fs, 'readFile').mockReturnValue(Promise.resolve(expectedContent))

    // const result = await readFileAsynchronously(pathToFile);

    // expect(result).toBe(expectedContent);
  });
});
