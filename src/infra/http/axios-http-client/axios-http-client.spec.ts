import { HttpPostParams } from "@/data/protocols/http";
import { AxiosHttpClient } from "./axios-http-client";
import axios from "axios";

jest.mock("axios"); // para não ter que fazer chamadas reais para API
const mockedAxios = axios as jest.Mocked<typeof axios>; // tem o mesmo tipo que o módulo axios, mas com todas as suas funções substituídas por mock functions. Isso é necessário para que o TypeScript possa verificar se você está chamando as funções corretas e com os argumentos corretos
const mockAxiosResult = {
  data: "object",
  status: 200,
};
mockedAxios.post.mockResolvedValue(mockAxiosResult);

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

const mockPostRequest = (): HttpPostParams<any> => ({
  url: "any_url",
  body: {},
});

describe("AxiosHttpClient", () => {
  test("Should call axios with correct values", async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });
  test("Should return the correct statusCode and body", async () => {
    const sut = makeSut();
    const httpResponse = await sut.post(mockPostRequest());
    expect(httpResponse).toEqual({
      statusCode: mockAxiosResult.status,
      body: mockAxiosResult.data,
    });
  });
});
