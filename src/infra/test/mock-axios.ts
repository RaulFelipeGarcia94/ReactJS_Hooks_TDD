import axios from "axios";

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>; // tem o mesmo tipo que o módulo axios, mas com todas as suas funções substituídas por mock functions. Isso é necessário para que o TypeScript possa verificar se você está chamando as funções corretas e com os argumentos corretos

  mockedAxios.post.mockResolvedValue({
    data: "object",
    status: 200,
  });

  return mockedAxios;
};
