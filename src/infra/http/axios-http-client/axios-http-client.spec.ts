import { HttpPostParams } from "@/data/protocols/http";
import { AxiosHttpClient } from "./axios-http-client";
import axios from "axios";

jest.mock("axios"); // para não ter que fazer chamadas reais para API
const mockedAxios = axios as jest.Mocked<typeof axios>; // tem o mesmo tipo que o módulo axios, mas com todas as suas funções substituídas por mock functions. Isso é necessário para que o TypeScript possa verificar se você está chamando as funções corretas e com os argumentos corretos

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

const mockPostRequest = (): HttpPostParams<any> => ({
  url: "any_url",
  body: {},
});

describe("AxiosHttpClient", () => {
  test("Should call axios with correct URL and Verb", async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenLastCalledWith(request.url);
  });
});
