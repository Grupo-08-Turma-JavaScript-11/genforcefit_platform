import { useState } from "react"
import { useNavigate } from "react-router-dom"

import type Usuario from "../../models/Usuario"
import { cadastrarUsuario } from "../../services/Service"
import { ToastAlerta } from "../../utils/ToastAlerta"

import "../login/Login.css"
import "./Cadastro.css"

function Cadastro() {
  const navigate = useNavigate()

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    tipo: "Aluno",
    altura: 0,
    peso: 0,
    IMC: 0,
    foto: "",
    exercicio: []
  })

  const [confirmarSenha, setConfirmarSenha] = useState("")
  const [carregando, setCarregando] = useState(false)

  function atualizarEstado(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target

    setUsuario({
      ...usuario,
      [name]:
        name === "altura" || name === "peso"
          ? Number(value)
          : value
    })
  }

  async function cadastrar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (usuario.senha !== confirmarSenha) {
      ToastAlerta("As senhas não conferem", "erro")
      return
    }

    if (!usuario.tipo) {
      ToastAlerta("Selecione o tipo de usuário", "erro")
      return
    }

    try {
      setCarregando(true)

      await cadastrarUsuario("/usuarios", usuario)

      ToastAlerta("Usuário cadastrado com sucesso!", "sucesso")

      navigate("/login")
    } catch (error) {
      ToastAlerta("Erro ao cadastrar usuário", "erro")
    } finally {
      setCarregando(false)
    }
  }

  return (
    <>
      
      <section className="login-hero">
        <div className="login-hero-content container">
          {/* LADO ESQUERDO */}
          <div className="login-hero-left">
            <span className="login-badge">Transforme seu corpo</span>
            <h2>
              SUA JORNADA <br />
              <span>COMEÇA AQUI</span>
            </h2>
          </div>
          {/* LADO DIREITO */}
          <div className="login-hero-right">
            <form onSubmit={cadastrar} className="login-form">
              <br />
              <h3>Criar Conta</h3>
              <br />
              <input
                type="text"
                name="nome"
                placeholder="Nome completo"
                value={usuario.nome}
                onChange={atualizarEstado}
                required
              />

              <input
                type="email"
                name="usuario"
                placeholder="E-mail"
                value={usuario.usuario}
                onChange={atualizarEstado}
                required
              />

              <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={usuario.senha}
                onChange={atualizarEstado}
                required
              />

              <input
                type="password"
                placeholder="Confirmar senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                required
              />

              <input
                type="number"
                name="altura"
                placeholder="Altura (cm)"
                value={usuario.altura || ""}
                onChange={atualizarEstado}
              />

              <input
                type="number"
                name="peso"
                placeholder="Peso (kg)"
                value={usuario.peso || ""}
                onChange={atualizarEstado}
              />

              <br /><button className="btn-main" disabled={carregando}>
                {carregando ? "Criando conta..." : "Cadastrar"}
              </button>

              <div className="login-alt-action">
                <br /> <p>Já tem uma conta?</p>
                <br />
                <button
                  type="button"
                  className="login-link-btn"
                  onClick={() => navigate("/loginmariana")}
                >
                  Fazer Login
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      
    </>
  )
}

export default Cadastro
