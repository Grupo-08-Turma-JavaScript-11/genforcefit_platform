import axios from "axios";

const api = axios.create({
  baseURL: "https://genforcefit.onrender.com",

  headers : {

    Authorization :  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoYW5uYTJAZW1haWwuY29tLmJyIiwiaWF0IjoxNzcwMDQ0NzQ5LCJleHAiOjE3NzAwNDgzNDl9.eLnc8L0IdY1s72a4Ri083iX3MWaCx5qkmU7199Lpe9o"
  
 }
 
})

// 🔐 Se o backend NÃO exigir login, pode deixar assim
// Se exigir, a gente adiciona depois
// api.interceptors.request.use(config => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// 👤 USUÁRIO
export const cadastrarUsuario = async (
  url: string,
  dados: object,
  setDados: Function
) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const login = async (
  url: string,
  dados: object,
  setDados: Function
) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

// 📦 GENÉRICOS (Categoria, Grupo Muscular, Exercício etc.)
export const buscar = async (url: string, setDados: Function) => {
  const resposta = await api.get(url);
  setDados(resposta.data);
};

export const cadastrar = async (
  url: string,
  dados: object,
  setDados: Function
) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const atualizar = async (
  url: string,
  dados: object,
  setDados: Function
) => {
  const resposta = await api.put(url, dados);
  setDados(resposta.data);
};

export const deletar = async (url: string) => {
  await api.delete(url);
};
