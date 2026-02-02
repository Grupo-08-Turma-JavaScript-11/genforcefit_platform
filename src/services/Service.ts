import axios from "axios"

const api = axios.create({

  baseURL: "https://genforcefit.onrender.com",
 
  }

)

// 🔹 LOGIN
export const login = async (url: string, dados: object, setDados: Function) => {
   const resposta = await api.post(url, dados);
    setDados(resposta.data);
};

// 🔹 CADASTRAR USUÁRIO
export const cadastrarUsuario = async (url: string, dados: object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

// 🔹 BUSCAR (GET)
export const buscar = async (url: string, setDados: Function, header: object) => {
  const resposta = await api.get(url, header);
  setDados(resposta.data);
};

// 🔹 CADASTRAR (POST com token)
export const cadastrar = async (url: string, dados: object, setDados: Function, header: object) => {
  const resposta = await api.post(url, dados, header);
  setDados(resposta.data);
};

// 🔹 ATUALIZAR (PUT)
export const atualizar = async (url: string, dados: object, setDados: Function, header: object) => {
  const resposta = await api.put(url, dados, header);
  setDados(resposta.data);
};

// 🔹 DELETAR (DELETE)
export const deletar = async (url: string, header: object) => {
   await api.delete(url, header);
};

