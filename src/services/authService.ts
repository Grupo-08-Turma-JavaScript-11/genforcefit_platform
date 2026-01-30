import axios from "axios"
import type UsuarioLogin from "../models/UsuarioLogin"

const api = axios.create({
  baseURL: "https://genforcefit.onrender.com",
})

export async function autenticarUsuario(dados: UsuarioLogin) {
  const response = await api.post("/usuarios/logar", dados)
  return response.data
}
