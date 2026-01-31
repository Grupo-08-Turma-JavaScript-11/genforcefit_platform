import { useState } from "react"
import { useNavigate } from "react-router-dom"
import type UsuarioLogin from "../../models/UsuarioLogin"
import { autenticarUsuario } from "../../services/authService"
import { ToastAlerta } from "../../utils/ToastAlerta"

function Login() {
  const navigate = useNavigate()

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    usuario: "",
    senha: "",
  })

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    })
  }

  async function entrar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      const response = await autenticarUsuario(usuarioLogin)

      // 🔹 ACRESCENTADO
      localStorage.setItem("token", response.token)
      localStorage.setItem("tipo", response.tipo)

      ToastAlerta("Login realizado com sucesso!", "sucesso")
      navigate("/home")
    } catch {
      ToastAlerta("Email ou senha inválidos", "erro")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={entrar}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          GenForceFit
        </h1>

        <input
          type="email"
          name="usuario"
          placeholder="Email"
          value={usuarioLogin.usuario}
          onChange={atualizarEstado}
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={usuarioLogin.senha}
          onChange={atualizarEstado}
          className="w-full mb-6 p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login
