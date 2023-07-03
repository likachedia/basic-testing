// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index'; 

jest.mock("axios");
// // const createSpy = jest.spyOn(axios, 'create');
// axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com'
// })

// jest.mock("axios", () => {
//   return {
//     get: jest.fn().mockResolvedValue("Mock in module factory"),
//   };
// });

// const mockedAxios = jest.mocked(axios);
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
    
    await throttledGetDataFromApi(getPath!);
    expect(getSpy).toBeCalledWith(getPath);

  });

  test('should return response data', async () => {
    // Write your test here
    // const users = [
    //   { id: 1, name: "John" },
    //   { id: 2, name: "Andrew" },
    // ];
    // axios.get.mockResolvedValueOnce(users);

    // // when
    // const result = await fetchUsers();

    // // then
    // expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
    // expect(result).toEqual(users);
  });
});
