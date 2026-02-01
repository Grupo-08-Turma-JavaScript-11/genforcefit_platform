import axios from "axios";

const api = axios.create({
  baseURL: "https://genforcefit.onrender.com",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

export async function cadastrar(
  url: string,
  dados: any,
  setDados: any
) {
  try {
    const body = {
      id: 0,
      nome: dados.nome,
      usuario: dados.usuario,
      senha: dados.senha,
      tipo: "USUARIO",
      altura: dados.altura ?? 0,
      peso: dados.peso ?? 0,
      IMC: 0,
      foto: dados.foto ?? "",
      exercicio: [],
    };

    const response = await api.post(url, body);
    setDados(response.data);
  } catch (error: any) {
    console.error(
      "❌ Erro no cadastro:",
      error.response?.data || error
    );
    throw error;
  }
}

export async function buscar(
  url: string,
  setDados: any
) {
  const response = await api.get(url);
  setDados(response.data);
}

export async function deletar(url: string) {
  await api.delete(url);
}

export async function atualizar(
  url: string,
  dados: object,
  setDados: any
) {
  const response = await api.put(url, dados);
  setDados(response.data);
}
