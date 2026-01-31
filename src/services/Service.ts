import axios from "axios";

const api = axios.create({
  baseURL: "https://genforcefit.onrender.com",
});

export async function cadastrar(
  url: string,
  dados: any,
  setDados: any
) {
  const response = await api.post(url, dados);
  setDados(response.data);
}

export async function buscar(
  url: string,
  setDados: any
) {
  const response = await api.get(url);
  setDados(response.data);
}

export async function deletar(
  url: string
) {
  await api.delete(url);
}
