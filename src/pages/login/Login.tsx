import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import type UsuarioLogin from "../../models/UsuarioLogin"
import { AuthContext } from "../../context/AuthContext"

import { Navbar } from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"

import "./Login.css"

function Login() {
  const navigate = useNavigate()
  const { handleLogin, isLoading, usuario } = useContext(AuthContext)

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({  } as UsuarioLogin)

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await handleLogin(usuarioLogin)
  }

  useEffect(() => {
    if (usuario.token) {
      navigate("/grupoMuscular")
    }
  }, [usuario])

  return (
    <>
      <Navbar />

      <section className="login-hero">
        <div className="login-hero-content container">

          {/* LADO ESQUERDO */}
          <div className="login-hero-left">
            <span className="login-badge">Espaço do Cliente</span>
            <h2>
              MOVIMENTO <br />
              <span>QUE TRANSFORMA</span>
            </h2>
          </div>

          {/* LADO DIREITO */}
          <div className="login-hero-right">
            <form onSubmit={login} className="login-form">

              <h3>Login</h3>
              <br />
              <input
                type="email"
                name="usuario"
                placeholder="E-mail"
                value={usuarioLogin.usuario}
                onChange={atualizarEstado}
                required
              />

              <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={usuarioLogin.senha}
                onChange={atualizarEstado}
                required
              />

              <button className="btn-main" disabled={isLoading}>
                {isLoading ? "Entrando..." : "Entrar"}
              </button>

              <div className="login-alt-action">
                <p>Ainda não tem conta?</p>
                <button
                  type="button"
                  className="login-link-btn"
                  onClick={() => navigate("/cadastromariana")}
                >
                  Criar conta
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}

export default Login