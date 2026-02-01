import { createContext, type ReactNode, useEffect, useState } from "react"
import type UsuarioLogin from "../models/UsuarioLogin"
import type Usuario from "../models/Usuario"
import { login } from "../services/Service"
import { ToastAlerta } from "../utils/ToastAlerta"

interface AuthContextProps {
  usuario: Usuario
  handleLogout(): void
  handleLogin(usuario: UsuarioLogin): Promise<void>
  isLoading: boolean
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    tipo: "",
    altura: 0,
    peso: 0,
    IMC: 0,
    foto: "",
    token: "",
    exercicio: []
  })

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const tokenSalvo = localStorage.getItem("token")

    if (tokenSalvo) {
      setUsuario((prev) => ({
        ...prev,
        token: tokenSalvo
      }))
    }
  }, [])

  async function handleLogin(usuarioLogin: UsuarioLogin) {
    setIsLoading(true)

    try {
      const resposta = await login("/usuarios/logar", usuarioLogin)

      // backend retorna Usuario completo + token
      setUsuario(resposta.data)
      localStorage.setItem("token", resposta.data.token)

      ToastAlerta("Usuário autenticado com sucesso!", "sucesso")
    } catch (error) {
      ToastAlerta("Usuário ou senha inválidos!", "erro")
    } finally {
      setIsLoading(false)
    }
  }

  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      tipo: "",
      altura: 0,
      peso: 0,
      IMC: 0,
      foto: "",
      token: "",
      exercicio: []
    })

    localStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        handleLogin,
        handleLogout,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
