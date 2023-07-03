// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index'; 

jest.mock("axios");
describe('throttledGetDataFromApi', () => {
  test('should create instance with provided base url', async () => {
    // const getSpy = jest.spyOn(axios.Axios.prototype, 'get')
    // .mockImplementation(async ()=> ({response: "response"}));
    // const createSpy = jest.spyOn(axios, 'create');
    // jest.useFakeTimers();
    // const path = 'some-path';
    // await throttledGetDataFromApi(path);
    // jest.runAllTimers();
    // const getPath = getSpy.mock.calls[0]?.[0];
    
    // expect(createSpy)
  });

  test('should perform request to correct provided url', async () => {
    const getSpy = jest.spyOn(axios.Axios.prototype, 'get')
    .mockImplementation(async ()=> ({response: "response"}));
    jest.useFakeTimers();
    const path = 'some-path';
    await throttledGetDataFromApi(path);
    jest.runAllTimers();
    const getPath = getSpy.mock.calls[0]?.[0];
    
    await throttledGetDataFromApi(path);
    expect(getSpy).toBeCalledWith(getPath);

  });

  test('should return response data', async () => {
    const users = [
      { id: 1, name: "John" },
      { id: 2, name: "Andrew" },
    ];
    const baseURL = 'https://jsonplaceholder.typicode.com'
    const getSpy = jest.spyOn(axios.Axios.prototype, 'get')
    .mockImplementation(async ()=> (users));
    jest.useFakeTimers();
    const path = 'some-path';
    const result = await throttledGetDataFromApi(path);
    jest.runAllTimers();
    const getPath = getSpy.mock.calls[0]?.[0];
    expect(getSpy).toBeCalledWith(getPath);

    jest.spyOn(axios.Axios.prototype, 'get').mockResolvedValueOnce(users);
    expect(axios.get).toHaveBeenCalledWith(baseURL);
    expect(result).toEqual(users);
  });
});

