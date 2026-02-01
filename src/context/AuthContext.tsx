import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { autenticarUsuario } from "../services/authService";
import { ToastAlerta } from "../utils/ToastAlerta";

interface AuthContextProps {
  token: string | null;
  tipo: string | null;
  isLoading: boolean;
  login: (dados: UsuarioLogin) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null);
  const [tipo, setTipo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // 🔹 Recupera auth ao recarregar a página
  useEffect(() => {
    const tokenSalvo = localStorage.getItem("token");
    const tipoSalvo = localStorage.getItem("tipo");

    if (tokenSalvo) setToken(tokenSalvo);
    if (tipoSalvo) setTipo(tipoSalvo);
  }, []);

  async function login(dados: UsuarioLogin) {
    setIsLoading(true);

    try {
      const response = await autenticarUsuario(dados);

      // ✅ token salvo JÁ com Bearer
      const tokenComBearer = `Bearer ${response.token}`;

      setToken(tokenComBearer);
      setTipo(response.tipo);

      localStorage.setItem("token", tokenComBearer);
      localStorage.setItem("tipo", response.tipo);

      ToastAlerta("Login realizado com sucesso!", "sucesso");
    } catch {
      ToastAlerta("Email ou senha inválidos", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  function logout() {
    setToken(null);
    setTipo(null);

    localStorage.removeItem("token");
    localStorage.removeItem("tipo");
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        tipo,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
